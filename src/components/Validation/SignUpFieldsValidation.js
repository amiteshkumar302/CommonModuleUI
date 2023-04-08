// export const validFirstName = new RegExp("^[a-z ,.'-]+$");
// export const validFirstName = new RegExp("/^[a-z ,.'-]+$/i");
// export const validLastName = new RegExp("/^[a-z ,.'-]+$/i");

export const validFirstName = new RegExp("^[a-zA-Z0-9 ]+$");
export const validLastName  = new RegExp("^[a-zA-Z0-9 ]+$");

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validTelephone = new RegExp(
  "^[+]?[(]?[1-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$");

export const validUserName = new RegExp("[^ ]+");
