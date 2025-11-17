import type { Product } from "../domain/Product.type.ts";
import type { RootState } from "../store/storeProducts.ts"
import { Typography, Row, Col, Card, Container } from "@musa/ds"

interface Props {
  state: RootState
}

function Home({state}: Props) {
  const { reducerProducts: reducer } = state
  return <Container>
    <Row>
      <Col cols={12}>
        <Typography type="heading" text="Musa Ecommerce" />
      </Col>
    </Row>

    <Row>
      { reducer.done && <Products products={reducer.stateProducts.products} /> }
    </Row>
  </Container>
}

interface ProductsProps {
  products: Product[]
}
function Products({ products }: ProductsProps) {
  const addToCartButton = {
    label: "Aggiungi al carrello",
    onClick: () => console.log("click su aggiugni")
  }
  return products.map( (p: Product) => <Col cols={4} key={p.id}>
    <Card
      title={p.title}
      description={`${String(p.price)} $`}
      image={p.thumbnail}
      button={addToCartButton}
    />
  </Col>)
}

export default Home;
