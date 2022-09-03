import React from "react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
      <button
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#Notification"
      >
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown"></li>
          </ul>

          <Link className="nav-link nav-icon" to="/" data-bs-toggle="dropdown">
            <i className="bi bi-bell theme-text-orange"></i>
            <span className="badge theme-bg-blue badge-number">4</span>
          </Link>
        </nav>
      </button>

      <div
        className="modal fade Dark"
        id="Notification"
        tabindex="-1"
        data-bs-backdrop="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header theme-bg-orange text-white">
              <h5 className="modal-title fw-bold">Notification</h5>
              <button
                type="button"
                className="btn bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg theme-text-blue"></i>
              </button>
            </div>
            <div className="modal-body">
              {/* <!-- Notification  --> */}
              <table className="width">
                <tr>
                  <td>AATHAV</td>
                  <td>
                    <button className="btn btn-warning">Details</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>DILSHAN</td>
                  <td>
                    <button className="btn btn-warning">Details</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>KAATHU</td>
                  <td>
                    <button className="btn btn-warning">Details</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>ABI</td>
                  <td>
                    <button className="btn btn-warning">Details</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </table>
              {/* <!-- End Notification  --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
