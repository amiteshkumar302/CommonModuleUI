import React from "react";

export default function EditContactDetails() {
  return (
    <>
      <div
        className="modal fade"
        id="editcontactdetails"
        tabIndex={-1}
        aria-labelledby="editcontactdetailsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="editcontactdetailsLabel">
                Contact Details
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="px-3 bg-white elevation-5 p-4 pt-2">
                    <div className="row">
                      <div className="col-12">
                        <form className="row g-3 needs-validation" noValidate>
                          <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="validationCustomphone"
                                className="form-label"
                              >
                                Phone Number <sup>*</sup>
                              </label>
                              <div className="input-group has-validation">
                                {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                                <input
                                  type="text"
                                  className="form-control"
                                  id="validationCustomphone"
                                  defaultValue="mohit@gmail.com"
                                  aria-describedby
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please choose a username.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <label className="form-label">
                                Email <sup>*</sup>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={9999584627}
                                required
                              />
                              <div className="invalid-feedback">
                                Please provide a valid city.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 card mt-3">
                              <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                                  <h2 className="h6">Permanent Address</h2>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="col-md-12">
                                      <label className="form-label">
                                        Address Line
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="149B, Sector 12"
                                        required
                                        placeholder="149B, Sector 12"
                                      />
                                      <div className="valid-feedback">
                                        Looks good!
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div className="col-md-6">
                                        <label className="form-label">
                                          City
                                        </label>
                                        <div className="input-group has-validation">
                                          <select
                                            className="form-select"
                                            required
                                          >
                                            <option value>select</option>
                                            <option value="mumbai">
                                              Mumbai
                                            </option>
                                            <option value="delhi">Delhi</option>
                                            <option value="bangalore">
                                              Bangalore
                                            </option>
                                            <option value="hyderabad">
                                              Hyderabad
                                            </option>
                                          </select>
                                          <div className="invalid-feedback">
                                            Please provide a valid city.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label className="form-label">
                                          State
                                        </label>
                                        <select
                                          className="form-select"
                                          required
                                        >
                                          <option value>select</option>
                                          <option value="andhrapradesh">
                                            Andhra Pradesh
                                          </option>
                                          <option value="assam">Assam</option>
                                          <option value="bihar">Bihar</option>
                                          <option value="chhattisgarh">
                                            Chhattisgarh
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid state.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div className="col-md-9">
                                        <label className="form-label">
                                          Country
                                        </label>
                                        <select
                                          className="form-select"
                                          required
                                        >
                                          <option value>select</option>
                                          <option value="afghanistan">
                                            Afghanistan
                                          </option>
                                          <option value="albania">
                                            Albania
                                          </option>
                                          <option value="algeria">
                                            Algeria
                                          </option>
                                          <option value="andorra">
                                            Andorra
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid country.
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <label className="form-label">
                                          Zip
                                        </label>
                                        <div className="input-group has-validation">
                                          {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                                          <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby
                                            defaultValue={110046}
                                            required
                                          />
                                          <div className="invalid-feedback">
                                            Please provide a valid zip.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 card mt-3">
                              <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                                  <h2 className="h6">Current Address</h2>
                                  <div className="col-6">
                                    <div className="form-check float-right">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                      <label className="form-check-label">
                                        Same as Permanent address
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="col-md-12">
                                      <label className="form-label">
                                        Address Line
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="149B, Sector 12"
                                        required
                                        placeholder="149B, Sector 12"
                                      />
                                      <div className="valid-feedback">
                                        Looks good!
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div className="col-md-6">
                                        <label className="form-label">
                                          City
                                        </label>
                                        <div className="input-group has-validation">
                                          <select
                                            className="form-select"
                                            required
                                          >
                                            <option value>select</option>
                                            <option value="mumbai">
                                              Mumbai
                                            </option>
                                            <option value="delhi">Delhi</option>
                                            <option value="bangalore">
                                              Bangalore
                                            </option>
                                            <option value="hyderabad">
                                              Hyderabad
                                            </option>
                                          </select>
                                          <div className="invalid-feedback">
                                            Please provide a valid city.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label className="form-label">
                                          State
                                        </label>
                                        <select
                                          className="form-select"
                                          required
                                        >
                                          <option value>select</option>
                                          <option value="andhrapradesh">
                                            Andhra Pradesh
                                          </option>
                                          <option value="assam">Assam</option>
                                          <option value="bihar">Bihar</option>
                                          <option value="chhattisgarh">
                                            Chhattisgarh
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid state.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div className="col-md-9">
                                        <label className="form-label">
                                          Country
                                        </label>
                                        <select
                                          className="form-select"
                                          required
                                        >
                                          <option value>select</option>
                                          <option value="afghanistan">
                                            Afghanistan
                                          </option>
                                          <option value="albania">
                                            Albania
                                          </option>
                                          <option value="algeria">
                                            Algeria
                                          </option>
                                          <option value="andorra">
                                            Andorra
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid country.
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <label className="form-label">
                                          Zip
                                        </label>
                                        <div className="input-group has-validation">
                                          <span
                                            className="input-group-text"
                                            id="inputGroupPrepend"
                                          >
                                            @
                                          </span>
                                          <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby
                                            defaultValue={110046}
                                            required
                                          />
                                          <div className="invalid-feedback">
                                            Please provide a valid zip.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
