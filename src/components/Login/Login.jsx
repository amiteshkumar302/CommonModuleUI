import React from "react";
import LoginForm from "./LoginForm";
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

function Login(){

  function navigateToOtpVerification(){
    return window.location = "/OtpVerification";
  }
    return(
    <>
    <div className="container-fluid" >
    <Header />
    <div className="d-flex justify-content-center">
      <LoginForm 
      navigateToOtpVerification={navigateToOtpVerification}
      />
    </div>
    <Footer />
    </div>
    </>
    );
}

export default Login;