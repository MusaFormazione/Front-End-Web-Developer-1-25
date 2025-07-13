import MusaCard from "../../Musa/MusaCard";
import { MusaCol } from "../../Musa/MusaLayout";

function HPBookList({ books, error, loading }) {
  return <>
    {loading && <h2>Loading...</h2>}
    {error && <p className='alert alert-danger'>Error: {error}</p>}
    {books && books.map(book => <MusaCol key={book.index} md={6} lg={4} xl={4}>
        <MusaCard key={book.index} title={book.title} image={{ src: book.cover }} >
          {book.description}
        </MusaCard>
      </MusaCol>
    )}
  </>
}

export default HPBookList
