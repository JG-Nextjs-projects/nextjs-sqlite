const sqlite3 = require('sqlite3').verbose()

// Create database file if it does not exist and Open for Read/Write
export let db = new sqlite3.Database('./data/books.db', (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to database.')
  }
})