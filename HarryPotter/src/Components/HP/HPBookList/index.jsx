import { MusaError, MusaLoading } from "../../Musa/MusaAlert"
import HPBook from "../HPBook"

function HPBookList({ books, error, loading }) {
  return <>
    {loading && <MusaLoading>Libri</MusaLoading>}
    {error && <MusaError>Error: {error}</MusaError>}
    {books && books.map(book => <HPBook key={book.index} book={book} />)}
  </>
}

export default HPBookList
