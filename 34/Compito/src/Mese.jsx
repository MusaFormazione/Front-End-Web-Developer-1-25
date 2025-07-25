import { MusaCol } from './Components/MusaLayout'

function Mese ({ colore, children }) {
  return (
    <MusaCol sm={12} lg={4} xl={4}>
      <p className='shadow p-3 m-4 text-center'>
        <hr style={{ borderColor: colore, borderWidth: '8px' }} />
        {children}
        <pre>
          {colore}
        </pre>
      </p>
    </MusaCol>
  )
}

export default Mese
