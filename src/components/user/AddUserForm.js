//import '../../App.css';
import "./user.js";
import React, { useEffect, useState } from "react";
import { getRoles } from "../../apiUtils/utils";
import {
  GetRolesListService,
  AddUserService,
} from "../../services/userService";
import Select from "react-select";
import TopMenu from "../TopMenuBar/TopMenu";
import LeftMenu1 from "../LeftMenuBar/LeftMenu1";
import "../../css/bootstrap.min.css";
import "../../css/left-menu.css";
import "../../css/custom.css";
import "../../css/tempusdominus-bootstrap-4.min.css";
import "../../css/select2.min.css";
import "../../css/select2-bootstrap4.min.css";
import "../../css/mobile.css";
import "../../css/jquerysteps.min.css";
import SideBar from "../Profile/SideBar.jsx";
import {
  validName,
  validEmail,
  validTelephone,
  validUserName,
} from "../Validation/AddUserFieldsValidation";

export default function AddUserForm() {
  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobile] = useState("");
  const [UserName, setUserName] = useState("");
  const [selected, setSelected] = useState([]);
  const [options, setOption] = useState([]);
  const [agree, setAgree] = useState(false);
  const [firstName, setFirstNameErr] = useState(false);
  const [lastName, setLastNameErr] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [telePhoneErr, setTelePhoneErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [validated, setValidate] = useState();
  const [permanentAddressLine, setPermanentAddressLine] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const [permanentState, setPermanentState] = useState("");
  const [permanentCountry, setPermanentCountry] = useState("");
  const [permanentZip, setPermanentZip] = useState("");
  const [currentAddressLine, setCurrentAddressLine] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentZip, setCurrentZip] = useState("");

  let FormData = {
    FirstName,
    LastName,
    Email,
    MobileNumber,
    UserName,
    selected,
  };

  function CheckboxHandler(e) {
    if(e.target.checked){
    setCurrentAddressLine(permanentAddressLine);
    setCurrentCity(permanentCity);
    setCurrentState(permanentState);
    setCurrentCountry(permanentCountry);
    setCurrentZip(permanentZip);
    }
  }

  var tempArray = [];
  useEffect(() => {
    GetRolesListService(
      (body) => {
        console.log(body);
        if (body !== undefined && body !== null) {
          body.map((val) =>
            tempArray.push({ label: val.roleType, value: val.roleID })
          );
          setOption(tempArray);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }, []);
  let flag;
  const Validate = () => {
    let flagFirstName, flagLastName, flagEmail, flagTel, flagUserName;

    if (!validName.test(FirstName) || FirstName == " ") {
      // debugger;
      setFirstNameErr(true);
      alert("Please enter a valid First Name");
      flagFirstName = 1;
      //console.log(email);
    } else {
      flagFirstName = 0;
    }
    if (!validName.test(LastName) || LastName == " ") {
      setLastNameErr(true);
      alert("Please enter a valid Last Name");
      flagLastName = 1;
      //console.log(email);
    } else {
      flagLastName = 0;
    }
    if (!validEmail.test(Email) || Email == " ") {
      setEmailErr(true);
      alert("Please enter a valid Email");
      flagEmail = 1;
      //console.log(email);
    } else {
      flagEmail = 0;
    }
    if (!validTelephone.test(MobileNumber) || MobileNumber == " ") {
      setTelePhoneErr(true);
      alert("Please enter a valid Mobile Number");
      flagTel = 1;
      //console.log(mobileNumber);
    } else {
      flagTel = 0;
    }
    if (!validUserName.test(UserName) || UserName == " ") {
      setUserNameErr(true);
      alert("Please enter a valid UserName");
      flagUserName = 1;
      //console.log(userName);
    } else {
      flagUserName = 0;
    }

    if (flagEmail == 1 || flagTel == 1 || flagUserName == 1) flag = 1;
    else flag = 0;
  };

  //Button handler function which calls validate and Api call method
  const btnHandler = () => {
    debugger;
    Validate();
    //
    if (flag == 0) {
      AddUser(FormData);
    }
  };

  const AddUser = (FormData) => {
    AddUserService(
      FormData,
      (body) => {
        if (
          body.userId !== "" &&
          body.userId !== undefined &&
          body.userId !== null
        ) {
         alert("successful");
        }
      },
      (error) => {
        alert(error);
      }
    );
  };

  return (
    <>
      <TopMenu />
      {/* <LeftMenu1 /> */}
      <SideBar />
      <div className="container-fluid">
        <div className="page-body-wrapper">
          <div className="row">
            <main className="ms-sm-auto px-md-2">
              <div className="">
                <div className="col-lg-12 col-md-12">
                  <nav aria-label="breadcrumb" className="pt-4">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Add User
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-md-12">
                <h5 className="mb-0">Add User</h5>
                <small>Lorem ipsum dolor sit amet consectetur.</small>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <div className="card-body step-app h-wizard-demo4 p-0">
                    <div className="step-content">
                      <div className="" data-step="step1">
                        <form className="row g-2">
                          <div className="col-lg-12 col-md-12">
                            <div className="px-3 bg-white elevation-5 p-4 pt-2">
                              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                                <h2 className="h6">Personal Info.</h2>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="row g-3 needs-validation"
                                    noValidate
                                  >
                                    <div className="row">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          First name <sup>*</sup>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control wizard-required"
                                          id="validationCustom01"
                                          maxLength={30}
                                          value={FirstName}
                                          onChange={(e) => {
                                            setFName(e.target.value);
                                          }}
                                          // defaultValue=""
                                          required
                                          placeholder=""
                                        />
                                        <div className="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor="validationCustom02"
                                          className="form-label"
                                        >
                                          Last name <sup>*</sup>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control wizard-required"
                                          id="validationCustom01"
                                          value={LastName}
                                          maxLength={30}
                                          onChange={(e) => {
                                            setLName(e.target.value);
                                          }}
                                          // defaultValue=""
                                          required
                                          placeholder=""
                                        />
                                        <div className="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor="phone"
                                          className="form-label"
                                        >
                                          Mobile <sup>*</sup>
                                        </label>
                                        <div className="input-group has-validation">
                                          <input
                                            type="text"
                                            className="form-control wizard-required"
                                            value={MobileNumber}
                                            onChange={(e) => {
                                              setMobile(e.target.value);
                                            }}
                                            minLength={10}
                                            maxLength={10}
                                            id="phone"
                                            name="mobile-number"
                                            aria-describedby=""
                                            required
                                          />
                                          <div className="invalid-feedback">
                                            Please Enter a mobile number.
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor="phone"
                                          className="form-label"
                                        >
                                          UserName <sup>*</sup>
                                        </label>
                                        <div className="input-group has-validation">
                                          <input
                                            type="text"
                                            className="form-control wizard-required"
                                            value={UserName}
                                            onChange={(e) => {
                                              setUserName(e.target.value);
                                            }}
                                            id="phone"
                                            name="mobile-number"
                                            aria-describedby=""
                                            required
                                          />
                                          <div className="invalid-feedback">
                                            Please choose a username.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          DOB
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control wizard-required"
                                          id=""
                                          required
                                        />
                                        <div className="invalid-feedback">
                                          Please provide a valid date of birth.
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Gender{" "}
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                          required
                                        >
                                          <option defaultValue="male">
                                            Male
                                          </option>
                                          <option defaultValue="male">
                                            Female
                                          </option>
                                          <option defaultValue="male">
                                            Others
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please select a gender.
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Email <sup>*</sup>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control wizard-required"
                                          id=""
                                          value={Email}
                                          onChange={(e) => {
                                            setEmail(e.target.value);
                                          }}
                                          name="email"
                                          required
                                        />
                                        <div className="invalid-feedback">
                                          Please provide a valid city.
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
                                        <div className="form-group multiple-dropdown">
                                          <label
                                            htmlFor=""
                                            className="form-label"
                                          >
                                            Roles<sup>*</sup>
                                          </label>
                                          <i
                                            className="fa fa-angle-down"
                                            aria-hidden="true"
                                          ></i>
                                          <Select
                                            isMulti
                                            class="select2bs4"
                                            data-placeholder="Select multiple Roles"
                                            options={options}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                          />
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

                          <div className="row">
                            <div className="col-lg-6">
                              <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                                  <h2 className="h6">Permanent Address</h2>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <div
                                      className="row g-3 needs-validation"
                                      noValidate
                                    >
                                      <div className="col-md-12">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Address Line
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control wizard-required"
                                          value={permanentAddressLine}
                                          onChange={(e) => setPermanentAddressLine(e.target.value)}
                                          id=""
                                          defaultValue=""
                                          required
                                          placeholder=""
                                        />
                                        <div className="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          City
                                        </label>
                                        <div className="input-group has-validation">
                                          <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            required
                                            value={permanentCity}
                                            onChange={(e) => setPermanentCity(e.target.value)}
                                          >
                                            <option defaultValue="">
                                              select
                                            </option>
                                            <option defaultValue="mumbai">
                                              Mumbai
                                            </option>
                                            <option defaultValue="delhi">
                                              Delhi
                                            </option>
                                            <option defaultValue="bangalore">
                                              Bangalore
                                            </option>
                                            <option defaultValue="hyderabad">
                                              Hyderabad
                                            </option>
                                          </select>
                                          <div className="invalid-feedback">
                                            Please provide a valid city.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          State
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                          required
                                          value={permanentState}
                                          onChange={(e) => setPermanentState(e.target.value)}
                                        >
                                          <option defaultValue="">
                                            select
                                          </option>
                                          <option defaultValue="andhrapradesh">
                                            Andhra Pradesh
                                          </option>
                                          <option defaultValue="delhi">
                                              Delhi
                                            </option>
                                          <option defaultValue="assam">
                                            Assam
                                          </option>
                                          <option defaultValue="bihar">
                                            Bihar
                                          </option>
                                          <option defaultValue="chhattisgarh">
                                            Chhattisgarh
                                          </option>
                                          <option defaultValue="Delhi">
                                            Delhi
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid state.
                                        </div>
                                      </div>
                                      <div className="col-md-9">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Country
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                          required
                                          value={permanentCountry}
                                          onChange={(e) => setPermanentCountry(e.target.value)}
                                        >
                                          <option defaultValue="">
                                            select
                                          </option>
                                          <option defaultValue="afghanistan">
                                            Afghanistan
                                          </option>
                                          <option defaultValue="albania">
                                            Albania
                                          </option>
                                          <option defaultValue="algeria">
                                            Algeria
                                          </option>
                                          <option defaultValue="andorra">
                                            Andorra
                                          </option>
                                          <option defaultValue="india">
                                            India
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid country.
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Zip
                                        </label>
                                        <div className="input-group has-validation">
                                          <input
                                            type="text"
                                            className="form-control wizard-required"
                                            id=""
                                            name="zip-code"
                                            aria-describedby=""
                                            required
                                            value={permanentZip}
                                            onChange={(e) => setPermanentZip(e.target.value)}
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

                            <div className="col-lg-6">
                              <div className="px-3 bg-white elevation-5 p-4 pt-2 mt-3">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                                  <h2 className="h6">Current Address</h2>
                                  <div className="col-6">
                                    <div className="form-check float-right">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        onChange={(e) => CheckboxHandler(e)}
                                      />
                                      <label className="form-check-label">
                                        Same as Permanent address
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <div
                                      className="row g-3 needs-validation"
                                      noValidate
                                    >
                                      <div className="col-md-12">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Address Line
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control wizard-required"
                                          id=""
                                          defaultValue=""
                                          required
                                          placeholder=""
                                          value={currentAddressLine}

                                        />
                                        <div className="valid-feedback">
                                          Looks good!
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          City
                                        </label>
                                        <div className="input-group has-validation">
                                          <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            required
                                            value={currentCity}
                                          >
                                            <option defaultValue="">
                                              select
                                            </option>
                                            <option defaultValue="mumbai">
                                              Mumbai
                                            </option>
                                            <option defaultValue="delhi">
                                              Delhi
                                            </option>
                                            <option defaultValue="bangalore">
                                              Bangalore
                                            </option>
                                            <option defaultValue="hyderabad">
                                              Hyderabad
                                            </option>
                                          </select>
                                          <div className="invalid-feedback">
                                            Please provide a valid city.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          State
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                          required
                                          value={currentState}
                                        >
                                          <option defaultValue="">
                                            select
                                          </option>
                                          <option defaultValue="andhrapradesh">
                                            Andhra Pradesh
                                          </option>
                                          <option defaultValue="assam">
                                            Assam
                                          </option>
                                          <option defaultValue="bihar">
                                            Bihar
                                          </option>
                                          <option defaultValue="chhattisgarh">
                                            Chhattisgarh
                                          </option>
                                          <option defaultValue="delhi">
                                            Delhi
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid state.
                                        </div>
                                      </div>
                                      <div className="col-md-9">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Country
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                          required
                                          value={currentCountry}
                                        >
                                          <option defaultValue="">
                                            select
                                          </option>
                                          <option defaultValue="afghanistan">
                                            Afghanistan
                                          </option>
                                          <option defaultValue="albania">
                                            Albania
                                          </option>
                                          <option defaultValue="algeria">
                                            Algeria
                                          </option>
                                          <option defaultValue="andorra">
                                            Andorra
                                          </option>
                                          <option defaultValue="india">
                                            India
                                          </option>
                                        </select>
                                        <div className="invalid-feedback">
                                          Please provide a valid country.
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Zip
                                        </label>
                                        <div className="input-group has-validation">
                                          <input
                                            type="text"
                                            className="form-control wizard-required"
                                            name="zip-code"
                                            id=""
                                            aria-describedby=""
                                            required
                                            value={currentZip}
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
                      <div className="step-footer d-flex">
                        <button
                          type="button"
                          className="btn step-btn"
                          onClick={() => {
                            // AddUser(FormData);
                            btnHandler();
                          }}
                          style={{ backgroundColor: "#023c9f", color: "white" }}
                          data-step-action="finish"
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
