import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import { AddUser } from "../../services/SignUpService";
import {
  validFirstName,
  validLastName,
  validEmail,
  validTelephone,
  validUserName,
} from "../Validation/SignUpFieldsValidation";

const FormClass = "card shadow border solid rounded-5 p-4";

function SignUpForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState();
  const [agree, setAgree] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [telePhoneErr, setTelePhoneErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [validated, setValidate] = useState();
  let UserDetails = { firstName, lastName, email, mobileNumber, userName };

  let flag;
  //Function to validate input fields.
  const validate = () => {
    let flagFirstName, flagLastName, flagEmail, flagTel, flagUserName;

    if (!validFirstName.test(firstName) || firstName == " ") {
      setFirstNameErr(true);
      alert("Please enter a valid First Name");
      flagFirstName = 1;
    } else {
      flagFirstName = 0;
    }

    if (!validLastName.test(lastName) || lastName == " ") {
      setLastNameErr(true);
      alert("Please enter a valid Last Name");
      flagLastName = 1;
    } else {
      flagLastName = 0;
    }

    if (!validEmail.test(email) || email == " ") {
      setEmailErr(true);
      alert("Please enter a valid Email");
      flagEmail = 1;
    } else {
      flagEmail = 0;
    }
    if (!validTelephone.test(mobileNumber) || mobileNumber == " ") {
      setTelePhoneErr(true);
      alert("Please enter a valid Mobile Number");
      flagTel = 1;
    } else {
      flagTel = 0;
    }
    if (!validUserName.test(userName) || userName == " ") {
      setUserNameErr(true);
      alert("Please enter a valid UserName");
      flagUserName = 1;
    } else {
      flagUserName = 0;
    }

    if (flagFirstName == 1 || flagLastName == 1 || flagEmail == 1 || flagTel == 1 || flagUserName == 1) flag = 1;
    else flag = 0;
  };
  //This function disables the button if the checkbox is not checked.
  const checkboxHandler = () => {
    setAgree(!agree);
  };

  //Button handler function which calls validate and Api call method
  const btnHandler = () => {
    validate();
    //
    if (agree && flag == 0) {
      SignUpApiFetch();
    }
  };

  //This Function calls API call function
  function SignUpApiFetch() {
    AddUser(
      UserDetails,
      (body) => {
        console.log(body + "User created successfully");
        // return alert("User created successfully");
        return window.location = "/Login";
        
      },
      (error) => {
        alert(error);
      }
    );
  }

  return (
    <>
      <form className={FormClass} style={{ width: "25rem" }}>
        <p className="py-2">Signup a new membership</p>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="firstName"
            required
            // value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            id="name"
            // value={lastName}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Email"
            required
            // value={email}
          />
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Phone number
              </label>
              <br />
              <input
                type={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                // value={mobileNumber}
                className="form-control"
                id="id"
                placeholder="9876543210"
                minLength={10}
                maxLength={10}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              User Name
            </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              id="name"
              // value={userName}
              placeholder="Username"
              required
            />
          </div>

          {/* <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Gender
              </label>
              <select name="" id="" className="form-select">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="row mb-4">
          <div className="col">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={agree}
                id="flexCheckDefault"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                I agree to the <a href="#">Terms & Conditions</a>{" "}
              </label>
            </div>
          </div>
        </div>
        {/* {Submit button} */}
        <button
          type="button"
          disabled={!agree}
          className="btn btn-primary btn-block mb-4"
          onClick={btnHandler}
        >
          Sign Up
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            I already have a membership <a href="/Login">Sign In</a>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
