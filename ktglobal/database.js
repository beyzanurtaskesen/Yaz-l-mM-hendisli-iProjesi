const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Veritabanı dosyasının yolu
const dbPath = path.resolve(__dirname, 'veritabani.sqlite');
console.log('Veritabanı dosyasının yolu:', dbPath);

// Veritabanına bağlanma
function connectToDatabase() {
  return new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Veritabanı bağlantı hatası:', err.message);
    } else {
      console.log('SQLite veritabanına başarıyla bağlandı.');
    }
  });
}

// Tabloları oluşturma
function createTables(db) {
  const queries = [
    `CREATE TABLE IF NOT EXISTS Adminler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS Urunler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL,
      aciklama TEXT,
      resim BLOB
    );`,
    `CREATE TABLE IF NOT EXISTS Iletisim (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      adsoyad TEXT NOT NULL,
      email TEXT NOT NULL,
      telefon TEXT NOT NULL
    );`,
  ];

  queries.forEach((query) => {
    db.run(query, (err) => {
      if (err) {
        console.error('Tablo oluşturulurken hata:', err.message);
      } else {
        console.log('Tablo başarıyla oluşturuldu:', query.split(' ')[2]);
      }
    });
  });
}

// Veri ekleme
function insertData(db) {
  const query = `INSERT INTO Adminler (username, password) VALUES (?, ?)`;
  db.run(query, ['admin', 'admin123'], function (err) {
    if (err) {
      console.error('Veri eklenirken hata:', err.message);
    } else {
      console.log(`Yeni admin eklendi, ID: ${this.lastID}`);
    }
  });
}

// Verileri okuma
function readData(db) {
  db.all("SELECT * FROM Adminler", [], (err, rows) => {
    if (err) {
      console.error('Veri sorgulama hatası:', err.message);
    } else {
      console.log('Adminler Tablosu Verisi:', rows);
    }
  });
}

// Ana iş akışı
function main() {
  const db = connectToDatabase();
  createTables(db); // Tabloları oluştur
  insertData(db); // Veri ekle
  readData(db); // Verileri oku
  db.close((err) => {
    if (err) {
      console.error('Veritabanı bağlantısı kapatma hatası:', err.message);
    } else {
      console.log('Veritabanı bağlantısı kapatıldı.');
    }
  });
}

// Çalıştır
main();

