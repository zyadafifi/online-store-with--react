import "./Navbar.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/#">
          ZYAD AFIFI
          </a>
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
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link to = "/log-in" className="nav-link">
                Contact Us
              </Link>
              </li>
              <Link to = "/sign-up">
              <button type="button" className="btn btn-outline-primary log_in">
                Sign Up
              </button>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
// made by ZYAD AHMED AFIFI
