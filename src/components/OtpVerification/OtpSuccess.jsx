import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function OtpSuccess() {

  function NavigateToProfile() {
    return window.location("/Profile")
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <form
            className="card shadow border rounded-5 p-4"
            style={{ width: "25rem" }}
            id="verified-section"
          >
            <div className=" rounded-5 p-4">
              {/* <i className="fa fa-check-circle-o" /> */}
              <div className="text-center">
                <FontAwesomeIcon icon={faCheckCircle} size="6x" color="green" />
              </div>
              <p className="msg-text text-center">Successful!</p>
              <p className="msg-para text-center">
                Your enter OTP has been successfully verified.
              </p>
              {/* Submit button */}
              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                style={{ width: "100%" }}
                onClick={() => NavigateToProfile()}
              >
                OK
              </button>
            </div>
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

export default OtpSuccess;
