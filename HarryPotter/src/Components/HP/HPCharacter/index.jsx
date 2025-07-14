import { MusaCol } from '../../Musa/MusaLayout'
import MusaCard from '../../Musa/MusaCard'

function HPCharacter({ character }) {
  return <MusaCol key={character.index} md={6} lg={4} xl={4}>
    <MusaCard key={character.index}
      title={character.fullName}
      image={{ src: character.image, portrait: true }} >
      {character.description}
      <br />
      <strong>Casa:</strong> {character.hogwartsHouse} <br />
      <strong>Compleanno:</strong> {character.birthdate} <br />
    </MusaCard>
  </MusaCol>
}

export default HPCharacter
