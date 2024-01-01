import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../../Theme/ThemeContext";
import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const token = localStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, [location]);

  const isAdminPanelRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    const handleNavbarClose = () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };

    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        // Check if the clicked link is not the "Our Services" dropdown
        const isOurServicesDropdown =
          link.classList.contains("dropdown-toggle");
        if (!isOurServicesDropdown) {
          handleNavbarClose();
        }
      });
    });

    return () => {
      // Cleanup: Remove event listeners when component unmounts
      navbarLinks.forEach((link) => {
        link.removeEventListener("click", handleNavbarClose);
      });
    };
  }, []);

  return (
    <>
      {!token && !isAdminPanelRoute ? (
        <>
          <nav
            className={"navbar navbar-expand-lg"}
            style={{
              backgroundColor: isDarkTheme ? "#242435" : "#fff",
              color: isDarkTheme ? "white" : "#252525",
            }}
          >
            <div className="container d-flex align-items-center">
              <NavLink className="navbar-brand" to="/">
                <img src="/images/ITEXPERTS_LOGO.png" className="logo" alt="" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  backgroundColor: isDarkTheme ? "#a5a5d8" : "#f8f8f8",
                  color: isDarkTheme ? "#fff" : "#000",
                }}
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse mb-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      exact
                      to="/"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      aria-current="pag e"
                      to="About"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={"nav-link dropdown-toggle"}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      Our Services
                    </a>

                    {/* ---------- DROPDOWN --------- */}
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                      style={{ backgroundColor: isDarkTheme ? "#000" : "#fff" }}
                    >
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2 "
                          activeClassName="active"
                          to="/Web"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          WebSite Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className=" nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/WebServices"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Landing Page Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/Ui"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          UI/UX Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/Graphic"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Graphic Designing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/GraphicService"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Graphic Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/Smm"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Social Media Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/Seo"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Search Engine Optimization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/Software"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          Software Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link dropdown-item py-2"
                          activeClassName="active"
                          to="/App"
                          style={{ color: isDarkTheme ? "white" : null }}
                        >
                          App Development
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                      to="/Contact"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                      to="/Portfolio"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                      to="/Blog"
                      style={{ color: isDarkTheme ? "white" : null }}
                    >
                      Blog
                    </NavLink>
                  </li>

                  <li className="nav-item" style={{ cursor: "pointer" }}>
                    <div className="nav-link">
                      {isDarkTheme ? (
                        <MdLightMode
                          className="fs-3"
                          onClick={toggleTheme}
                          color="#fff"
                        />
                      ) : (
                        <MdDarkMode
                          className="fs-3"
                          onClick={toggleTheme}
                          color="#000"
                        />
                      )}
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      style={{ color: "black" }}
                    >
                      <RiLoginCircleFill
                        className="fs-3"
                        color={isDarkTheme ? "white" : "#000"}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default Header;
