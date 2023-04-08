import APIConstants from "../constants/APIConstants";
import { setItems } from "../components/Profile/ProfilePage";
import ProfilePage from "../components/Profile/ProfilePage";

var token = localStorage.getItem("LOGIN_TOKEN")
const GetUserDetailsApiCall =(id, success, error) => {
  fetch(APIConstants.BASE_URL + APIConstants.GET_USER_BY_ID + id, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer " + token,
    },
  })
    // This is used to handle the response by Api
    .then((response) => {
      return new Promise((resolve) =>
        response.json().then((json) =>
          resolve({
            status: response.status,
            body: json,
          })
        )
      );
    })
    //This method handles error in response of the Api
    .then(({ status, body }) => {
      switch (status) {
        case 400: {
          error(body.errorMessage);
          break;
        }
        case 401: {
          error(body.errorMessage);
          break;
        }
        case 200: {
          success(body);
          alert("Success!");
          break;
        }
        default: {
          error("Something went wrong");
          break;
        }
      }
    });
};
export default GetUserDetailsApiCall;
