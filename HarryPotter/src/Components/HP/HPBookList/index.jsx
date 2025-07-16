import { MusaError, MusaLoading } from "../../Musa/MusaAlert"
import MusaGhostCardList from "../../Musa/MusaGhostCardList"
import HPBook from "../HPBook"

function HPBookList({ books, error, loading }) {
  return <>
    {loading && <MusaGhostCardList loading={loading} />}
    {error && <MusaError>Error: {error}</MusaError>}
    {books && books.map(book => <HPBook key={book.index} book={book} />)}
  </>
}

export default HPBookList
