import React from "react"
import Footer from "../Footer/Footer";
import DummyLogoIcon from "../../img/dummy-logo-icon.png"
import DummyFullLogo from "../../img/dummy-full-logo.png"
import "../../css/left-menu.css";
import "../../css/mobile.css";

function LeftMenu1(){
    return (
        <>
        <div className="l-navbar bg-white elevation-4" id="nav-bar">
  <nav className="nav">
    <div>
      <a href="#" className="brand-link" align="left">
        <img className="logo-icon" src="img/dummy-logo-icon.png" alt="Mind IT Systems" style={{width: '40px', marginLeft: '10px', marginBottom: '10px'}} />
        <span className="nav_logo-name"><img className="main-logo" src="img/dummy-full-logo.png" alt="Mind IT Systems" style={{width: '150px', marginLeft: '10px'}} /></span>
      </a>
      {/* <a href="#" class="nav_logo"> <i class=" fa fa-globe nav_logo-icon"></i> <span
              class="nav_logo-name"><img src="img/logo-MindIT.png" style="width: 180px;" alt="Mind IT Systems"></span> </a> */}
      <div className="nav_list pt-3">
        <a href="#" className="nav_link active"> <i className="fa fa-tachometer nav_icon" /> <span className="nav_name">Dashboard</span> </a>
        {/* <a href="#" className="nav_link dropdown-menu"> <i className=" fa fa-user nav_icon" /> <span className="nav_name">User</span> <i className="fa fa-angle-up" /></a>
        <div className="dropdown-data">
          <ul>
            <li><a href="user.html">Add</a></li>
            <li><a href="user_search.html">Search</a></li>
          </ul>
        </div> */}
          <label>
        User
        <select>
          <option value="Add">Add</option>
          <option value="Search">Search</option>
        </select>
      </label>
        <a href="role.html" className="nav_link"> <i className=" fa fa-black-tie nav_icon" /> <span className="nav_name">Role</span></a>
        {/* <div class="dropdown-data">
              <ul>
                  <li><a href="role.html">Role</a></li>
                  <li><a href="permission.html">Permission</a></li>
                  <li><a href="module.html">Module</a></li>
              </ul>
          </div> */}
        {/* <a href="#" class="nav_link"> <i class=" fa fa-check-square nav_icon"></i> <span class="nav_name">Permission</span> </a>
          <a href="#" class="nav_link"> <i class=" fa fa-cubes nav_icon"></i> <span class="nav_name">Module</span> </a> */}
        <a href="configuration.html" className="nav_link"> <i className=" fa fa-file-text nav_icon" /> <span className="nav_name">Configuration</span></a>
        <a href="#" className="nav_link dropdown-menu"> <i className=" fa fa-sign-in nav_icon" /> <span className="nav_name">Logging</span>  <i className="fa fa-angle-up" /></a>
        <div className="dropdown-data">
          <ul>
            <li><a href="log.html">Logs</a></li>
            {/* <li><a href="events.html">Events</a></li>
                  <li><a href="error.html">Errors</a></li> */}
            <li><a href="charts.html">Chart</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>

        </>
    )
}

export default LeftMenu1;