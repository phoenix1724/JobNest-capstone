import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/images/header/Logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        {/* Logo and Links */}
        <div className="nav-left">
          <Link className="nav-logo">
            <div className="nav-logo-icon">
              <img src={navLogo} alt="Logo" />
            </div>
            <span className="nav-logo-text">JobNest</span>
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink to="/find-jobs" className="nav-link">
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/companies" className="nav-link">
                Browse Companies
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="primary-btn">Sign Up</button>
        </div>

        {/* Hamburger */}
        <button className="hamburger md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoClose size={20} className="icon" />
          ) : (
            <IoMenuSharp size={20} className="icon" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <ul>
            <li>
              <NavLink to="/find-jobs" className="nav-link" onClick={toggleMenu}>
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/companies" className="nav-link" onClick={toggleMenu}>
                Browse Companies
              </NavLink>
            </li>
            <li>
              <button className="login-btn">Login</button>
            </li>
            <li>
              <button className="primary-btn">Sign Up</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
