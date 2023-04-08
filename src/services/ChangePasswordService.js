import APIConstants from "../constants/APIConstants";

//Function to call Change password Api
export function ChangePassword(passwords, success, error) {
  fetch(APIConstants.BASE_URL + APIConstants.CHANGE_PASSWORD, {
    method: "POST",
    body: JSON.stringify(passwords),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
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
    .then(({ status, body, error }) => {
      switch (status) {
        case 400: {
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
