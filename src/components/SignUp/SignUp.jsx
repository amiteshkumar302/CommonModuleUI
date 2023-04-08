import React from "react";
import SignUpForm from "./SignUpForm";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

function SignUp() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="d-flex justify-content-center">
          <SignUpForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
