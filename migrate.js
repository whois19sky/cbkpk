const { Client } = require('pg');
const fs = require('fs');
// NOTE: This connection string points to the OLD Supabase project and is no longer
// valid for the current project (mwlmrpgcapaydccxqhsu). This script is not used by
// the live site — safe to ignore or delete unless you specifically need to run a
// one-off migration, in which case update the connection string first.
const client = new Client({ connectionString: 'postgresql://postgres:%5BWahiHai%40321%5D@db.wwpiftimeoaoizerilhz.supabase.co:5432/postgres' });
async function run() { await client.connect(); const sql = fs.readFileSync('src/lib/schema.sql', 'utf8'); await client.query(sql); console.log('Schema applied successfully'); await client.end(); }
run().catch(console.error);
