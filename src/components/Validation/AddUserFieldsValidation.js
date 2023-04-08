export const validName = new RegExp(
     "^[a-zA-Z]{1,50}$"
);
export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validTelephone = new RegExp(
  "^[+]?[(]?[1-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$");

export const validUserName = new RegExp("^\\w[\\w.]{2,18}\\w$");
