import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

import type { AppDispatch, RootState } from "./store/storeProducts"
import { fetchProducts } from "./store/sliceProducts"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

 return <Router>
    <Routes>
      <Route path="/" element={<Home state={{ products}}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
 </Router>
}

export default App
