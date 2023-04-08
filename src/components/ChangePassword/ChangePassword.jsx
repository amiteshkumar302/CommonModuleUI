import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ChangePassword } from "../../services/ChangePasswordService";
import { Authenticate } from "../../services/ChangePasswordService";

function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let passwords = { newPassword, oldPassword };

  function ChangePasswordFetch() {
    ChangePassword(
      passwords,
      (body) => {
        console.log(body);
        if (body !== "true") {
          return Window;
        }
      },
      (error) => {
        alert(error);
      }
    );
  }
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="change-password-screen">
          <div className="d-flex justify-content-center ">
            <form
              className="card shadow border rounded-5 p-4"
              style={{ width: "25rem" }}
            >
              <p className="pb-2 h3">Change password</p>
              {/* <p>Enter the mobile number you used when you joined and we'll send you instructions to reset your password.</p> */}
              <div className="mb-3 pt-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              {/* Submit button */}
              <button
                type="button"
                className="btn btn-primary btn-block mb-4 change-password"
                data-bs-toggle="modal"
                data-bs-target="#changepassword"
                onClick={ChangePasswordFetch}
              >
                Submit
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
      </div>
      {/*Modal Section*/}
      <div
        className="modal fade"
        id="changepassword"
        tabIndex={-1}
        aria-labelledby="changepasswordLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className=" change-password-succuss-msg">
                <div className=" rounded-5 p-4">
                  <i className="fa fa-check-circle-o" aria-hidden="true" />
                  <p className="msg-text">Password Changed!</p>
                  <p className="msg-para">
                    Your password has been changed successfully.
                  </p>
                  {/* Submit button */}
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-4"
                    style={{ width: "100%" }}
                    // onClick={myFunction}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordPage;
