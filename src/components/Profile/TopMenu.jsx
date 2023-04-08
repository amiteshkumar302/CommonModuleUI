import React from "react";
import UserProfile from "../../img/user-profile.png";
import "../../css/custom.css";
import "../../css/left-menu.css";


function TopMenu(props) {
  return (
    <>
      <header
        className="header bg-white top-menu-header border-bottom"
        id="header"
      >
        <div className="header_toggle">
          {/* <p>Header</p> */}
          <i className="fa fa-bars" id="header-toggle"></i>

        </div>
        <div className="notification-icon float-right">
          <div className="dot"></div>
          <i className="fa fa-bell-o" aria-hidden="true"></i>

          <div className="all-notification">
            <div className="notification-list">
              <div className="row">
                <div className="col-lg-8">
                  <h5>Notifications</h5>
                </div>
                <div className="col-lg-4">
                  <p className="count float-right">5</p>
                </div>
              </div>
              <div className="notification-data">
                <ul>
                  <li>
                    <a href="#">
                      <div className="media">
                        <i className="fa fa-clock-o"></i>
                        <div className="media-body">
                          <h6 className="mt-0">
                            Vestibulum <span className="float-right">19 Aug.</span>
                          </h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <i className="fa fa-calendar-o"></i>
                        <div className="media-body">
                          <h6 className="mt-0">
                            consectetur <span className="float-right">18 Aug.</span>
                          </h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="notification-footer">
                <a style={{color: "#fff !important"}}>View all notifications</a>
            </div>
          </div>
        </div>
        <div className="user-profile">
        <div className="header_img"> <img  src={UserProfile} alt="" /> 
        
        </div>
        <div className="user-list">
            <div className="user-details">
                <p className="name text-primary">Abhishek Rawat</p>
                <p className="email">Admin</p>

            </div>
            <ul>
                <li><a href="/Profile"><i className="fa fa-user"></i> Profile</a></li>
                <li><a href="/ChangePassword"><i className="fa fa-lock"></i> Change Password</a></li>
                <li><a href="/Login" onClick={() => localStorage.clear()}><i className="fa fa-power-off"></i> Logout</a></li>
            </ul>
        </div>
    </div>
      </header>
    </>
  );
}

export default TopMenu;
