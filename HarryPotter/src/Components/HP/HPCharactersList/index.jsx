import HPCharacter from '../HPCharacter'
import MusaGhostCardList from '../../Musa/MusaGhostCardList'

function HPCharacterList ({ characters, error, loading }) {
  return (
    <>
      {loading && <MusaGhostCardList loading={loading} />}
      {error && <p className='alert alert-danger'>Error: {error}</p>}
      {characters && characters.map(character => <HPCharacter key={character.index} character={character} />)}
    </>
  )
}

export default HPCharacterList
