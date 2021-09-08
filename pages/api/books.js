import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

export default async function handler(req, res) {
  const response = await open({
    filename: './data/books.db',
    driver: sqlite3.Database
  })
  const data = await response.all('select * from books')

  res.status(200).json(data)
}