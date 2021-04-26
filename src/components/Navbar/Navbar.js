import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  // const handleClick =()=>setClick(!click)

  const handleClick = () => {
    setClick((prevstate) => !prevstate);
  };
  const closeMobileMenü = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenü}>
              <MdFingerprint className="navbar-icon" />
              Emre
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenü}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/sevices"
                  className="nav-links"
                  onClick={closeMobileMenü}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenü}
                >
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenü}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
