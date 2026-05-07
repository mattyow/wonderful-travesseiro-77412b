export interface Book {
  id: string;
  title: string;
  author: string;
  additionalAuthors: string;
  isbn: string;
  isbn13: string;
  tags: string[];
  coverUrl: string | null;
}

interface AirtableRecord {
  id: string;
  fields: {
    Title?: string;
    Author?: string;
    'Additional Authors'?: string;
    ISBN?: string;
    ISBN13?: string;
    Tags?: string[];
  };
}

async function fetchAllRecords(): Promise<AirtableRecord[]> {
  const token = process.env.AIRTABLE_TOKEN ?? import.meta.env.AIRTABLE_TOKEN;
  if (!token) {
    console.warn('AIRTABLE_TOKEN is not set — building with empty book list');
    return [];
  }

  const baseId = 'app7hFZ8KaiyDdHDm';
  const table = 'Books';
  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const url = new URL(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`);
    if (offset) url.searchParams.set('offset', offset);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Airtable API error ${res.status}: ${text}`);
    }

    const data = await res.json() as { records: AirtableRecord[]; offset?: string };
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return records;
}

function sanitizeIsbn(raw: string | undefined): string {
  if (!raw) return '';
  let s = raw.trim();
  // Strip Excel/CSV formula prefix: ="..."
  if (s.startsWith('=')) s = s.slice(1);
  // Strip wrapping straight or smart quotes
  s = s.replace(/^["'“‘]|["'”’]$/g, '');
  // Remove anything that isn't a digit or X
  s = s.replace(/[^0-9Xx]/g, '');
  return s;
}

function coverUrl(isbn13: string, isbn: string): string | null {
  const id = sanitizeIsbn(isbn13) || sanitizeIsbn(isbn);
  if (!id) return null;
  return `https://covers.openlibrary.org/b/isbn/${id}-L.jpg`;
}

export async function getBooks(): Promise<{ books: Book[]; hasTags: boolean }> {
  const records = await fetchAllRecords();

  const books: Book[] = records.map((r) => ({
    id: r.id,
    title: r.fields.Title ?? 'Untitled',
    author: r.fields.Author ?? '',
    additionalAuthors: r.fields['Additional Authors'] ?? '',
    isbn: r.fields.ISBN ?? '',
    isbn13: r.fields.ISBN13 ?? '',
    tags: r.fields.Tags ?? [],
    coverUrl: coverUrl(r.fields.ISBN13 ?? '', r.fields.ISBN ?? ''),
  }));

  const hasTags = records.some((r) => Array.isArray(r.fields.Tags) && r.fields.Tags.length > 0);

  return { books, hasTags };
}
