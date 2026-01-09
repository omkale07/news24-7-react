import React from "react";
import "./Styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  const toggleDark = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand nav-logo" to="/">
            News <span>24/7</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({isActive})=> `${isActive?"active nav-link" : "nav-link"}`} to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/home">
                      Top Headlines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/buisness">
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/health">
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/sport">
                      Sports
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
            </form>

            <div className="form-check form-switch switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={toggleDark}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
