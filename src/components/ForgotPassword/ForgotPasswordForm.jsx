import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { setItem } from "../../storage/LocalStorageUtil";
import { ForgotPassword } from "../../services/ForgotPasswordService";
import StorageConstants from "../../constants/StorageConstants";
import { validUserName } from "../Validation/ForgotPasswordFieldsValidation";

function ForgotPasswordForm(props) {
  const [userName, setUsername] = useState("");
  const [refID, setRefId] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [data, setData] = useState([" "]);

  useEffect(() => {
    setItem("RefID", JSON.stringify(data));
  }, [data]);
  
  let flagUserName;
  function Validate() {
    if (!validUserName.test(userName)) {
      setUserNameErr(true);
      alert("Please enter a valid username");
      flagUserName = true;
      console.log(flagUserName)
    }
    else flagUserName = false;
  }

  function SubmitHandler() {
    Validate();
    if (flagUserName == false) {
      ForgotPasswordFetch();
    }
  }

  //Function to call API function with user entered username
  function ForgotPasswordFetch() {
    let username = { userName };
    ForgotPassword(
      username,
      (body) => {
        console.log(body);
        if (
          body.otpReferenceID !== "" &&
          body.otpReferenceID !== undefined &&
          body.otpReferenceID !== null
        ) {
          //Ref ID generates while forgot password which will be stored in local Storage.
          setItem(StorageConstants.OTP_REF_ID, body.otpReferenceID);
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
    <form
      className="card shadow border rounded-5 p-4"
      style={{ width: "25rem" }}
    >
      <p className="pb-2 h3">Forgot password</p>
      <p>
        Enter the information used for registration and we'll send you
        instructions to reset your password.
      </p>
      <div className="mb-4 pt-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username/Mobile/Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <a
        type="button"
        className="float-right"
          onClick={() => {
            SubmitHandler();
          }}
        >
          <small className="float-right pt-1">Resend OTP</small>
        </a>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        data-bs-target="#forgotpassword"
        onClick={() => {
          SubmitHandler();
        }}
      >
        <a className="text-white">Submit</a>
      </button>
      {/* <!-- Register buttons --> */}
      <div className="text-center">
        <p>
          <a href="/Login">Back to Sign In</a>
        </p>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
