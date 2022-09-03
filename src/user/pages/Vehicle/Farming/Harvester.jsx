import React from "react";
import Booking from "../../../Popups/Booking";
import UserMain from "../../../UserMain";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

const Harvester = () => {
  return (
    <>
      <UserMain />

      <main id="main" className="main">
        <div className=" manage-user overflow-auto">
          <div className="pagetitle">
            <h1 className="theme-text2">Harvester</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/Vehicles">
                    <i className="bi bi-house-door"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active">Farming-Harvester</li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}

          <div className="col-md-12">
            <label for="location" className="form-label">
              Vehicle Location<i className="bi-geo-alt-fill"></i>
            </label>
            <select
              aria-label="Default select example"
              className="form-control"
              id="location"
              required
            >
              {/* <option disabled selected value>Select your location</option> */}
              <option disabled selected value>
                Select your location
              </option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kopay">Kopay</option>
              <option value="Maanippai">Maanippai</option>
              <option value="Maathakal">Maathakal</option>
              <option value="Pointpedro">Pointpedro</option>
              <option value="Naloor">Naloor</option>
              <option value="Inuvil">Inuvil</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please select your pick-up location
            </div>
          </div>

          <div className="text-center container py-5">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link
                      to="/vehicles/harvester/id:details"
                      className="text-reset"
                    >
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    {/* <button className="mb-2 btn btn-primary shadow-sm text-white  theme-bg-blue" >Request</button>  */}
                    {/* <button className="mb-2 btn btn-primary shadow-sm text-white  theme-bg-blue">Details</button> */}
                    <Link to="vehicles/harvester/id:details">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="#!">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mb-1">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../../../assets/img/harvester.jpeg")}
                      alt="Havester"
                      className="w-100"
                    />
                    <Link to="vehicledetails">
                      {/* <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <Link to="//" className="text-reset">
                      <h5 className="card-title">Harvester</h5>
                    </Link>
                    <Booking />{" "}
                    <button className="mb-4 btn btn-primary shadow-sm text-white text-white fw-bold theme-bg-blue">
                      <Link to="/vehicles/harvester/id:details"> Details</Link>
                    </button>
                    <Link to="//">
                      <p>Inuvil</p>
                    </Link>
                    {/* <h6 className="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Harvester;
