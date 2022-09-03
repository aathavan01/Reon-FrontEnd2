import React from "react";
import Login from "../Popups/Login";
import Signup from "../Popups/Signup";
import { Link } from "react-router-dom";
import Notification from "../Popups/Notification";
// import Mode from "../../mode";

const UserHeader = () => {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={require("../../assets/img/logo.png")} alt="logo" />
          <span className="d-none d-lg-block">
            RE<span>O</span>N{" "}
          </span>
        </Link>
      </div>
      {/* <!-- End Logo --> */}
      {/* <Mode/> */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <div className="pt-4">
            <Login /> <Signup /> <Notification />
          </div>

          <li className="nav-item dropdown pe-3">
            <Link
              className="nav-link nav-profile d-flex align-items-center pe-0"
              to="/"
              data-bs-toggle="dropdown"
            >
              <img
                src={require("../../assets/img/AATHAV.png")}
                alt="logo"
                className="rounded-circle"
              />
            </Link>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/OwnerPage"
                >
                  <i class="bi bi-person"></i>
                  <span> My Page</span>
                </Link>
              </li>
            </ul>
            {/* <!-- End Profile Dropdown Items --> */}
          </li>
          {/* <!-- End Profile Nav --> */}
        </ul>
      </nav>
      {/* <!-- End Icons Navigation --> */}
    </header>
  );
};

export default UserHeader;
