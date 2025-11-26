
import { Container, Row, Col, Navbar, Typography} from "@musa/ds"
import type { RootState } from "../../store/storeProducts.ts"
import { useEffect, useState } from "react";

import type { Product } from "../../domain/Product.type.ts";

import logo from "./../../assets/logo.png"
import "./style.css"

interface Props {
  state: RootState
}
function Cart({state}: Props) {
  const { reducerProducts: reducer } = state
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<string[]>([])

  useEffect(() => {
    const localCart = window.localStorage.getItem("cart")
    if(localCart?.length) setCart(localCart.split(','))
    setProducts(reducer.stateProducts.products)
  }, [reducer.stateProducts.products])

  const navbarItems = [{link: "/", text: "products"}, {link: "/cart", text: "carrello"}]

  return <Container>
    <Row>
      <Col cols={12}>
        <Navbar logo={logo} title="musa ecommerce"
          selected={1}
          items={navbarItems} />
      </Col>
    </Row>

    <Row>
    {
      cart.map( (id, idx) => <div className="mds-cart-item" key={idx}><Typography type="heading" level={3}
        text={products?.find( p=> p.id === parseInt(id))?.title || ''}
      />
      </div>)
    }
    </Row>

  </Container>
}

export default Cart
