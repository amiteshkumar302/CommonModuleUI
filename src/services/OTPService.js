import { redirect } from "react-router-dom";
import APIConstants from "../constants/APIConstants";
import StorageConstants from "../constants/StorageConstants";
import { getItem } from "../storage/LocalStorageUtil";

//Function to call OTPVerification Api
export function OtpVerify(IdOtp, success, error) {
  //Fetch is used to call an Api
  fetch(
    APIConstants.BASE_URL +
      APIConstants.OTP +
      localStorage.otpReferenceId +
      "&otp=" +
      IdOtp.OTP,
    {
      method: "POST",
      body: JSON.stringify(IdOtp),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
      },
    }
  )
    //This is used to handle the response by Api
    .then((response) => {
      return new Promise((resolve) =>
        response.json().then((json) =>
          resolve({
            status: response.status,
            body: json,
          })
        )
      );
    })
    //This method error in response of the Api
    .then(({ status, body }) => {
      switch (status) {
        case 400: {
          error(body.errorMessage);
          break;
        }
        case 200: {
          success(body);
          // alert("User verified successfully");
          // redirect("/Profile");
          // return window.location = ("/Profile");
          break;
        }
        case 409: {
          error(body.errorMessage);
          break;
        }
        default: {
          error("Something went wrong");
          break;
        }
      }
    });
}
