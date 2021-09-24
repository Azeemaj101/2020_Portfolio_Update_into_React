import React from 'react'
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from './images/2_1.jpeg'

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
  <NavLink exact className="navbar-brand" to="/"><img className="top_img" src={logo} alt="..." /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="text-light" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="text-light" to="/certificate">Certificate</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink exact className="nav-link dropdown-toggle" activeClassName="text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/d">
            Projects
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
          <NavLink exact className="dropdown-item dropdown_css" to="/web">Web Projects</NavLink>
           </li>
            <li>
          <NavLink exact className="dropdown-item dropdown_css" to="/programming">Programming Projects</NavLink>
           </li>
            <li>
          <a className="dropdown-item dropdown_css" target="_blank" rel="noreferrer" href="https://azeemaj101.github.io/Calculator_Web_Application/">Calculator</a>
           </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="text-light" to="/contactus">Contact Us</NavLink>
        </li>
    </ul>
    <a href="http://azeemaj101.herokuapp.com/" className="me-2 mb-1" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer">
    <Button variant="contained" color="error">New Portfolio</Button>
    </a>
    <a href="http://aj-gym.rf.gd/CRUD/index.php" className="mb-1" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer">
    <Button variant="contained" color="success">ADMIN</Button>
    </a>
    </div>
  </div>
</nav>
    )
}

export default NavBar
