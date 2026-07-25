const { Client } = require('pg');
const fs = require('fs');
const client = new Client({ connectionString: 'postgresql://postgres:%5BWahiHai%40321%5D@db.wwpiftimeoaoizerilhz.supabase.co:5432/postgres' });
async function run() { await client.connect(); const sql = fs.readFileSync('src/lib/schema.sql', 'utf8'); await client.query(sql); console.log('Schema applied successfully'); await client.end(); }
run().catch(console.error);
