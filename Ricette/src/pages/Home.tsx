import RecipeList from "../components/RecipeList"
import type { RootState } from "../store/storeRicette"
import Template from "./Template"

interface Props {
    state: RootState
}

function Home({ state }: Props) {
  const ricette = state.ricette
  return <Template page="home">
    { ricette.loading && <p>Loading...</p> }
    { ricette.error && <p>Error: {ricette.error}</p> }
    { ricette.done && <RecipeList recipes={ricette.recipe.recipes} /> }
  </Template>
}

export default Home
