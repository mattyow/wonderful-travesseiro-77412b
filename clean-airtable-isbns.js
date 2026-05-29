// clean-airtable-isbns.js — strips ="..." wrapping from ISBN fields
// Run once after granting write scope to your Airtable token.
// Run with: node clean-airtable-isbns.js

const fs = require('fs');
const path = require('path');

function loadEnv() {
  const content = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    process.env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  });
}
loadEnv();

const TOKEN = process.env.AIRTABLE_TOKEN;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

function cleanIsbn(value) {
  if (!value) return '';
  return String(value)
    .trim()
    .replace(/^=/, '')
    .replace(/^["'\u201C\u2018]+|["'\u201D\u2019]+$/g, '')
    .replace(/[^0-9Xx]/g, '');
}

async function fetchAll() {
  const records = [];
  let offset = null;
  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`);
    if (offset) url.searchParams.set('offset', offset);
    const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
    if (!res.ok) throw new Error(`Read error ${res.status}: ${await res.text()}`);
    const data = await res.json();
    records.push(...data.records);
    offset = data.offset;
  } while (offset);
  return records;
}

async function updateBatch(updates) {
  // Airtable allows up to 10 records per PATCH call
  const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: updates })
  });
  if (!res.ok) throw new Error(`Update error ${res.status}: ${await res.text()}`);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  console.log('Fetching all records...');
  const records = await fetchAll();
  console.log(`Total: ${records.length} records\n`);

  const updates = [];
  let isbnFixCount = 0;
  let isbn13FixCount = 0;

  for (const r of records) {
    const fields = {};
    const origIsbn = r.fields.ISBN;
    const origIsbn13 = r.fields.ISBN13;

    if (origIsbn) {
      const cleaned = cleanIsbn(origIsbn);
      if (cleaned !== origIsbn) {
        fields.ISBN = cleaned;
        isbnFixCount++;
      }
    }

    if (origIsbn13) {
      const cleaned = cleanIsbn(origIsbn13);
      if (cleaned !== origIsbn13) {
        fields.ISBN13 = cleaned;
        isbn13FixCount++;
      }
    }

    if (Object.keys(fields).length > 0) {
      updates.push({ id: r.id, fields });
    }
  }

  console.log(`Records needing ISBN cleanup: ${isbnFixCount}`);
  console.log(`Records needing ISBN13 cleanup: ${isbn13FixCount}`);
  console.log(`Total records to update: ${updates.length}\n`);

  if (updates.length === 0) {
    console.log('Nothing to update. Exiting.');
    return;
  }

  // Submit in batches of 10
  let done = 0;
  for (let i = 0; i < updates.length; i += 10) {
    const batch = updates.slice(i, i + 10);
    await updateBatch(batch);
    done += batch.length;
    console.log(`Updated ${done}/${updates.length}`);
    await sleep(250); // light pacing
  }

  console.log('\nDone. ISBN fields are now clean.');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});