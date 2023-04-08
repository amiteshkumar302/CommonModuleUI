export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
// export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$");
export const validPassword = new RegExp("^[a-zA-Z0-9._@/$]+$");

export const validUserName = new RegExp("[^ ]+");
// export const validUserName = new RegExp("^(?=.*[A-Za-z]).{8}$");
