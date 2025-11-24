import "./style.scss"

type NavbarItem = {
  link?: string,
  text: string,
  onClick?: () => void
}

interface Props {
  logo?: string,
  title: string,
  items?: NavbarItem[],
  selected?: number
}

function Navbar({ logo, title, items, selected }:Props ) {
  return <div className="mds-navbar-container">
    <h2 className="mds-navbar-title">
      {logo && <img src={logo} alt={`${title}-logo`} className="mds-navbar-logo"/>}
      {title}
    </h2>
    <div className="mds-navbar-items">
      {
        items && items.map((i,idx) => {
          const selectedClass = selected && idx === selected ?' mds-navbar-item-selected':''
          if (i.link) {
            return <a href={i.link}
              className={`mds-navbar-item${selectedClass}`}>
              {i.text}
            </a>
          }

          return <span className="mds-navbar-item">{i.text}</span>
        })
      }
    </div>
  </div>
}

export {Navbar}
