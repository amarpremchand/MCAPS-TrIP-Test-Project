import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MovieHeader() {
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
        </div>
      </div>
    </>
  );
}

export default MovieHeader;
