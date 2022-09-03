import React from "react";
import Footer from "../components/Footer";
import UserMain from "../UserMain";

const Vehicles = () => {
  return (
    <>
      <UserMain />

      <main id="main" className="main Dark">
        <div className="pagetitle">
          <h1 className="theme-text2">Vehicles</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="bi bi-house-door"></i>
                </a>
              </li>
              <li className="breadcrumb-item active">Vehicle Page</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <div className=" manage-user overflow-auto"></div>
      </main>
      <Footer />
    </>
  );
};

export default Vehicles;
