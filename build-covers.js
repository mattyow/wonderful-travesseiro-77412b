// build-covers.js — runs on Netlify's build server before deploy.
// Reads books.js, fetches a cover URL and publication year for each book,
// writes books-enriched.js.

const fs = require('fs');
const path = require('path');

const booksFileContent = fs.readFileSync(path.join(__dirname, 'books.js'), 'utf8');
const match = booksFileContent.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
if (!match) {
  console.error('Could not parse books.js — expected `const BOOKS = [...]` format');
  process.exit(1);
}
const BOOKS = eval(match[1]);
console.log(`Loaded ${BOOKS.length} books from books.js`);

// Reuse already-fetched data from a previous build
let existingData = {};
const enrichedPath = path.join(__dirname, 'books-enriched.js');
if (fs.existsSync(enrichedPath)) {
  try {
    const prev = fs.readFileSync(enrichedPath, 'utf8');
    const prevMatch = prev.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
    if (prevMatch) {
      const prevBooks = eval(prevMatch[1]);
      prevBooks.forEach(b => {
        if (b.isbn) {
          existingData[b.isbn] = {
            coverUrl: b.coverUrl,
            publicationYear: b.publicationYear
          };
        }
      });
      console.log(`Reusing data for ${Object.keys(existingData).length} books from previous build`);
    }
  } catch (e) {
    console.log('Could not read previous enriched file — fetching everything fresh.');
  }
}

function extractYear(dateStr) {
  if (!dateStr) return null;
  const m = String(dateStr).match(/\d{4}/);
  return m ? parseInt(m[0], 10) : null;
}

async function googleBooksData(isbn) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&fields=items(volumeInfo(imageLinks,publishedDate))`
    );
    if (!res.ok) return { coverUrl: null, year: null };
    const data = await res.json();
    const info = data?.items?.[0]?.volumeInfo;
    if (!info) return { coverUrl: null, year: null };

    let coverUrl = null;
    const links = info.imageLinks;
    if (links) {
      coverUrl = links.extraLarge || links.large || links.medium ||
                 links.small || links.thumbnail || links.smallThumbnail;
      if (coverUrl) {
        coverUrl = coverUrl.replace(/^http:\/\//, 'https://').replace(/&edge=curl/, '');
      }
    }

    const year = extractYear(info.publishedDate);
    return { coverUrl, year };
  } catch {
    return { coverUrl: null, year: null };
  }
}

async function openLibraryData(isbn) {
  let coverUrl = null;
  let year = null;

  // Cover via Open Library Covers API
  const coverCandidate = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    const res = await fetch(coverCandidate, { method: 'HEAD' });
    if (res.ok) coverUrl = coverCandidate;
  } catch {}
// Single API call that returns the work's first_publish_year if available
  try {
    const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
    if (res.ok) {
      const data = await res.json();
      let yearStr = data.publish_date;
      if (data.works && data.works[0] && data.works[0].key) {
        try {
          const workRes = await fetch(`https://openlibrary.org${data.works[0].key}.json`);
          if (workRes.ok) {
            const workData = await workRes.json();
            if (workData.first_publish_date) {
              yearStr = workData.first_publish_date;
            }
          }
        } catch {}
      }
      year = extractYear(yearStr);
    }
  } catch {}

  return { coverUrl, year };
}

async function findData(isbn) {
  if (!isbn) return { coverUrl: null, year: null };

  const cached = existingData[isbn] || {};
  if (cached.coverUrl && cached.publicationYear) {
    return { coverUrl: cached.coverUrl, year: cached.publicationYear };
  }

  let coverUrl = cached.coverUrl || null;
  let year = cached.publicationYear || null;

  // Always try Google Books first — its cover coverage is best.
  if (!coverUrl || !year) {
    const g = await googleBooksData(isbn);
    if (!coverUrl && g.coverUrl) coverUrl = g.coverUrl;
    if (!year && g.year) year = g.year;
  }

// Open Library fills in: missing covers AND original publication year
  if (!coverUrl || !year) {
    const ol = await openLibraryData(isbn);
    if (!coverUrl && ol.coverUrl) coverUrl = ol.coverUrl;
    if (ol.year) year = ol.year;
  }

  // Bookshop.org as last-resort cover fallback (predictable URL pattern)
  if (!coverUrl) {
    const bookshopUrl = `https://images-us.bookshop.org/ingram/${isbn}.jpg`;
    try {
      const res = await fetch(bookshopUrl, { method: 'HEAD' });
      if (res.ok && res.headers.get('content-type')?.startsWith('image/')) {
        coverUrl = bookshopUrl;
      }
    } catch {}
  }

  return { coverUrl, year };
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function openLibraryData(isbn) {
  let coverUrl = null;
  let year = null;

  // Cover via Open Library Covers API
  const coverCandidate = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    const res = await fetch(coverCandidate, { method: 'HEAD' });
    if (res.ok) coverUrl = coverCandidate;
  } catch {}

  // Single API call that returns the work's first_publish_year if available
  try {
    const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
    if (res.ok) {
      const data = await res.json();
      // Try edition's publish_date first
      let yearStr = data.publish_date;
      // If we have a works reference, fetch first_publish_date
      if (data.works && data.works[0] && data.works[0].key) {
        try {
          const workRes = await fetch(`https://openlibrary.org${data.works[0].key}.json`);
          if (workRes.ok) {
            const workData = await workRes.json();
            if (workData.first_publish_date) {
              yearStr = workData.first_publish_date;
            }
          }
        } catch {}
      }
      year = extractYear(yearStr);
    }
  } catch {}

  return { coverUrl, year };
}



function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  let newFetches = 0, cached = 0, missesCover = 0, missesYear = 0;

  for (let i = 0; i < BOOKS.length; i++) {
    const book = BOOKS[i];
    if (!book.isbn) { missesCover++; missesYear++; continue; }

// Manual override from Airtable Cover URL field always wins
    const manualUrl = book.manualCoverUrl;
    if (manualUrl) {
      book.coverUrl = manualUrl;
      delete book.manualCoverUrl;
    }

    const existing = existingData[book.isbn];

    // If we already have everything we need (cover + year), skip API
    if (book.coverUrl && existing && existing.publicationYear) {
      book.publicationYear = existing.publicationYear;
      cached++;
      continue;
    }

    // Standard cached path (no manual override)
    if (!manualUrl && existing && existing.coverUrl && existing.publicationYear) {
      book.coverUrl = existing.coverUrl;
      book.publicationYear = existing.publicationYear;
      cached++;
      continue;
    }

    const result = await findData(book.isbn);
    if (result.coverUrl) book.coverUrl = result.coverUrl;
    else missesCover++;
    if (result.year) book.publicationYear = result.year;
    else missesYear++;

    newFetches++;

    if ((i + 1) % 50 === 0) {
      console.log(`${i + 1}/${BOOKS.length} | new: ${newFetches} | cached: ${cached} | no-cover: ${missesCover} | no-year: ${missesYear}`);
    }
    // Pace ~3 requests/sec to allow multiple API calls per book
    await sleep(800);
  }

  console.log(`\nFinal: ${newFetches} newly fetched, ${cached} from cache`);
  console.log(`Missing covers: ${missesCover}, missing years: ${missesYear}`);

  const out = 'const BOOKS = ' + JSON.stringify(BOOKS, null, 2) + ';\n';
  fs.writeFileSync(enrichedPath, out);
  console.log(`Wrote ${enrichedPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
