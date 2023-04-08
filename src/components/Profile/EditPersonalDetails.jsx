import React from "react";

export default function EditPersonalDetails() {
  return (
    <>
      <div
        className="modal fade"
        id="editpersnaldetails"
        tabIndex={-1}
        aria-labelledby="editpersnaldetailsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="editpersnaldetailsLabel">
                personal Details
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
                        <div className="row">
                          <div className="small-12 medium-2 large-2 columns">
                            <div className="circle">
                              <img
                                className="profile-pic"
                                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                              />
                            </div>
                            <div className="p-image">
                              <i className="fa fa-camera upload-button" />
                              <input
                                className="file-upload"
                                type="file"
                                accept="image/*"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <label className="form-label">
                              First <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              defaultValue="Mohit"
                              required
                              placeholder="Mohit"
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <label
                              htmlFor="validationCustom02"
                              className="form-label"
                            >
                              Last
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom02"
                              defaultValue="Sharma"
                              required
                              placeholder="Sharma"
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <label className="form-label">DOB</label>
                            <input
                              type="date"
                              className="form-control"
                              defaultValue="02/09/1992"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid date of birth.
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <label className="form-label">Gender </label>
                            <select className="form-select" required>
                              <option value="male">Male</option>
                              <option value="male">Female</option>
                              <option value="male">Others</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a gender.
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <label className="form-label">Category </label>
                            <select className="form-select" required>
                              <option value="general">General</option>
                              <option value="sc">SC</option>
                              <option value="st">ST</option>
                              <option value="obc">OBC</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a category.
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="form-group multiple-dropdown">
                              <label className="form-label">Role</label>
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                              <select
                                className="select2bs4 form-select"
                                multiple="multiple"
                                data-placeholder="Select a Role"
                                style={{ width: "100%" }}
                              >
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="hr">HR</option>
                                <option value="user">User</option>
                              </select>
                              <div className="invalid-feedback">
                                Please select a role.
                              </div>
                            </div>
                          </div>
                        </div>
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
    </>
  );
}
