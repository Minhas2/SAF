import React, { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the required icons
import "./Header.css"; // Ensure to add styles for the custom hamburger

export default function Header() {
  // State to track the collapse status
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarCollapseRef = useRef(null);
  const location = useLocation();

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true); // Collapse the navbar when a link is clicked
    }
  };

  // Function to determine if any of the dropdown links is active
  const isDropdownActive = () => {
    return (
      location.pathname.includes("/services/s1") ||
      location.pathname.includes("/services/s2") ||
      location.pathname.includes("/services/s3")
    );
  };

  return (
    <>
      {/* top nav */}
      <div className="bg-topNav">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap">
            <div>
              <FontAwesomeIcon icon={faPhone} /> {/* Font Awesome phone icon */}
              <span className="">+1 234 567 890</span>
            </div>
            <div className="ps-4">
              <FontAwesomeIcon icon={faEnvelope} /> {/* Font Awesome email icon */}
              <span >contact@something.co.uk</span>
            </div>
          </div>
        </div>
      </div>

      {/* top nav end */}

      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 Rubik">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to="/">
              <img src="../assets/header.png" alt="Logo" height="30" />
            </NavLink>

            {/* Custom Hamburger Toggle */}
            <button
              className={`navbar-toggler custom-toggler ${isCollapsed ? "" : "open"}`}
              type="button"
              onClick={toggleNavbar}
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              {/* Custom hamburger icon (you can style this in CSS) */}
              <span className="custom-hamburger"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
              id="navbarNav"
              ref={navbarCollapseRef}
            >
              <ul className="navbar-nav ms-auto align-items-lg-center align-items-start">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      color: isActive ? "#F07A75" : "inherit", // Apply the color when active
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      color: isActive ? "#F07A75" : "inherit", // Apply the color when active
                    })}
                  >
                    About
                  </NavLink>
                </li>

                {/* Dropdown for Services */}
                {/* <li className={`nav-item dropdown ${isDropdownActive() ? "active" : ""}`}>
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      color: isDropdownActive() ? "#F07A75" : "inherit", 
                    }}
                  >
                    Services
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/services/web-development"
                        onClick={closeNavbar}
                        style={({ isActive }) => ({
                          color: isActive ? "#F07A75" : "inherit",
                        })}
                      >
                        Service 1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/services/seo"
                        onClick={closeNavbar}
                        style={({ isActive }) => ({
                          color: isActive ? "#F07A75" : "inherit",
                        })}
                      >
                        Service 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/services/design"
                        onClick={closeNavbar}
                        style={({ isActive }) => ({
                          color: isActive ? "#F07A75" : "inherit",
                        })}
                      >
                        Service 3
                      </NavLink>
                    </li>
       
                  </ul>
                </li> */}

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      color: isActive ? "#F07A75" : "inherit", // Apply the color when active
                    })}
                  >
                    Portfolio
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/cv"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      color: isActive ? "#F07A75" : "inherit", // Apply the color when active
                    })}
                  >
                    CV & Awards
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      color: isActive ? "#F07A75" : "inherit", // Apply the color when active
                    })}
                  >
                    Contact
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
