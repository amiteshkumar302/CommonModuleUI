import APIConstants from "../constants/APIConstants";

//Function to call SignUp Api
export function AddUser(UserDetails, success, error) {
  //Fetch is used to call an Api
  fetch(APIConstants.BASE_URL + APIConstants.SIGNUP, {
    method: "POST",
    body: JSON.stringify(UserDetails),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json; charset=utf-8",
    },
  })
    //This is used to handle the response by Api
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
    //This method error in response of the Api
    .then(({ status, body }) => {
      switch (status) {
        case 400: {
          error(body.errorMessage);
          break;
        }
        case 200: {
          success(body);
          break;
        }
        case 201: {
          success(body);
          break;
        }
        case 403:{
          error(body.errorMessage);
          break;
        }
        default: {
          error("Something went wrong");
          break;
        }
      }
    });
}
