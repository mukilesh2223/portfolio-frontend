import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaFileAlt } from "react-icons/fa"; // add this




export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">

      <div className="nav-inner">

        {/* Left logo + text */}
        <div className="nav-left">
          <img src="/profile.png" alt="logo" className="profile-logo" />
          <h1 className="logo">MUGILESH</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
          <Link to="/resume" className="resume-link">
            <FaFileAlt className="nav-icon" />
            Resume
          </Link>

        </div>

        {/* Right side buttons */}
        <div className="nav-right">

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="toggle-btn"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Menu */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>

      </div>
    </nav>
  );
}
