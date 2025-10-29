
import { Link } from "react-router-dom"
import Search from "../Search"
import "./style.scss"

type MenuItem = {
  title: string
  link: string
  active?: boolean
}

interface Props {
  title: string
  menu: MenuItem[]
}

function Header({ title, menu }: Props) {
  return <div className="header">
    <h1>{title}</h1>
    <div className="menu">
      {menu.map((item) => (
        <h3 key={item.link}>
          <Link to={item.link} className={item.active ? "menu-active" : ""}>{item.title}</Link>
        </h3>
      ))}
    </div>
    <Search />
  </div>
}

export default Header
