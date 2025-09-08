import { NavLink } from 'react-router'

// Componente NavBar con link di navigazione
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        CityExplorer
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
