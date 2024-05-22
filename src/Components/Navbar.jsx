import React, { useState, useEffect, useRef } from "react";
import { cart2 } from "../assets";
import "../Styles/Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu-items ${showMenu ? "show" : ""}`} ref={menuRef}>
        <li><a href="#FrontPage" onClick={() => setShowMenu(false)}>Home</a></li>
        <li><a href="#shop" onClick={() => setShowMenu(false)}>Shop</a></li>
        <li><a href="#feature" onClick={() => setShowMenu(false)}>Features</a></li>
        <li><a href="#" onClick={() => setShowMenu(false)}>Mega Group</a></li>
        <li><a href="#" onClick={() => setShowMenu(false)}>About</a></li>
        <li><a href="#Blog" onClick={() => setShowMenu(false)}>Blog</a></li>
        <li><a href="#Footer" onClick={() => setShowMenu(false)}>Contact</a></li>
        <li className="shopping" ><img src={cart2} alt="" />Shopping Cart (0)</li>
      </ul>
    </div>
  );
}

export default Navbar;
