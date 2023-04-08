import React, { useEffect } from "react";
import InputBox from "../../utils/user_Search_utils/InputBox";
import { useState } from "react";
import Dropdown from "../../utils/user_Search_utils/Dropdown";
import Button from "../../utils/user_Search_utils/Button";

import ApiCall from "../../apiUtils/user_Search_utils/ApiCall";
export default function Main(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [searchemail, setMailId] = useState("");
  const [searchname, setSearchname] = useState("");
  const [searchmobile, setmobileNum] = useState("");
  const [searchRole, setSearchRole] = useState("");

  //function to get input from user name input box
  const OnNamechange = (event) => {
    setName(event.target.value);
  };
  //function to get input from user name input box
  const OnEmailchange = (event) => {
    setEmail(event.target.value);
  };
  //function to get input from user name input box
  const OnMobilechange = (event) => {
    setMobile(event.target.value);
  };
  useEffect(() => {}, [searchname, searchemail, searchmobile, searchRole]);
  function handelClick() {
    console.log(email);
    console.log(searchname);
    console.log(searchemail);
    console.log(searchmobile);

    setEmail("");
    setName("");
    setMobile("");

    setMailId(email);
    setSearchname(name);
    setmobileNum(mobile);
    setSearchRole(role);
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="page-body-wrapper">
          <div className="row">
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
              <nav aria-label="breadcrumb" className="pt-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search User
                  </li>
                </ol>
              </nav>
              <div className="col-md-12 mb-3">
                <h5 className="mb-0">Search User</h5>
                <small>Lorem ipsum dolor sit amet consectetur.</small>
              </div>
              <div className="row px-3 bg-white elevation-5 p-4 pt-2">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
                  <h2 className="h6">Search</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <InputBox
                          label="Name"
                          inputType="text"
                          id="InputName"
                          value={name}
                          onChange={OnNamechange}
                          placeholder="Name"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <InputBox
                          label="Email"
                          inputType="email"
                          id="InputEmail"
                          value={email}
                          onChange={OnEmailchange}
                          placeholder="E mail"
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <InputBox
                          label="Mobile"
                          inputType="number"
                          id="InputMobile"
                          value={mobile}
                          onChange={OnMobilechange}
                          placeholder="Mobile Number"
                        />

                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>

                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div className="form-group multiple-dropdown">
                          <Dropdown
                            changemodal={(role) => setRole(role)}
                            label="Roles"
                            defaultValue="Select Roles"
                            Value1="Admin"
                            Value2="Manager"
                            Value3="HR"
                            Value4="User"
                          />
                          <div className="invalid-feedback">
                            Please select a role.
                          </div>
                        </div>
                      </div>

                      <div className="col-2 mt-5">
                        <button
                          type="button"
                          className="btn"
                          style={{ backgroundColor: "#5a70c6", color: "white" }}
                          onClick={() => {
                            handelClick();
                          }}
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <ApiCall
                searchName={searchname}
                searchEmail={searchemail}
                searchMobile={searchmobile}
                searchRole={searchRole}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
