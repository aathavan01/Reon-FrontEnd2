import React from "react";

const Signup = () => {
  return (
    <>
      <button
        class="mb-4 btn btn-primary shadow-sm text-white fw-bold theme-bg-blue"
        data-bs-toggle="modal"
        data-bs-target="#Signup"
      >
        <i class="bi bi-person-plus"> </i>Signup
      </button>

      <div
        class="modal fade"
        id="Signup"
        tabindex="-1"
        data-bs-backdrop="false"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header theme-bg-orange text-white">
              <h5 class="modal-title fw-bold">Signup</h5>
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
              {/* <!-- Add New User Form --> */}
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <label for="add-user-firstName" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="add-user-firstName"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide First Name.</div>
                </div>
                <div class="col-md-6">
                  <label for="add-user-lastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="add-user-lastName"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide Last Name.</div>
                </div>
                <div class="col-md-12">
                  <label for="add-user-email" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="add-user-email"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please provide a Email (Gmail / Yahoomail).
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="add-user-pwd" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="add-user-pwd"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a password.</div>
                </div>
                <div class="col-md-6">
                  <label for="add-user-repwd" class="form-label">
                    Retype Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="add-user-repwd"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide a password.</div>
                </div>

                <div class="col-md-12">
                  <label for="Address" class="form-label">
                    Address
                  </label>
                  <textarea
                    rows="2"
                    class="form-control"
                    id="Address"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Address</div>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please provide Last Name.</div>
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
                    Signup
                  </button>
                </div>
              </form>
              {/* <!-- End Add New User Form --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
