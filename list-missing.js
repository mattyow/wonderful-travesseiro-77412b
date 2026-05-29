const fs = require('fs');
const content = fs.readFileSync('./books-enriched.js', 'utf8');
const match = content.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
const BOOKS = eval(match[1]);

const missingCover = BOOKS.filter(b => !b.coverUrl);
const missingYear = BOOKS.filter(b => !b.publicationYear);

console.log(`Books missing cover: ${missingCover.length}`);
console.log(`Books missing year: ${missingYear.length}\n`);

console.log('--- MISSING COVERS ---');
missingCover.forEach(b => {
  console.log(`  ${b.title} | ${b.author} | ISBN: ${b.isbn || 'NONE'}`);
});
