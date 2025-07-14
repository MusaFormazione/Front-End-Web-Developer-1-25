import HPCharacter from "../HPCharacter"

function HPCharacterList({ characters, error, loading }) {
  return <>
    {loading && <h2>Loading...</h2>}
    {error && <p className='alert alert-danger'>Error: {error}</p>}
    {characters && characters.map(character => <HPCharacter key={character.index} character={character} />)}
  </>
}

export default HPCharacterList
