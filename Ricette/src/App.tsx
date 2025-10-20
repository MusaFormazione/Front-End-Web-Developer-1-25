import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store/storeRicette"
import { useEffect } from "react"
import { fetchRecipe } from "./store/sliceRicette"
import RecipeList from "./components/RecipeList"

function App() {
  const ricette = useSelector((state: RootState) => state.ricette)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // Fetch recipes when the component mounts
    dispatch(fetchRecipe())
  }, [dispatch])

  return <>
    <h1>ricette</h1>
    { ricette.loading && <p>Loading...</p> }
    { ricette.error && <p>Error: {ricette.error}</p> }
    { ricette.done && <RecipeList recipes={ricette.recipe.recipes} /> }
  </>
}

export default App
