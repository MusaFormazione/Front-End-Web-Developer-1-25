import HPBook from "../HPBook"

function HPBookList({ books, error, loading }) {
  return <>
    {loading && <h2>Loading...</h2>}
    {error && <p className='alert alert-danger'>Error: {error}</p>}
    {books && books.map(book => <HPBook key={book.index} book={book} />)}
  </>
}

export default HPBookList
