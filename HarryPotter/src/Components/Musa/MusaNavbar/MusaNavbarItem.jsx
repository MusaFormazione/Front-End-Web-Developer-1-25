// item = { label: string, action: function, active?: boolean }

function MusaNavbarItem({ item }) {
  return <li className="nav-item">
    <a className={`nav-link ${item?.active && 'active'}`} aria-current="page" href="#" onClick={item.action}>{item.label}</a>
  </li>
}

export default MusaNavbarItem
