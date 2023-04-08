import { useScrollTrigger } from "@mui/material";
import React, { useState } from "react";
import { ResetPassword } from "../../services/ResetPasswordService";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function MatchPasswords() {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    } else return true;
  }

  function btnHandler() {
    if (MatchPasswords() == true) {
      ResetPasswordFetch();
    }
  }

  function ResetPasswordFetch() {
    ResetPassword(
      newPassword,
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
        <div className="change-password-screen">
          <div className="d-flex justify-content-center ">
            <form
              className="card shadow border rounded-5 p-4"
              style={{ width: "25rem" }}
            >
              <p className="pb-2 h3">Reset Password</p>
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
                  //   id="exampleFormControlInput1"
                  placeholder=""
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  placeholder=""
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {/* Submit button */}
              <button
                type="button"
                className="btn btn-primary btn-block mb-4 change-password"
                // data-bs-toggle="modal"
                // data-bs-target="#changepassword"
                onClick={() => {
                  btnHandler();
                }}
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
      </div>
    </>
  );
}

export default ResetPasswordForm;
