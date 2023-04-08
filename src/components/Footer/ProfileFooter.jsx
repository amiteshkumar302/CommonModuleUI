import React from "react";
import logomindit from "../../img/logo-MindIT.png"

function ProfileFooter() {
  return (
    <>
      <footer id="footer">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright-text">
              © Copyright 2022 <a href="#">Mind IT Systems</a>
            </p>
          </div>
          <div className="col-md-1">
            <div className="text-center">
              <img
                src= {logomindit}
                style={{ width: "100px" }}
                alt="Mind IT Systems"
              />
            </div>
          </div>
          <div className="col-md-5">
            <p className="float-right">Version 0.2</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ProfileFooter;
