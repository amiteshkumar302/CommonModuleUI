import ApiConstants from "../constants/APIConstants";

//Function to call Reset password Api
export function ResetPassword(passwords, success, error) {
    fetch(ApiConstants.BASE_URL + ApiConstants.RESET_PASSWORD, {
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
  