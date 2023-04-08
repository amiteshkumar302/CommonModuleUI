import * as Constants from "../../constants/temp";
import React, { useEffect } from "react";
import APIConstants from "../../constants/APIConstants";

export default function IsActive(props) {
  var token = localStorage.token;

  //reset password API call only when reset is true
  useEffect(() => {
    // DELETE request using fetch with set headers
    // console.log("PUt");
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + token,
      },
    };
    fetch(
      APIConstants.BASE_URL + "/api/user/" + props.id + "/status",
      requestOptions
    ).then(() => {
      // console.log(props.id);
      props.changeActive(false);
    });
  }, [props.id]);
  return <></>;
}
