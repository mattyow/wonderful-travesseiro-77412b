// build-covers.js — runs on Netlify's build server before deploy.
// Reads books.js, fetches a cover URL for each book, writes books-enriched.js.

const fs = require('fs');
const path = require('path');

// Load books.js by reading the file and eval'ing the array
const booksFileContent = fs.readFileSync(path.join(__dirname, 'books.js'), 'utf8');
const match = booksFileContent.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
if (!match) {
  console.error('Could not parse books.js — expected `const BOOKS = [...]` format');
  process.exit(1);
}
const BOOKS = eval(match[1]);
console.log(`Loaded ${BOOKS.length} books from books.js`);

// Optional: reuse already-fetched cover URLs from a previous build
// to skip API calls for books we've already enriched.
let existingCovers = {};
const enrichedPath = path.join(__dirname, 'books-enriched.js');
if (fs.existsSync(enrichedPath)) {
  try {
    const prev = fs.readFileSync(enrichedPath, 'utf8');
    const prevMatch = prev.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
    if (prevMatch) {
      const prevBooks = eval(prevMatch[1]);
      prevBooks.forEach(b => {
        if (b.isbn && b.coverUrl) existingCovers[b.isbn] = b.coverUrl;
      });
      console.log(`Reusing ${Object.keys(existingCovers).length} cached cover URLs`);
    }
  } catch (e) {
    console.log('Could not read previous enriched file — fetching everything fresh.');
  }
}

async function googleBooksCover(isbn) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&fields=items(volumeInfo/imageLinks)`
    );
    if (!res.ok) return null;
    const data = await res.json();
    const links = data?.items?.[0]?.volumeInfo?.imageLinks;
    if (!links) return null;
    let url =
      links.extraLarge || links.large || links.medium ||
      links.small || links.thumbnail || links.smallThumbnail;
    if (!url) return null;
    return url.replace(/^http:\/\//, 'https://').replace(/&edge=curl/, '');
  } catch {
    return null;
  }
}

async function openLibraryCover(isbn) {
  const url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok ? url : null;
  } catch {
    return null;
  }
}

async function findCover(isbn) {
  if (!isbn) return null;
  if (existingCovers[isbn]) return existingCovers[isbn];
  const g = await googleBooksCover(isbn);
  if (g) return g;
  const o = await openLibraryCover(isbn);
  return o;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  let hits = 0, misses = 0, cached = 0;

  for (let i = 0; i < BOOKS.length; i++) {
    const book = BOOKS[i];
    if (!book.isbn) { misses++; continue; }

    // Skip API call if we already have it from a previous build
    if (existingCovers[book.isbn]) {
      book.coverUrl = existingCovers[book.isbn];
      cached++;
      continue;
    }

    const url = await findCover(book.isbn);
    if (url) {
      book.coverUrl = url;
      hits++;
    } else {
      misses++;
    }

    if ((i + 1) % 50 === 0) {
      console.log(`${i + 1}/${BOOKS.length} | new: ${hits} | cached: ${cached} | miss: ${misses}`);
    }
    await sleep(150); // pace requests
  }

  console.log(`\nFinal: ${hits} newly fetched, ${cached} from cache, ${misses} no cover`);

  // Write the enriched file
  const out = 'const BOOKS = ' + JSON.stringify(BOOKS, null, 2) + ';\n';
  fs.writeFileSync(enrichedPath, out);
  console.log(`Wrote ${enrichedPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
