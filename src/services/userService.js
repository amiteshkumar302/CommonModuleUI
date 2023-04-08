// All Business Logic is to be written here
import APIConstants from "../constants/APIConstants";
import {
  getRoles,
  CreateUser,
  UserDetails,
  UpdateUser,
} from "../apiUtils/utils";
import React, { useEffect, useState } from "react";


export const GetRolesListService = async (success, error) => {
  await getRoles(success, error);
};
export function AddUserService(FormData, success, error) {
  var RolesList = [];
  var i = 0;
  var size;
  let FirstName = FormData.FirstName;
  let LastName = FormData.LastName;
  let Email = FormData.Email;
  let MobileNumber = FormData.MobileNumber;
  let UserName = FormData.UserName;
  let selected = FormData.selected;
  size = Object.keys(selected).length;
  while (i < size) {
    var role = { roleId: selected[i].value };
    RolesList.push(role);
    i++;
  }
  let data = { FirstName, LastName, RolesList, Email, MobileNumber, UserName };
  CreateUser(data, success, error);
}

export const GetUserDetailService = async (id, success, error) => {
  await UserDetails(id, success, error);
};

export function UpdateUserService(FormData, id, success, error) {
  var RolesList = [];
  var i = 0;
  var size;
  let FirstName = FormData.FirstName;
  let LastName = FormData.LastName;
  let Email = FormData.Email;
  let MobileNumber = FormData.MobileNumber;
  let UserName = FormData.UserName;
  let selected = FormData.selected;
  size = Object.keys(selected).length;
  while (i < size) {
    var role = { roleId: selected[i].value };
    RolesList.push(role);
    i++;
  }
  let data = { FirstName, LastName, RolesList, Email, MobileNumber, UserName };
  UpdateUser(data, id, success, error);
}

export function UpdateUserHook() {
  var RolesList = [];
  var i = 0;
  var size;

  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobile] = useState("");
  const [UserName, setUserName] = useState("");
  const [selected, setSelected] = useState([]);
  const getUserDetails = (id) => {
    getUserDetailsCall(id);
  };
  const updateUserClick = (userId) => {
    UpdateUserCall(userId);
  };
  const getUserDetailsCall = async (id) => {
    var details = await UserDetails(id);
    setFName(details.firstName);
    setLName(details.lastName);
    setEmail(details.email);
    setUserName(details.userName);
    setMobile(details.mobileNumber);
    selected.splice(0, selected.length);
    details.roles.forEach((item, itemIndex) => {
      selected.push({ label: item.roleName, value: item.roleId });
    });
  };
  const UpdateUserCall = async (userId) => {
    size = Object.keys(selected).length;
    while (i < size) {
      var role = { roleId: selected[i].value };
      RolesList.push(role);
      i++;
    }
    let data = { FirstName, LastName, RolesList, userId };
    UpdateUser(data);
  };
  return {
    FirstName,
    LastName,
    selected,
    Email,
    MobileNumber,
    UserName,
    setFName,
    setLName,
    setMobile,
    setEmail,
    setUserName,
    setSelected,
    getUserDetails,
    updateUserClick,
  };
}
