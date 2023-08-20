import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
    <div className="container-fluid nav_bg">
        <div className='row'>
            <div className='col-10 mx-auto'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink exact className="navbar-brand" to="/">
        <strong className="brand-name"> Aryan Chaudhary </strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/Cplus">
                Students 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/Data">
                Internships
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/Web">
                Thoughts
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
