const bookForm = () => {
  const formPost = async e => {
    e.preventDefault()

    const res = await fetch('/api/book', {
      body: JSON.stringify({
        title: e.target.title.value,
        author: e.target.author.value
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    })
  
    const result = await res.json()
    e.target.reset()
  }

  return (
    <form onSubmit={formPost}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" autoComplete="title" required />
      <br />
      <label htmlFor="author">Author</label>
      <input id="author" name="author" type="text" autoComplete="author" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default bookForm