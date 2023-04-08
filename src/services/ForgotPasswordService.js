import APIConstants from "../constants/APIConstants";

//Function to call ForgotPassword Api
export function ForgotPassword(username, success, error) {
  //Fetch is used to call an Api
  fetch(APIConstants.BASE_URL + APIConstants.FORGOT_PASSWORD, {
    method: "POST",
    body: JSON.stringify(username),
    accept: "/",
    headers: {
      "Content-type": "application/json; charset=utf-8",
      accept: "application/json; charset=utf-8",
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
    //This method handles error in response of the Api
    .then(({ status, body }) => {
      switch (status) {
        case 400: {
          error(body.errorMessage);
          break;
        }
        case 404: {
          error(body.errorMessage);
          break;
        }
        case 200: {
          success(body);
          break;
        }
        default: {
          error(body.errorMessage);
          break;
        }
      }
    });
}
