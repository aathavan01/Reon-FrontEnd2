import React from "react";
import Footer from "../../../components/Footer";
import UserMain from "../../../UserMain";

const Tracktors = () => {
  return (
    <>
      <UserMain />

      <main id="main" className="main">
        <div class="pagetitle">
          <h1 class="theme-text2">Vehicles</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i class="bi bi-house-door"></i>
                </a>
              </li>
              <li class="breadcrumb-item active">
                <a href="Vehicles">Farming-Tracktors</a>{" "}
              </li>
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

export default Tracktors;
