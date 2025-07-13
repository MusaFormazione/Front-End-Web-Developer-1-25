import MusaCol from '../MusaLayout/MusaCol'

function HPBook ({ book }) {
  return (
    <MusaCol key={book.index} className='col-12 col-md-6 col-lg-4'>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
    </MusaCol>
  )
}

export default HPBook
