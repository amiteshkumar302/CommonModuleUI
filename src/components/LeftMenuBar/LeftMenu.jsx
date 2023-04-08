import React from "react"
import Footer from "../Footer/Footer";
import DummyLogoIcon from "../../img/dummy-logo-icon.png"
import DummyFullLogo from "../../img/dummy-full-logo.png"
import "../../css/left-menu.css";
import "../../css/mobile.css";
function LeftMenu(){
    return <>
        <div className="l-navbar bg-white elevation-4" id="nav-bar">
    <nav className="nav">
        <div>
            <a  className="brand-link" align="left">
                <img className="logo-icon" src={DummyLogoIcon} alt="Mind IT Systems" style={{width: "40px", marginLeft: "10px", marginBottom: "10px" }} />
                <span className="nav_logo-name"><img className="main-logo" src={DummyFullLogo} alt="Mind IT Systems" style={{width: "150px", marginLeft: "10px"}} /></span>
            </a>
            <div className="nav_list pt-3">
                <a  className="nav_link active"> <i className="fa fa-tachometer nav_icon"></i> <span className="nav_name">Dashboard</span> </a>
                <a  className="nav_link dropdown-menu"> <i className=" fa fa-user nav_icon"></i> <span className="nav_name">User</span> <i className="fa fa-angle-up"></i></a>
                {/* <div className="dropdown-data">
                    <ul>
                        <li><a >Add</a></li>
                        <li><a >Search</a></li>
                    </ul>
                </div> */}
                <a  className="nav_link"> <i className=" fa fa-black-tie nav_icon"></i> <span className="nav_name">Role</span>  </a>
                <a  className="nav_link"> <i className=" fa fa-eye nav_icon"></i> <span className="nav_name">Configuration</span>  </a>
                <a  className="nav_link dropdown-menu"> <i className=" fa fa-sign-in nav_icon"></i> <span className="nav_name">Logging</span>  <i className="fa fa-angle-up"></i></a>
                <div className="dropdown-data">
                    <ul>
                        <li><a >Logs</a>Logs</li>
                        <li><a >Chart</a>Chart</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

    </>
}

export default LeftMenu;