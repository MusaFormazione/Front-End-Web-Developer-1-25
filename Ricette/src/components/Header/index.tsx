
import Search from "../Search"
import "./style.scss"

interface Props {
  title: string
}

function Header({ title }: Props) {
  return <div className="header">
    <h1>{title}</h1>
    <Search />
  </div>
}

export default Header
