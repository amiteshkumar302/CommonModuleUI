import APIConstants from "../constants/APIConstants";

//Function to call Login Api
export function Authenticate(credentials, success, error) {
  //Fetch is used to call an Api
  fetch(APIConstants.BASE_URL + APIConstants.LOGIN, {
    method: "POST",
    body: JSON.stringify(credentials),
    accept: "/",
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
    //This method handles error in response of the Api
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
        case 403: {
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
