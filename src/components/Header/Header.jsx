import React from "react";
import DummyLogo from '../../img/dummy-logo.png'

function Header(){
    return (
        <>
            <div className="text-center py-4">
            <img src={DummyLogo} style={{width: "180px"}} alt="logo" />
            </div>
        </>
    )
};

export default Header;