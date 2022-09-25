import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <nav>
      <nav className="nav-bar">
        <label
          className="menu-bar"
          onClick={handleOpen}
        >
          <FaBars />
        </label>
        <label className="logo">
          {' '}
          <span style={{ color: 'rgb(249,157,28)' }}>Ethio</span> It Solution
        </label>
        <ul className={`${open ? 'links show' : 'links'}`}>
          <li>
            <a>
              <Link to="./">Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="./Services">Services</Link>
            </a>
          </li>

          <li>
            <a>
              <Link to="./info">Info</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="./contact">Contact</Link>
            </a>
          </li>

          {/* <li><a href="#home">home</a></li>
                    <li><a href="#about us">about us</a></li>
                    <li><a href="#services">Services</a></li>                  
                    <li><a href="#contact">contact</a></li>  */}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
