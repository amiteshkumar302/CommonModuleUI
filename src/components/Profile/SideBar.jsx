import React from "react";
import "../../css/left-menu.css";
import "../../css/mobile.css";
import mainLogo from "../../img/dummy-full-logo.png";
import YourBusiness from "../../img/dummy-logo-icon.png";

function SideBar() {

  return (
    <>
      <div className="l-navbar bg-white elevation-4" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="brand-link" align="left">
              <img
                className="logo-icon"
                src={YourBusiness}
                alt="Mind IT Systems"
                style={{
                  width: "40px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              />
              <span className="nav_logo-name">
                <img
                  className="main-logo"
                  src={mainLogo}
                  alt="Mind IT Systems"
                  style={{ width: "150px", marginLeft: "10px" }}
                />
              </span>
            </a>
            <div className="nav_list pt-3">
              <a href="/Profile" className="nav_link active">
                {" "}
                <i className="fa fa-tachometer nav_icon" />{" "}
                <span className="nav_name">Dashboard</span>{" "}
              </a>
              <a href="#" className="">
                <i className=" fa fa-user nav_icon"></i>
                <span className="nav_name">User</span>
                <i className="fa fa-angle-up"></i>
              </a>
              <div className="">
                <ul>
                  <li>
                    <a href="/AddUser">Add</a>
                  </li>
                  <li>
                    <a href="/UserSearch">Search</a>
                  </li>
                </ul>
              </div>
              <a href="role.html" className="nav_link">
                <i className=" fa fa-black-tie nav_icon" />
                {/* <FontAwesomeIcon icon = {FaBlackTie}  color="green" /> */}

                <span className="nav_name">Role</span>
              </a>
              <a href="configuration.html" className="nav_link">
                <i className=" fa fa-file-text nav_icon" />
                <span className="nav_name">Configuration</span>
              </a>
              <a href="#" className="nav_link dropdown-menu">
                {" "}
                <i className=" fa fa-sign-in nav_icon" />{" "}
                <span className="nav_name">Logging</span>{" "}
                <i className="fa fa-angle-up" />
              </a>
              <div className="dropdown-data">
                <ul>
                  <li>
                    <a href="log.html">Logs</a>
                  </li>
                  <li>
                    <a href="events.html">Events</a>
                  </li>
                  <li>
                    <a href="error.html">Errors</a>
                  </li>
                  <li>
                    <a href="charts.html">Chart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
