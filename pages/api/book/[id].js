export default function handler(req, res) {
if (req.method === 'PUT') {
    // Update an existing record
  } else {
    // Display a record
    res.status(200).json({ title: 'Books Title' })
  }
}