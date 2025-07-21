import { MusaAlert, MusaLoading } from '../MusaAlert'
import { MusaCol } from '../MusaLayout'
import MusaGhostCard from '../MusaGhostCard'

function MusaGhostCardList ({ loading, message }) {
  return (
    <>
      {loading && <MusaLoading>Libri</MusaLoading>}
      {message && <MusaAlert>{message}</MusaAlert>}
      <MusaCol md={6} lg={4} xl={4}>
        <MusaGhostCard />
      </MusaCol>
      <MusaCol md={6} lg={4} xl={4}>
        <MusaGhostCard />
      </MusaCol>
      <MusaCol md={6} lg={4} xl={4}>
        <MusaGhostCard />
      </MusaCol>
    </>
  )
}

export default MusaGhostCardList
