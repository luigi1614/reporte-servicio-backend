const Database = require('better-sqlite3');
const db = new Database('./data/reporte.db');

db.exec(`
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  logo_path TEXT,
  signature_path TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reportes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  usuario_id INTEGER NOT NULL,
  folio TEXT,
  empresa TEXT,
  contacto TEXT,
  direccion TEXT,
  ciudad TEXT,
  estado TEXT,
  cp TEXT,
  telefono TEXT,
  descripcion TEXT,
  fecha_atencion TEXT,
  hora_inicio TEXT,
  hora_fin TEXT,
  observaciones TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES users(id) ON DELETE CASCADE
);
`);

console.log('Base de datos inicializada en ./data/reporte.db');
db.close();
