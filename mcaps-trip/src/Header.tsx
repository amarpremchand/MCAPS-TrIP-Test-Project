import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IHeaderProps from "./interfaces/IHeaderProps";
import "./Header.css";



function Header({ title, setTitle, setPage, withSearchField }: IHeaderProps) {
  return (
    <>
      <div className="topNavbar sticky-top">
        <div className="topNav d-flex align-items-center justify-content-between ">
          <div className="d-flex align-items-end">
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h1 className="ms-5">Movie-flix</h1>
              </Link>
            </motion.div>
          </div>
          {withSearchField ? (
          <div className="d-flex align-items-center">
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
          </div>): null}
        </div>
      </div>
    </>
  );
}

export default Header;
