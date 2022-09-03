import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "../components/Footer";
import Booking from "../Popups/Booking";
import UserMain from "../UserMain";

const VehicleDetails = () => {
  return (
    <>
      <UserMain />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1 className="theme-text2">Page Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="bi bi-house-door"></i>
                </a>
              </li>
              <li className="breadcrumb-item active">Page Details</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <div className=" manage-user overflow-auto">
          <div className="row">
            <div className="col-lg-5 px-4 text-center w-35 h-50">
              <div className="card px-3 grey">
                <h4>Description</h4>
                <div className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt, minima in architecto, placeat iste cum reprehenderit
                  esse facilis commodi iure quibusdam obcaecati voluptatum nobis
                  totam nisi impedit. Tempore, architecto est. Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. hello everyone.
                  <br />
                  <div className="my-1">
                    <Booking />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 card img-fluid img-thumbnail w-65 h-50">
              <img
                src={require("../../assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg")}
                alt="OwnerProfile"
                className="h-75 img-thumbnail"
              />
              <Dropdown className=" text-center">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Prices
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/">Kopay-Jaffna=1000</Dropdown.Item>
                  <Dropdown.Item href="/">Inuvil-Jaffna=1000</Dropdown.Item>
                  <Dropdown.Item href="/">Mathakal-Jaffna=2000</Dropdown.Item>
                  <Dropdown.Item href="/">pointpedro-jaffna=5000</Dropdown.Item>
                  <Dropdown.Item href="/">Kodikaamam-Jaffna=1200</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="px-xl-5">
            <div className="card mb-4 ">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={require("../../assets/img/weddingjpg")}
                    alt="Vehicle page profile"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Company/Owner Details</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor placeat, reprehenderit, aut dolorum cupiditate
                      accusantium ut minima quasi laborum distinctio
                      praesentium. Adipisci, ullam ipsum minima obcaecati
                      voluptates quas! Eius, qui!
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
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

export default VehicleDetails;
