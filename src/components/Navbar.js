// stylesheet
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

// Import Use Ref
import { useRef } from "react";

// Nav link
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  return (
    <div className="Navbar">
      <div className="container">
        <header>
          <NavLink to="/">
            <h1>Logo</h1>
          </NavLink>
          <nav ref={navRef}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <div className="reg-incase">
              <NavLink to="/contact"><button>Sign up</button></NavLink>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
