import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ForgotPassword() {
  function navigateToOtpVerification() {
    return (window.location = "/OtpVerification");
  }

  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="d-flex justify-content-center">
          <ForgotPasswordForm
            navigateToOtpVerification={navigateToOtpVerification}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ForgotPassword;
