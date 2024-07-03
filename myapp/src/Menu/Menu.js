import React, { useState } from "react";
import "../Menu/Menu.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Login } from "../Login/Login";

export const Menu = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="mains">
        <div className="nav">
          <div className="nav-left">
            <img
              src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              alt=""
            />
          </div>
          <div className="nav-center">
            <Link to="/" className="link">
              <h4
                onClick={() => handleLinkClick("home")}
                style={{ color: activeLink === "home" ? "red" : "black" }}
              >
                Home
              </h4>
            </Link>
            <Link to="/job" className="link">
              <h4
                onClick={() => handleLinkClick("home")}
                style={{ color: activeLink === "home" ? "red" : "black" }}
              >
                Find a Job
              </h4>
            </Link>

            <h4>Contact Us</h4>
          </div>
          <div className="nav-right">
            <button className="login">Login</button>
            <Link to="/register" className="btn btn-primary">
              <Button className="register">Register</Button>
            </Link>
            <i>
            <HiMenuAlt1 className="menu-icon" onClick={toggleMenu} />
            </i>
          </div>
        </div>
        {/* Responsive Menu */}
        {showMenu && (
        <div className="responsive-menu">
          <div className="menu-items">
            <Link to="/" className="link" onClick={() => setShowMenu(false)}>
              Home
            </Link>
            <Link
              to="/job"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Find a Job
            </Link>
            <Link
              to="/contact"
              className="link"
              onClick={() => setShowMenu(false)}
            >
              Contact Us
            </Link>
            <Button className="login" onClick={() => setShowMenu(false)}>
              Login
            </Button>
            <Link to="/register" onClick={() => setShowMenu(false)}>
              <Button className="register">Register</Button>
            </Link>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
