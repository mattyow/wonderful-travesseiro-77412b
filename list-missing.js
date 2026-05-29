const fs = require('fs');
const content = fs.readFileSync('./books-enriched.js', 'utf8');
const match = content.match(/const BOOKS = (\[[\s\S]*\]);?\s*$/);
const BOOKS = eval(match[1]);
const missing = BOOKS.filter(b => !b.coverUrl);
console.log('Total without coverUrl: ' + missing.length);
missing.forEach(b => console.log('  ' + b.title + ' | ' + b.author + ' | ISBN: ' + (b.isbn || 'NONE')));
