import { Link, useParams } from "react-router-dom";
import type { Product } from "../../domain/Product.type.ts";
import type { RootState } from "../../store/storeProducts.ts"
import { Row, Col, Card, Container, Pagination, Navbar } from "@musa/ds"

import "./style.scss"

import logo from "./../../assets/logo.png"
import { useEffect, useState } from "react";

const PAGINATION_ELEMENT = 6

interface LinkToPageProps {
  page: number
}
function LinkToPage({ page }: LinkToPageProps) {
  return <Link to={`/${page}`} style={{ textDecoration: "none", color: "#212529"}}>{page+1}</Link>
}

interface Props {
  state: RootState
}
function Home({state}: Props) {
  const { reducerProducts: reducer } = state
  const [navbarSelectedItem, setNavbarSelectedItem ] = useState<number>(3)
  const [filteredProduct, setFilteredProduct] = useState<Product[]>()
  const [totPages, setTotPages] = useState<number>(0)
  const [cart, setCart] = useState<string[]>([]) // lista id dei prodotti
  const params = useParams()
  const selected = parseInt(params.page || "0")


  useEffect(() => {
    const localCart = window.localStorage.getItem("cart")
    if(localCart?.length) setCart(localCart.split(','))
  }, [])

  useEffect(() => {
    setFilteredProduct(reducer.stateProducts.products)
  }, [reducer.stateProducts.products])

  useEffect(() => {
    const tot = (filteredProduct?.length || PAGINATION_ELEMENT) / PAGINATION_ELEMENT
    setTotPages( tot )
  }, [filteredProduct?.length])

  useEffect(() => {
      window.localStorage.setItem("cart", cart.join(","))
  }, [cart])

  useEffect(() => {
    if(!reducer.stateProducts.products) return
    if (navbarSelectedItem === 4) {
      setFilteredProduct(reducer.stateProducts.products)
    }
    setFilteredProduct(reducer.stateProducts.products.filter(p => filterProduct(p, navbarSelectedItem)))
  }, [navbarSelectedItem, reducer.stateProducts.products])

  const handlerSetNavbarItem = (s: number) => {
    setNavbarSelectedItem(s)
  }

  const handleAddToCart = (id: string) => {
    setCart( prev => [...prev, id] )
  }

  const createNavbarItems = (text:string, id: number) => ({
    text,
    onClick: () => handlerSetNavbarItem(id)
  })

  const categoriesItems = ["beauty", "furniture", "groceries", "all"]
    .map((items, idx) => createNavbarItems(items, idx))

  const navbarItems = [...categoriesItems, {link: "/cart", text: "carrello"}]


  return <Container>
    <Row>
      <Col cols={12}>
        <Navbar logo={logo} title="musa ecommerce"
          selected={navbarSelectedItem}
          items={navbarItems} />
      </Col>
    </Row>

    <Row>
      { reducer.done && filteredProduct?.length && <Products products={filteredProduct} addToCart={handleAddToCart}/> }
    </Row>
    <div className="mds-home-navigation">
      <Pagination selected={selected}
        links={Array.from({length: totPages}).map((_, idx) => <LinkToPage page={idx} />,) }
      />
    </div>

  </Container>
}

interface ProductsProps {
  products: Product[]
  addToCart: (id: string) => void
}
function Products({ products, addToCart }: ProductsProps) {
  const params = useParams()
  const page = parseInt(params.page || "0")
  const from = page * PAGINATION_ELEMENT
  const createAddToCartButton = (id: string) => ({
    label: "Aggiungi al carrello",
    onClick: () => addToCart(id)
  })

  const pslice = products.slice(from, from+PAGINATION_ELEMENT)

  return pslice.map( (p: Product) => <Col cols={4} key={p.id}>
    <Card
      title={p.title}
      description={`${String(p.price)} $`}
      image={p.thumbnail}
      button={createAddToCartButton(String(p.id))}
    />
  </Col>)
}


function filterProduct (p: Product, s: number) {
    switch (s) {
      case 0:
        return p.category === "beauty"
      case 1:
        return p.category === "furniture"
      case 2:
        return p.category === "groceries"
      default:
        return true
    }
  }
export default Home;
