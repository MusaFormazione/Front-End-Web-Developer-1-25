import Header from "../components/Header"

interface Props {
    page: string,
    children?: React.ReactNode
}

function Template({ children, page }: Props) {
  const menu = [
    { title: "Home", link: "/", active: page === "home" },
    { title: "Recipe", link: "/recipe/1", active: page === "recipe" }
  ]
  return <>
    <Header title="Culinary" menu={menu}/>
    {children}
  </>
}

export default Template
