// item = { label: string, action: function, active?: boolean }

function MusaNavbarItem({ item }) {
  return <li className="nav-item">
    <a className={`nav-link ${item?.active && 'active'}`}
      onClick={item.action}
      aria-current="page" href="#" >{item.label}</a>
  </li>
}

export default MusaNavbarItem
