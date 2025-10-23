import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import type { AppDispatch, RootState } from "./store/storeRicette"

import { fetchRecipe } from "./store/sliceRicette"

import Home from "./pages/home"

import "./App.scss"

function App() {
  const ricette = useSelector((state: RootState) => state.ricette)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // Fetch recipes when the component mounts
    dispatch(fetchRecipe())
  }, [dispatch])

  return <Router>
    <Routes>
      <Route path="/" element={<Home state={{ ricette }} />} />
    </Routes>
  </Router>
}

export default App
