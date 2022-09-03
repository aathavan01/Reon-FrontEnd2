import React from 'react'

const JoinWithUs = () => {
  return (
    <>
  <button class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#addNewOwner"> <i class="bi bi-person-plus"></i> Join With Us</button>

    <div class="modal fade Dark" id="addNewOwner" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header theme-bg-orange text-white">
        <h5 class="modal-title fw-bold">Join With Us</h5>
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">
        {/* <!-- Join With Us Form --> */}
        <form class="row g-3 needs-validation" novalidate>

          <div class="col-md-6">
            <label for="add-user-firstName" class="form-label">Company Name</label>
            <input type="text" class="form-control" id="add-user-firstName" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Company Name.
            </div>
          </div>

          <div class="col-md-6">
            <label for="Phone" class="form-label">Phone</label>
            <input type="tel" class="form-control" id="Phone" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Phone Number.
            </div>
          </div>

          <div class="col-md-12">
          <label for="location" class="form-label">Vehicle Location<i class="bi-geo-alt-fill"></i></label>
          <select aria-label="Default select example" class="form-control" id="location" required>
            <option disabled selected value>Select your location</option>
            {/* <option disabled selected value>Select your location</option> */}
            <option value="Jaffna">Jaffna</option>
            <option value="Kopay">Kopay</option>
            <option value="Maanippai">Maanippai</option>
            <option value="Maathakal">Maathakal</option>
            <option value="Pointpedro">Pointpedro</option>
            <option value="Naloor">Naloor</option>
            <option value="Inuvil">Inuvil</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please select your pick-up location</div>
        </div>


          <div class="col-md-12">
            <label for="Address" class="form-label">Address</label>
            <textarea rows="2" class="form-control" id="Address" required></textarea>
            <div class="invalid-feedback">Address</div>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Last Name.
            </div>
          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button  type="submit" class="btn btn-warning theme-bg-orange theme-bg-blue">Create account</button>
          </div>

        </form>
        {/* <!-- End Join With Us Form --> */}
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default JoinWithUs