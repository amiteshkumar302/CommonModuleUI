import React from "react";
import ProfileFooter from "../Footer/ProfileFooter";
import SideBar from "./SideBar";
import ProfilePage from "./ProfilePage";
import TopMenu from "./TopMenu";

function Profile() {
  return (
    <>
      <TopMenu />
      <ProfilePage />
      <SideBar />
      <ProfileFooter />
    </>
  );
}

export default Profile;
