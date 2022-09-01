import React from "react";
import VehicleAdd from "../Popups/VehicleAdd";
import UserMain from "../UserMain";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const OwnerPage = () => {
  return (
    <>
      <UserMain />
      <main id="main" className="main">
        <div class="pagetitle">
          <h1 class="theme-text2">My Page</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">
                  <i class="bi bi-house-door"></i>
                </Link>
              </li>
              <li class="breadcrumb-item active">MyPage</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <div class="card-body profile-card  d-flex flex-column align-items-center">
          <img
            src={require("../../assets/img/harvester.jpeg")}
            alt="Profile"
            className="w-50 h-25"
          />
        </div>

        <section class="section manage-users">
          <div class="row">
            <div class="card pt-3 manage-user overflow-auto">
              <div class="card-body scroll grey">
                <table class="table table-striped table-borderless datatable ">
                  <thead className="sticky">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Name</th>
                      <th scope="col">PickUp Date</th>
                      <th scope="col">DropOff Date</th>
                      <th scope="col">Pickup Location</th>
                      <th scope="col">DropOff Location</th>
                      <th scope="col">Passengers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>AATHAVAN</td>
                      <td>03 Sep 10.00</td>
                      <td>04 Sep 12.00</td>
                      <td>Jaffna</td>
                      <td>Kilinochchi</td>
                      <td>1 </td>

                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="user-details.html?uid=2434">
                          <button type="button" class="btn btn-success">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#maDeleteUser2434"
                        >
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ABINATHAP</td>
                      <td>04 Sep 10.00</td>
                      <td>05 Sep 12.00</td>
                      <td>Jaffna</td>
                      <td>Mullaitheevu</td>
                      <td>2</td>

                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="user-details.html?uid=2458">
                          <button type="button" class="btn btn-success">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-danger">
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Dilshan</td>
                      <td>05 Sep 10.00</td>
                      <td>06 Sep 12.00</td>
                      <td>Jaffna</td>
                      <td>Vavuniya</td>
                      <td>3</td>
                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/">
                          <button type="button" class="btn btn-success">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-danger">
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>KATHURSHAN</td>
                      <td>06 Sep 10.00</td>
                      <td>07 Sep 12.00</td>
                      <td>Jaffna</td>
                      <td>Mannar</td>
                      <td>4</td>
                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/">
                          <button type="button" class="btn btn-success">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-danger disabled">
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 eee scroll">
          <h3 className="text-center fw-bold">Your Vehicles</h3>
          <h3>
            Add more Vehicles For Increase Your Hiring <VehicleAdd />
          </h3>
          <div class="text-center container pb-5">
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="Vehicledetails" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    {/*  */}
                    <Link to="vehicledetails">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                      <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                        Edit
                      </button>{" "}
                      <button type="button" class="btn btn-danger">
                        Delete <i class="bi bi-trash"></i>
                      </button>
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-12 mb-1">
                <div class="card">
                  <div
                    class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={require("../../assets/img/harvester.jpeg")}
                      alt="vehicle"
                      class="w-100"
                    />
                    <Link to="#!">
                      {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div> */}
                      <div class="hover-overlay">
                        <div
                          class="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link to="//" class="text-reset">
                      <h5 class="card-title">Harvester</h5>
                    </Link>
                    <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-danger">
                      Delete <i class="bi bi-trash"></i>
                    </button>
                    <Link to="//">
                      <p className="mt-1">Kopay</p>
                    </Link>
                    {/* <h6 class="mb-3">$61.9</h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OwnerPage;
