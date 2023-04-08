import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Constants from "../../constants/temp";
import APIConstants from "../../constants/APIConstants";
export default function Delete_User(props) {
  const [status, setStatus] = useState();
  var token = localStorage.token;
  useEffect(() => {
    // DELETE request using fetch with set headers
    console.log("Delete");
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + token,
      },
    };
    fetch(
      APIConstants.BASE_URL + APIConstants.DELETE_USER + props.id,
      requestOptions
    ).then(() => {
      setStatus("Delete successful");
      // console.log(status);
      // console.log(props.id);
    });
  }, [props.id]);

  return <></>;
}
