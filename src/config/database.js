const { createClient } = require('@libsql/client');

const tursoClient = createClient({
    url: process.env.TURSO_DATABASE_URL || 'libsql://edgartech-db-edgarizkys.turso.io',
    authToken: process.env.TURSO_AUTH_TOKEN || ''
});

async function initializeDatabase() {
    try {
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS surat_cinta (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', judul TEXT NOT NULL, untuk TEXT NOT NULL, isi TEXT NOT NULL, tanggal TEXT NOT NULL, mood TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table surat_cinta (Multi-Tenant) ready');
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS kenangan (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', judul TEXT NOT NULL, tanggal TEXT NOT NULL, lokasi TEXT NOT NULL, deskripsi TEXT NOT NULL, perasaan TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table kenangan (Multi-Tenant) ready');
        await tursoClient.execute(`CREATE TABLE IF NOT EXISTS janji (id INTEGER PRIMARY KEY AUTOINCREMENT, tenant_id TEXT DEFAULT 'default', judul TEXT NOT NULL, isi TEXT NOT NULL, tanggal TEXT NOT NULL, status TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        console.log('[DB] Table janji (Multi-Tenant) ready');
    } catch(e) { console.log('DB Notice:', e.message); }
}

module.exports = { tursoClient, initializeDatabase };