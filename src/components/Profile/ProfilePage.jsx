import React, { useState } from "react";
import { useEffect } from "react";
import APIConstants from "../../constants/APIConstants";
import UserDetailImage from "../../img/user-detail-image.jpg";
import GetUserDetailsApiCall from "../../services/ProfileService";
import EditContactDetails from "./EditContactDetails";
import EditPersonalDetails from "./EditPersonalDetails";
import jwtDecode from "jwt-decode";

function ProfilePage(props) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  //Decrypting token to generate user id
  const token =  localStorage.token;
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;
  console.log(id);
  function GetUserDetails() {
    //This method calls api and returns the response
    //   id,
    //   (body) => {
    //     console.log(body);
    //   },
    //   (error) => {
    //     alert(error);
    //   }
    // );
    fetch(APIConstants.BASE_URL + APIConstants.GET_USER_BY_ID + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setItems(result);
          console.log(items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      );
  }
  // This is used to handle the response by Api
  // .then((response) => {
  //       return new Promise((resolve) =>
  //         response.json().then((json) =>
  //           resolve({
  //             status: response.status,
  //             body: json,
  //           })
  //         )
  //       );
  //     });
  // }

  return (
    <>
      <div className="container-fluid" onLoad={() => GetUserDetails()} >
        <div className="page-body-wrapper">
          <div className="row">
            <main className=" ms-sm-auto px-md-4">
              <div className="col-md-12">
                <nav aria-label="breadcrumb" className="pt-4">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      User Details{" "}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="px-3 bg-white elevation-5 p-4 pt-2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                      <h2 className="h6">Personal Details</h2>
                      <a
                        href="#"
                        className="btn btn-sm text-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editpersnaldetails"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil-square-o" />{" "}
                      </a>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-md-3">
                            <label className="form-label">
                              <strong>First Name</strong>
                            </label>
                            <p>{items.firstName}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">
                              <strong>Last Name</strong>
                            </label>
                            <p>{items.lastName}</p>
                          </div>
                          <div className="col-md-3">
                            <label
                              htmlFor="validationCustom03"
                              className="form-label"
                            >
                              <strong>DOB</strong>
                            </label>
                            <p>02/09/1992</p>
                          </div>
                          <div className="col-md-3">
                            <label
                              htmlFor="validationCustom03"
                              className="form-label"
                            >
                              <strong>Gender</strong>
                            </label>
                            <p>Male</p>
                          </div>
                          <div className="col-md-3">
                            <label
                              htmlFor="validationCustom03"
                              className="form-label"
                            >
                              <strong>Category</strong>
                            </label>
                            <p>General</p>
                          </div>
                          <div className="col-md-3">
                            <label
                              htmlFor="validationCustom03"
                              className="form-label"
                            >
                              <strong>Role</strong>
                            </label>
                            <p>HR</p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-2">
                        <div className="user-detail-image">
                          <img
                            src={UserDetailImage}
                            alt=""
                            className="img-responsive"
                            width="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button type="button" onClick={() => GetUserDetails()}>
                  GetUser
                </button> */}
                <div className="col-md-4">
                  <div className="px-3 bg-white elevation-5 p-4 pt-2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                      <h2 className="h6">Contact Details</h2>
                      <a
                        href="#"
                        className="btn btn-sm text-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editcontactdetails"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <i className="fa fa-pencil-square-o" />{" "}
                      </a>
                    </div>
                    <div className="row">
                      <section className="timeline_area section_padding_130">
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              {/* Timeline Area*/}
                              <div className="apland-timeline-area">
                                {/* Single Timeline Content*/}
                                <div className="single-timeline-area">
                                  <div
                                    className="timeline-date wow fadeInLeft"
                                    data-wow-delay="0.1s"
                                    style={{
                                      visibility: "visible",
                                      animationDelay: "0.1s",
                                      animationName: "fadeInLeft",
                                    }}
                                  ></div>
                                  <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                      <div
                                        className="single-timeline-content d-flex wow fadeInLeft"
                                        data-wow-delay="0.3s"
                                        style={{
                                          visibility: "visible",
                                          animationDelay: "0.3s",
                                          animationName: "fadeInLeft",
                                        }}
                                      >
                                        <div className="timeline-text">
                                          <label
                                            htmlFor="validationCustom03"
                                            className="form-label"
                                          >
                                            <strong>Email</strong>
                                          </label>
                                          <p>{items.email}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Timeline Content*/}
                                <div className="single-timeline-area">
                                  <div
                                    className="timeline-date wow fadeInLeft"
                                    data-wow-delay="0.1s"
                                    style={{
                                      visibility: "visible",
                                      animationDelay: "0.1s",
                                      animationName: "fadeInLeft",
                                    }}
                                  ></div>
                                  <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                      <div
                                        className="single-timeline-content d-flex wow fadeInLeft"
                                        data-wow-delay="0.3s"
                                        style={{
                                          visibility: "visible",
                                          animationDelay: "0.3s",
                                          animationName: "fadeInLeft",
                                        }}
                                      >
                                        <div className="timeline-text">
                                          <label
                                            htmlFor="validationCustom03"
                                            className="form-label"
                                          >
                                            <strong>Phone Number</strong>
                                          </label>
                                          <p>{items.mobileNumber}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Single Timeline Content*/}
                                <div className="single-timeline-area">
                                  <div
                                    className="timeline-date wow fadeInLeft"
                                    data-wow-delay="0.1s"
                                    style={{
                                      visibility: "visible",
                                      animationDelay: "0.1s",
                                      animationName: "fadeInLeft",
                                    }}
                                  ></div>
                                  <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                      <div
                                        className="single-timeline-content d-flex wow fadeInLeft"
                                        data-wow-delay="0.3s"
                                        style={{
                                          visibility: "visible",
                                          animationDelay: "0.3s",
                                          animationName: "fadeInLeft",
                                        }}
                                      >
                                        <div className="timeline-text">
                                          <label
                                            htmlFor="validationCustom03"
                                            className="form-label"
                                          >
                                            <strong>Permanent address</strong>
                                          </label>
                                          <p>
                                            149B, Sector 12, Dwarka, New
                                            Delhi-110046
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-timeline-area">
                                  <div
                                    className="timeline-date wow fadeInLeft"
                                    data-wow-delay="0.1s"
                                    style={{
                                      visibility: "visible",
                                      animationDelay: "0.1s",
                                      animationName: "fadeInLeft",
                                    }}
                                  ></div>
                                  <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                      <div
                                        className="single-timeline-content d-flex wow fadeInLeft"
                                        data-wow-delay="0.3s"
                                        style={{
                                          visibility: "visible",
                                          animationDelay: "0.3s",
                                          animationName: "fadeInLeft",
                                        }}
                                      >
                                        <div className="timeline-text">
                                          <label
                                            htmlFor="validationCustom03"
                                            className="form-label"
                                          >
                                            <strong>Current address</strong>
                                          </label>
                                          <p>
                                            149B, Sector 12, Dwarka, New
                                            Delhi-110046
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* Optional JavaScript; choose one of the two! */}
      {/* Option 1: Bootstrap Bundle with Popper */}
      {/* Modal */}
      <EditPersonalDetails />
      <EditContactDetails />
    </>
  );
}

export default ProfilePage;
