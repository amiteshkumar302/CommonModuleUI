//This class defines objects which stores the Api URL.
export default class APIConstants {
  static BASE_URL = "https://localhost:7227";
  static LOGIN = "/api/login";
  static SIGNUP = "/api/signup";
  static OTP = "/api/verifyOTP?OTPReferenceID=";
  static CHANGE_PASSWORD = "/api/Account/ChangePassword";
  static FORGOT_PASSWORD = "/api/Account/ForgotPassword";
  static GET_USER_BY_ID = "/api/user/";
}
