import { Link, useParams } from "react-router-dom";
import type { Product } from "../../domain/Product.type.ts";
import type { RootState } from "../../store/storeProducts.ts"
import { Typography, Row, Col, Card, Container, Pagination } from "@musa/ds"

import "./style.scss"

const PAGINATION_ELEMENT = 6

interface Props {
  state: RootState
}

interface LinkToPageProps {
  page: number
}
function LinkToPage({ page }: LinkToPageProps) {
  return <Link to={`/${page}`} style={{ textDecoration: "none", color: "#212529"}}>{page+1}</Link>
}

function Home({state}: Props) {
  const { reducerProducts: reducer } = state
  const params = useParams()
  const selected = parseInt(params.page || "0")
  const totPage = reducer.stateProducts.products?.length / PAGINATION_ELEMENT
  console.log("selected", selected)
  return <Container>
    <Row>
      <Col cols={12}>
        <Typography type="heading" text="Musa Ecommerce" />
      </Col>
    </Row>

    <Row>
      { reducer.done && <Products products={reducer.stateProducts.products} /> }
    </Row>
    <div className="mds-home-navigation">
      <Pagination selected={selected}
        links={Array.from({length: totPage}).map((_, idx) => <LinkToPage page={idx} />,) }
      />
    </div>

  </Container>
}

interface ProductsProps {
  products: Product[]
}
function Products({ products }: ProductsProps) {
  const params = useParams()
  const page = parseInt(params.page || "0")
  const from = page * PAGINATION_ELEMENT
  console.log("from", from)
  console.log("page", page)
  const addToCartButton = {
    label: "Aggiungi al carrello",
    onClick: () => console.log("click su aggiugni")
  }

  console.log("prod", products)
  const pslice = products.slice(from, from+PAGINATION_ELEMENT)
  console.log("slice", pslice)
  return pslice.map( (p: Product) => <Col cols={4} key={p.id}>
    <Card
      title={p.title}
      description={`${String(p.price)} $`}
      image={p.thumbnail}
      button={addToCartButton}
    />
  </Col>)
}

export default Home;
