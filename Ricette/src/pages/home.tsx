import Header from "../components/Header"
import RecipeList from "../components/RecipeList"
import type { RootState } from "../store/storeRicette"

interface Props {
    state: RootState
}

function Home({ state }: Props) {
  const ricette = state.ricette
  return <>
    <Header title="Ricettario" />
    { ricette.loading && <p>Loading...</p> }
    { ricette.error && <p>Error: {ricette.error}</p> }
    { ricette.done && <RecipeList recipes={ricette.recipe.recipes} /> }
  </>
}

export default Home
