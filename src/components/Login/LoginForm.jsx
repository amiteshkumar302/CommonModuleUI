import React, { useState } from "react";
import { Authenticate } from "../../services/LoginService";
import { setItem } from "../../storage/LocalStorageUtil";
import StorageConstants from "../../constants/StorageConstants";
import { validPassword, validUserName } from "../Validation/LoginFieldsValidation";

function LoginForm(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [credentialsErr, setCredentialsErr] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let credentials = { userName, password };
  let flag;

  //This code valdiates username and password
  const validate = () => {
    let flagUserName, flagPassword;
    if (!validUserName.test(userName) || userName == "") {
      setUserNameErr(true);
      alert("Please enter a valid username");
      flagUserName = true;
    } else flagUserName = false;
    if (password == "" || password == null || password == undefined || !validPassword.test(password)) {
      setPasswordErr(true);
      alert("Please enter a valid password to login");
      flagPassword = true;
    } else flagPassword = false;

    if (flagUserName == true || flagPassword == true) flag = true;
    else flag = false;
  };

  var x;

  function credentialsEmpty() {
    if (!validUserName.test(userName) && !validPassword.test(password)) {
      alert("Please enter valid username and password");
      return true;
    } else return false;
  }

  if (StorageConstants.IS_LOGGED_IN == true) {
    props.navigateToOtpVerification();
  }

  function btnHandler() {
    if (credentialsEmpty() == false) {
      validate();
    }
    if (flag == false) {
      LoginFetch();
    }
  }

  //Function to call validate and api calling function with user entered credentials
  function LoginFetch() {
    Authenticate(
      credentials,
      (body) => {
        if (
          body.otpReferenceID !== " " &&
          body.otpReferenceID !== undefined &&
          body.otpReferenceID !== null
        ) {
          //Ref ID generates while login which will be stored in local Storage.
          setItem(StorageConstants.OTP_REF_ID, body.otpReferenceID);
          //console.log("body",body);

          setIsLoggedIn(true);
          props.navigateToOtpVerification();
        }
      },
      //If api fails then this will responds the errorMessage.
      (error) => {
        alert(error);
      }
    );
  }

  return (
    <>
      <form className="card shadow border p-4" style={{ width: "350px" }}>
        <p className="pb-2">Please login to your account.</p>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            required
            placeholder="John Smith"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            placeholder="******"
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row mb-3">
          <div className="col justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked == true) {
                    setIsLoggedIn(true);
                  } else {
                    setIsLoggedIn(false);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            {/* Simple Link */}
            <a href="/ForgotPassword">Forgot Password?</a>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={(e) => {
            btnHandler();
          }}
        >
          Sign In
        </button>
        <div className="text-center">
          <p>
            Not a member? <a href="/SignUp">Sign Up</a>
          </p>
        </div>
      </form>
    </>
  );
}
export default LoginForm;
