import { Link, NavLink } from "react-router-dom";
import ImgLogo from "../assets/Group 2.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to={"/"}>
            <img src={ImgLogo} className="logo" />
          </Link>

          <button
            className="navbar-toggler border-white"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/ComingSoon">
                  Program
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/ComingSoon">
                  Galery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="ComingSoon">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Pendaftaran">
                  Daftar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
