import React from "react";
import { Link } from "react-router-dom";

const UserAside = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/vehicles">
            <i className="bi bi-grid"></i>
            Categories
          </Link>
        </li>
        {/* <!-- End Dashboard Nav --> */}

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Farming-nav"
            to="/"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-car-front"></i>
            <span className=" category">Farming</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Farming-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/vehicles/tractors">
                <i className="bi bi-circle"></i>
                <span>Tractors</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/harvester">
                <i className="bi bi-circle"></i>
                <span>Combine or Harvester</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/seeders">
                <i className="bi bi-circle"></i>
                <span>Seeders</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/autonomous">
                <i className="bi bi-circle"></i>
                <span> Autonomous</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/deutzFahr">
                <i className="bi bi-circle"></i>
                <span>deutz fahr </span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <!-- End Farming Nav --> */}

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Construction-nav"
            to="/"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-car-front"></i>
            <span>Construction</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Construction-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/vehicles/tractors">
                <i className="bi bi-circle"></i>
                <span>Tractors</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/bulldozers">
                <i className="bi bi-circle"></i>
                <span>Bulldozers</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/frontLoaders">
                <i className="bi bi-circle"></i>
                <span>Front Loaders</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/dumpTrucks">
                <i className="bi bi-circle"></i>
                <span>Dump Trucks</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/backhoes">
                <i className="bi bi-circle"></i>
                <span>Backhoes</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <!-- End Construction Nav --> */}

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Tour-nav"
            to="/"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-car-front"></i>
            <span>Tour</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Tour-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/vehicles/van">
                <i className="bi bi-circle"></i>
                <span>Van</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/bus">
                <i className="bi bi-circle"></i>
                <span>Bus</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/miniBus">
                <i className="bi bi-circle"></i>
                <span>Mini bus</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/balloonBus">
                <i className="bi bi-circle"></i>
                <span> Balloon bus</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/taxi">
                <i className="bi bi-circle"></i>
                <span>Taxi </span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/car">
                <i className="bi bi-circle"></i>
                <span>Car </span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <!-- End Tour Nav --> */}

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#Transportation-nav"
            to="/"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-car-front"></i>
            <span>Transportation</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="Transportation-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/vehicles/container">
                <i className="bi bi-circle"></i>
                <span>Container transport</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/tripper">
                <i className="bi bi-circle"></i>
                <span>Tripper truck</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/canter">
                <i className="bi bi-circle"></i>
                <span>Canter</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/superGreat">
                <i className="bi bi-circle"></i>
                <span>Super great</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <!-- End Transportation Nav --> */}

        <Link
          className="nav-link collapsed"
          data-bs-target="#schoolServices-nav"
          to="/schoolServices"
          data-bs-toggle="collapse"
        >
          <i className="bi bi-car-front"></i>
          <span>School services</span>
        </Link>

        <li className="nav-item mt-2">
          <Link
            className="nav-link collapsed"
            data-bs-target="#WeddingAndEvents-nav"
            to="/"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-car-front"></i>
            <span>Events</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="WeddingAndEvents-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/vehicles/wedding">
                <i className="bi bi-circle"></i>
                <span>Wedding</span>
              </Link>
            </li>
            <li>
              <Link to="/vehicles/funeral">
                <i className="bi bi-circle"></i>
                <span>Funeral</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <!-- End Wedding and events Nav --> */}
      </ul>
    </aside>
    // <!-- End Sidebar-->
  );
};

export default UserAside;
