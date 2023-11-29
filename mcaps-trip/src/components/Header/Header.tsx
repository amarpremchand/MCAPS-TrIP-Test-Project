import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IHeaderProps from "../../interfaces/IHeaderProps";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import "./Header.css";

function Header({ title, setTitle, setPage, withSearchField }: IHeaderProps) {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const user = accounts[0] && accounts[0].username;

  return (
    <div className="topNavbar sticky-top" data-testid="movie-component">
      <div
        className="topNav d-flex align-items-center justify-content-between"
        data-testid="home-component"
      >
        {/* Left section */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="d-flex align-items-center"
          style={{ cursor: "pointer", flex: 1 }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 className="ms-5">Movie-flix</h1>
          </Link>
        </motion.div>

        {/* Center section */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ flex: 2 }}
        >
          {isAuthenticated && user ? (
            <div className="loggedInInfo">
              <span>Logged in as {user}</span>
            </div>
          ) : null}
        </div>
        {withSearchField ? (
          <div className="d-flex align-items-center" style={{ flex: 1 }}>
            <input
              id="title"
              value={title}
              type="text"
              className="me-2"
              placeholder="Search..."
              onChange={(ev) => {
                if (setTitle) {
                  setTitle(ev.target.value);
                }
                if (setPage) {
                  setPage(1);
                }
              }}
            />
            <i className="fas fa-search me-5"></i>
          </div>
        ) : (
          <div style={{ flex: 1 }}></div>
        )}
      </div>
    </div>
  );
}

export default Header;
