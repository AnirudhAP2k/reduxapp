import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">My Bank</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
        <button className='btn btn-primary'>Balance 1000</button>
      </div>
    </div>
  </nav>
      
    </div>
  )
}

export default Navbar
