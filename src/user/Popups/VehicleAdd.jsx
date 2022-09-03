import React from 'react'

const VehicleAdd = () => {
  return (
   <>

    <button class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#VehicleAdd"><i class="bi bi-car-front-fill"></i> VehicleAdd</button>

   <div class="modal fade Dark" id="VehicleAdd" tabindex="-1" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"> 
      <div class="modal-header theme-bg-orange text-white">
        <h5 class="modal-title fw-bold">VehicleAdd</h5>
        <button type="button" class="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg theme-text-blue"></i></button>
      </div>
      <div class="modal-body">
        {/* <!-- Add Vehicle Form --> */}
        <form class="row g-3 needs-validation" novalidate>


        <div class="col-md-4">
          <label for="category" class="form-label">category<i class="bi bi-check2-circle"></i></label>
          <select aria-label="Default select example" class="form-control" id="category" required>
            <option disabled selected value>Category</option>
            <option disabled selected value>Category</option>
            <option value="farming">Farming</option>
            <option value="construction">Construction</option>
            <option value="tour">Tour</option>
            <option value="transportation">Transportation</option>
            <option value="school services">Pointpedro</option>
            <option value="events">Events</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please select your Category</div>
        </div>

        <div class="col-md-4">
          <label for="vehicle" class="form-label">Vehicle<i class="bi bi-car-front-fill"></i></label>
          <select aria-label="Default select example" class="form-control" id="vehicle" required>
            <option disabled selected value>Vehicle</option>
            <option disabled selected value>Vehicle</option>
            <option value="farming">tractors</option>
            <option value="construction">Compain or Harvester</option>
            <option value="tour">Seeders</option>
            <option value="transportation">Autonomous</option>
            <option value="school services">Deutz fahr</option>
            <option value="events">Events</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please select your Vehicle</div>
        </div>

        <div class="col-md-4">
          <label for="location" class="form-label">Vehicle Location<i class="bi-geo-alt-fill"></i></label>
          <select aria-label="Default select example" class="form-control" id="location" required>
            <option disabled selected value>Vehicle location</option>
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
          <div class="invalid-feedback">Please select your vehicle location</div>
        </div>
   
        <div class="col-md-12 my-4">
          <div class="form-check">
            <input class="form-check-input custom-color-input" type="radio" name="acType" id="acType1" value="option1"/>
            <label class="form-check-label" for="acType1">AC</label>
          </div>
          <div class="form-check">
            <input class="form-check-input custom-color-input" type="radio" name="acType" id="acType2" value="option2" checked/>
            <label class="form-check-label" for="acType2">Non AC</label>
          </div>
        </div>


          <div class="col-md-8">
            <label for="model" class="form-label">Model</label>
            <input type="text" class="form-control" id="model" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Model.
            </div>
          </div>
          <div class="col-md-4">
            <label for="yearOfManuffacture" class="form-label">Year Of Manufacture</label>
            <input type="month" class="form-control" id="yearOfManufacture" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide Last Name.
            </div>
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

          <div>Documentation</div>
          <div class="col-md-6">
            <label for="vehicleBook" class="form-label">Vehicle Book</label>
            <input type="file" class="form-control" id="vehicleBook"/>
          </div>

          <div class="col-md-6">
            <label for="numberPlate" class="form-label">Number Plate</label>
            <input type="file" class="form-control" id="numberPlate"/>
          </div>

          <div class="col-md-6">
            <label for="insurenceAndTax" class="form-label">Insurence and Tax</label>
            <input type="file" class="form-control" id="insurenceAndTax"/>
          </div>

          <div class="col-md-6">
            <label for="3rdPartyInsrence" class="form-label">3rd Party Insurence</label>
            <input type="file" class="form-control" id="3rdPartyInsrence"/>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button  type="submit" class="btn btn-warning theme-bg-orange theme-bg-blue">VehicleAdd</button>
          </div>

        </form>
        {/* <!-- End Add Vehicle Form --> */}
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default VehicleAdd