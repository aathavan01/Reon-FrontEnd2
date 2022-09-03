import React from "react";

const Booking = () => {
  return (
    <>
      <button
        class="mb-4 btn btn-primary shadow-sm text-white fw-bold theme-bg-blue"
        data-bs-toggle="modal"
        data-bs-target="#Booking"
      >
        Book
      </button>

      <div
        class="modal fade"
        id="Booking"
        tabindex="-1"
        data-bs-backdrop="false"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header theme-bg-orange text-white">
              <h5 class="modal-title fw-bold">Booking</h5>
              <button
                type="button"
                class="btn bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="bi bi-x-lg theme-text-blue"></i>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- Booking Form --> */}
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <label for="pickUpLocation" class="form-label">
                    PickUp Location<i class="bi-geo-alt-fill"></i>
                  </label>
                  <select
                    aria-label="Default select example"
                    class="form-control"
                    id="pickUpLocation"
                    required
                  >
                    <option disabled selected value>
                      Select your location
                    </option>
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
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please select your pick-up location
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="DropOffLocation" class="form-label">
                    Drop-off Location<i class="bi-geo-alt-fill"></i>
                  </label>
                  <select
                    aria-label="Default select example"
                    class="form-control"
                    id="DropOffLocation"
                    required
                  >
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
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please select Drop-off Location
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="PickupDate">
                    Pickup Date <i class="bi bi-calendar"></i>
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="PickupDate"
                    name="PickupDate"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="DropoffDate">
                    Dropoff Date <i class="bi bi-calendar"></i>
                  </label>
                  <br />
                  <input
                    type="datetime-local"
                    id="DropoffDate"
                    name="DropoffDate"
                    required
                  />
                </div>

                <div class="form-group">
                  <label id="number-label" for="number">
                    {" "}
                    Passengers Count
                  </label>
                  <input
                    type="number"
                    name="PassengersCount"
                    id="PassengersCount"
                    min="1"
                    max="99"
                    class="form-control"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="message" class="form-label">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    class="form-control"
                    id="message"
                    required
                  ></textarea>
                  <div class="invalid-feedback">message</div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-warning theme-bg-orange theme-bg-blue"
                  >
                    Request
                  </button>
                </div>
              </form>
              {/* <!-- End Booking Form --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
