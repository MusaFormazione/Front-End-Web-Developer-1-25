import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

import type { AppDispatch, RootState } from "./store/storeProducts"
import { fetchProducts } from "./store/sliceProducts"

import Home from "./pages/home"
import NotFound from "./pages/NotFound"

function App() {
  const reducerProducts = useSelector((state: RootState) => state.reducerProducts)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return <Router>
      <Routes>
        <Route path="/" element={<Home state={{ reducerProducts }}/>} />
        <Route path="/:page" element={<Home state={{ reducerProducts }}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
}

export default App
