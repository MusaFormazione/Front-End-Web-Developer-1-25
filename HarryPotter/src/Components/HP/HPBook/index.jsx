import { MusaCol } from '../../Musa/MusaLayout'
import MusaCard from '../../Musa/MusaCard'

function HPBook({ book }) {
  return <MusaCol key={book.index} md={6} lg={4} xl={4}>
    <MusaCard key={book.index} title={book.title} image={{ src: book.cover }} >
      {book.description}
    </MusaCard>
  </MusaCol>
}

export default HPBook
