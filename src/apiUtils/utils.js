//All Api calling is done here
import APIConstants from "../constants/APIConstants";

var token = localStorage.token;

export async function getRoles(success, error) {

  await fetch(
    APIConstants.BASE_URL + APIConstants.GET_ACTIVE_AND_NON_DELETED_ROLES,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  )
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
        default: {
          error(body.errorMessage);
          break;
        }
      }
    });
}

export const CreateUser = async (FormData, success, error) => {
  let name = FormData.FirstName;
  let email = FormData.Email;
  let data = { name, email };
  fetch(APIConstants.BASE_URL + APIConstants.CREATE_USER, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(FormData),
  })
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
    .then(({ status, body }) => {
      switch (status) {
        case 400: {
          error(body.errorMessage);
          break;
        }
        case 201: {
          success(body);
          break;
        }
        default: {
          // error("Something went wrong");
          error(body.errorMessage);
          break;
        }
      }
    });
};

export async function UserDetails(id, success, error) {
  await fetch(
    APIConstants.BASE_URL + APIConstants.GET_USER_PROFILE_DETAILS + id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  )
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
        default: {
          error(body.errorMessage);
          break;
        }
      }
    });
}

export const UpdateUser = async (FormData, id, success, error) => {
  fetch(APIConstants.BASE_URL + APIConstants.UPDATE_USER + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(FormData),
  })
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
        default: {
          // error("Something went wrong");
          error(body.errorMessage);
          break;
        }
      }
    });
};
