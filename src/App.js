import "./App.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/datatable.min.css";
import "../src/assets/css/jquerysteps.min.css";
import "../src/assets/css/left-menu.css";
import "../src/assets/css/mobile.css";
import "../src/assets/css/select2-bootstrap4.min.css";
import "../src/assets/css/select2.min.css";
import "../src/assets/css/tempusdominus-bootstrap-4.min.css";
import Main from "./components/user_search_component/Main";
import User from "./components/user/user";
import ApiCall from "./apiUtils/user_Search_utils/ApiCall";
import Login from "../src/components/Login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import OtpVerification from "./components/OtpVerification/OtpVerification";
import OtpSuccess from "./components/OtpVerification/OtpSuccess";
import Profile from "../src/components/Profile/Profile";
import ChangePasswordPage from "./components/ChangePassword/ChangePassword";
import AddUserForm from "./components/user/AddUserForm";
import UpdateUserForm from "./components/user/UpdateUserForm";
import ResetPassword from "./components/ResetPassword/ResetPassword";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/OtpVerification" element={<OtpVerification />} />
          <Route path="/UpdateUser" element={<UpdateUserForm />} />
          <Route path="/AddUser" element={<AddUserForm />} />
          <Route path="/OtpSuccess" element={<OtpSuccess />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ChangePassword" element={<ChangePasswordPage />} />
          <Route exact path="/UserSearch" element={<Main />} />
          {/* <Route exact path="/add" element={<User />} /> */}
          {/* <Route exact path="/user" element={<ApiCall />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
