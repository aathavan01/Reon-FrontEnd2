import React from "react";
import Footer from "../components/Footer";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import VehicleAdd from "../Popups/VehicleAdd";
import JoinWithUs from "../Popups/JoinWithUs";

const Index = () => {
  return (
    <>
      <UserHeader />

      <div className="pt-5 overflow-auto px-5 homePad Dark">
        <div className="row">
          <div className="col-lg-5 px-4 text-center h-50 w-40">
            <div className="card bg-warning rounded-5">
              <h3>Description</h3>
            </div>
            <div className="px-3 border-top border border-primary  h5 rounded-5">
              <i class="bi bi-arrow-right"></i> Consumers can find and rent any
              type of vehicle at REON.<i class="bi bi-arrow-left"></i>
            </div>
            <br />
            <div className="px-3 border-top border border-primary  h5 rounded-5">
              <i class="bi bi-arrow-right"></i> REON connects users with nearby
              vehicle rental providers.<i class="bi bi-arrow-left"></i>
            </div>
            <br />
            <div className="px-3 border-top border border-primary  h5 rounded-5">
              <i class="bi bi-arrow-right"></i> Vehicle rental providers can
              grab opportunities through REON.<i class="bi bi-arrow-left"></i>
            </div>
            <div className="mt-4">
              <Link to="Vehicles" class="btn btn-outline-info" id="Hire">
                Hire Now<i class="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-7 card imgSize Dark">
            <img
              src={require("../../assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg")}
              alt="Vehicle image1"
            />
          </div>
        </div>

        <div className="px-5 pt-5 ">
          <div className="card mb-4 ">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={require("../../assets/img/banner-alliance_partner_640x500.jpg")}
                  className="img-fluid rounded-start"
                  alt="Vehicle page profile"
                />
              </div>
              <div className="col-md-8 Dark">
                <div className="card-body">
                  <div className="card bg-warning rounded-5 text-center">
                    <h3>Join with Us and Add your vehicles</h3>
                  </div>
                  <div className="px-3 border-top border border-primary  h5 rounded-5 text-center">
                    <i class="bi bi-arrow-right bg-"></i> First SignUp and LogIn
                    <i class="bi bi-arrow-left"></i>
                  </div>
                  <br />
                  <div className="px-3 border-top border border-primary  h5 rounded-5 text-center">
                    <i class="bi bi-arrow-right"></i> FillUp this Form to Create
                    Your Owner Page <i class="bi bi-arrow-right"></i>{" "}
                    <JoinWithUs />
                    <i class="bi bi-arrow-left"></i>
                  </div>
                  <br />
                  <div className="px-3 border-top border border-primary  h5 rounded-5 text-center">
                    <i class="bi bi-arrow-right"></i> FillUp this Form to Add
                    your Vehicles <i class="bi bi-arrow-right"></i>{" "}
                    <VehicleAdd /> <i class="bi bi-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
