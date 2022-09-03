import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import UserMain from "../UserMain";

function UserProfile() {
  return (
    <>
      <UserMain />
      <main id="main" className="main">
        <div class="pagetitle">
          <h1 class="theme-text2">MY Page</h1>
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
          <img src="assets/img/weddingjpg" alt="Profile" />
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
                      <th scope="col">Details</th>
                      <th scope="col">Responce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>AATHAVAN</td>

                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/vehicles/harvester/id:details">
                          <button type="button" class="btn theme-bg-blue">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-success">
                          Accept <i class="bi bi-check2-all"></i>
                        </button>
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

                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/vehicles/harvester/id:details">
                          <button type="button" class="btn theme-bg-blue">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-success">
                          Accept <i class="bi bi-check2-all"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Dilshan</td>
                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/vehicles/harvester/id:details">
                          <button type="button" class="btn theme-bg-blue">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-success">
                          Accept <i class="bi bi-check2-all"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
                          Delete <i class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>KATHURSHAN</td>
                      <td class="d-flex align-items-center justify-content-between">
                        <Link to="/vehicles/harvester/id:details">
                          <button type="button" class="btn theme-bg-blue">
                            Details <i class="bi bi-file-person"></i>
                          </button>
                        </Link>
                        <button type="button" class="btn btn-success">
                          Accept <i class="bi bi-check2-all"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
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

        <section className="eee scroll">
          <div class="row">
            <div class="col-lg-3 col-md-12 mb-1">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </Link>
                </div>
                <div class="card-body">
                  <Link to="/vehicles/harvester/id:details" class="text-reset">
                    <h5 class="card-title">Harvester</h5>
                  </Link>
                  <button class=" btn btn-primary shadow-sm text-white  theme-bg-blue">
                    Edit
                  </button>{" "}
                  <button type="button" class="btn btn-danger">
                    Delete <i class="bi bi-trash"></i>
                  </button>
                  {/*  */}
                  <Link to="/vehicles/harvester/id:details">
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
                    src="assets/img/harvester.jpeg"
                    alt="img"
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
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UserProfile;
