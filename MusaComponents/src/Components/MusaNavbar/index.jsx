import MusaNavbarItem from './MusaNavbarItem'

function MusaNavbar ({ title, items }) {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>{title}</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {items.map((item, index) => (
              <MusaNavbarItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MusaNavbar
