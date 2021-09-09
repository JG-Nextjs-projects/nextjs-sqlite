import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

export default async function handler(req, res) {
  const db = await open({
    filename: './data/books.db',
    driver: sqlite3.Database
  })

  if (req.method === 'POST') {
    // Create a new record
    const statement = await db.prepare(
      'INSERT INTO books title = ?, author = ?'
    )
    const result = await statement.run(
      req.body.title,
      req.body.author
    )
    res.status(200).json(result)
  } else {
    // Do nothing
  }
}