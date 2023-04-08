export default class ApiConstants {
  static BASE_URL = "http://commommodulesapi.mindit.systems";
  // static BASE_URL = "https://localhost:7227";
  static GET_ROLES = "/api/roles";
  static SAVE_ROLE = "/api/role";
  static MODIFY_ROLE = "/api/role/";
  static ACTIVE_STATUS = "/status?isActive=";
  static GET_ACTIVE_AND_NON_DELETED_ROLES = "/api/permission/roles";
  static CREATE_USER = "/api/user/create";
  static GET_USER_PROFILE_DETAILS = "/api/user/";
  static UPDATE_USER = "/api/user/";
  static LOGIN = "/api/login";
  static SIGNUP = "/api/signup";
  static OTP = "/api/verifyOTP?OTPReferenceID=";
  static CHANGE_PASSWORD = "/api/Account/ChangePassword";
  static FORGOT_PASSWORD = "/api/Account/ForgotPassword";
  static GET_USER_BY_ID = "/api/user/";
  static GET_ALL_USERS = "/api/getallusers";
  static DELETE_USER = "/api/user/";
  static GET_USER = "/api/users";
  static RESET_PASSWORD = "/api/Account/ResetPassword";
}
