import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InputFields from "./InputFields";
import StorageConstants from "../../constants/StorageConstants";
import { OtpVerify } from "../../services/OTPService";
import { getItem, setItem } from "../../storage/LocalStorageUtil";

function OtpVerification() {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");

  //Storing reference ID into local storage
  let RefId = getItem(StorageConstants.OTP_REF_ID);

  let OTP = digit1 + digit2 + digit3 + digit4 + digit5;
  let IdOtp = { RefId, OTP };

  //This function fetches API call function with the user entered OTP.
  function OTPFetch() {
    OtpVerify(
      IdOtp,
      (body) => {
        console.log(body);
        //If user is login then the token will be generated and stored in localStorage
        if (body.type === "Login") {
          // setItem(StorageConstants.LOGIN_TOKEN, body.Token);
          setItem(StorageConstants.LOGIN_TOKEN, body.token);

          return (window.location = "/Profile");
        }
        //If user is reseting password then the Ref id will be generated and stored in localStorage
         else if (body.type === "Forget") {
          setItem(
            StorageConstants.RESET_PASS_REF_ID,
            body.ResetPasswordReferenceID
          );
          // alert("OTP Verified Successfully");
          return (window.location = "/ResetPassword");
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
      <Header />
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <form
            className="card shadow border rounded-5 p-4"
            style={{ width: "25rem" }}
            id="otp-section"
          >
            <p className="pb-2 h3">OTP Verification</p>
            <p>
              We have sent a verification code to the registration phone/email.
              Please enter the code below.
            </p>
            <p className="verify-msg">Thanks for verification</p>
            <div className="row g-3 py-4">
              <div className="verification-code">
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2"
                >
                  <InputFields changeValue={(digit1) => setDigit1(digit1)} />
                  <InputFields changeValue={(digit1) => setDigit2(digit1)} />
                  <InputFields changeValue={(digit1) => setDigit3(digit1)} />
                  <InputFields changeValue={(digit1) => setDigit4(digit1)} />
                  <InputFields changeValue={(digit1) => setDigit5(digit1)} />
                  {/* <InputFields changeValue={(digit1) => setDigit6(digit1)} /> */}
                </div>
                <input type="hidden" id="verificationCode" />
              </div>
            </div>
            {/* Submit button */}
            <button
              type="button"
              className="btn btn-primary mb-4 verify-button"
              onClick={() => {
                OTPFetch();
              }}
            >
              Verify
            </button>

            {/* Register buttons */}
            <div className="text-center">
              <p>
                <a href="/Login">Back to Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default OtpVerification;
