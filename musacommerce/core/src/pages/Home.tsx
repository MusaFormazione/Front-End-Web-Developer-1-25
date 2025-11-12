import type { RootState } from "../store/storeProducts.ts"

interface Props {
  state: RootState
}

function Home({state}: Props) {
  return <>
    <h1>Musa Ecommerce</h1>
    <div>
    </div>
  </>
}

export default Home;
