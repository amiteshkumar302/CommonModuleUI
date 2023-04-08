/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Modal_pop from "../../utils/user_Search_utils/modal_pop";
import * as Constants from "../../constants/temp";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import IsActive from "./user_isActive";
import APIConstants from "../../constants/APIConstants";
export default function ApiCall(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteid, setDeleteid] = useState(0);
  const [modal, setModal] = useState(false);
  const [activeId, setActiveid] = useState();
  const [delete_done, setDelete_Done] = useState(0);
  const [searchPageNum, setSearchPageNum] = React.useState(1);
  const [activeBool, setactiveBool] = useState(false);
  const [currentPage, setcurrentPage] = React.useState(1);

  // Getting token from constants/temp.js
  var token = localStorage.token;
  // console.log(token )
  function handleChange() {
    // window.location.reload(false);
    setDelete_Done(1);
  }
  let myData = {
    name: props.searchName,
    email: props.searchEmail,
    mobile: props.searchMobile,
    role: props.searchRole,
    pagination: {
      pageNum: searchPageNum,
      pageSize: 7,
    },
  };

  function Nextpagination() {
    setcurrentPage(currentPage + 1);
    setSearchPageNum(currentPage);
  }

  function PreviousPagination() {
    if (currentPage == 1) {
      setcurrentPage(1);
      setSearchPageNum(currentPage);
    } else {
      setSearchPageNum(currentPage - 1);
      setcurrentPage(currentPage - 1);
    }
  }
  function Aheadpagination() {
    setSearchPageNum(currentPage + 1);
  }
  function currentPagination() {
    setSearchPageNum(currentPage);
  }

  // useEffect(()=>{
  // setDelete_Done(5);
  // },[props.searchName])
  //Function call for Update isActive of a user
  // function onActiveChange(ActiveId) {
  //   console.log(activeId);
  //   setActiveid(ActiveId);
  // }
  // Get User API Call

  useEffect(() => {
    UserList();
    // console.log(delete_done);
    // console.log(props.searchName);
    // console.log(props.searchRole);
  }, [
    delete_done,
    props.searchName,
    props.searchEmail,
    props.searchMobile,
    props.searchRole,
  ]);
  async function UserList() {
    await fetch(
      APIConstants.BASE_URL + APIConstants.GET_USER + "/7/" + searchPageNum,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + token,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(result);
          setDelete_Done(0);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="row px-3 bg-white elevation-5 p-4 pt-2 mt-3">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
            <h2 className="h6">User List</h2>
            <Link
              className="nav-link btn btn-sm bg-secondary text-white"
              to="/AddUser"
            >
              <i className="fa fa-plus"></i> Add
            </Link>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table
                  id="example2"
                  className="table table-hover dataTable dtr-inline example2"
                  role="grid"
                >
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {items.map((item, i) => ( */}
                    {items.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <a href="user_detail.html"> {item.firstName}</a>
                        </td>
                        <td>{item.email}</td>
                        <td>{item.mobileNo}</td>
                        <td>
                          <span className="role">{item.roles[0].roleName}</span>
                        </td>
                        <th>
                          <FormControlLabel
                            control={
                              <Switch
                                onChange={() => {
                                  setactiveBool(true);
                                  handleChange();
                                  setActiveid(item.userId);
                                }}
                                checked={item.isActive ? true : false}
                              />
                            }
                          />
                        </th>
                        <td className="text-centre py-0 align-middle">
                          <Link
                            style={{ display: "inline ", padding: "0" }}
                            className="nav-link"
                            to="/UpdateUser"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add/Edit"
                            state={{ from: item.userId }}
                          >
                            <i className="fa fa-pencil text-secondary me-2"></i>
                          </Link>
                          <a
                            href="/"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Reset Password"
                          >
                            <i className="fa fa-unlock-alt text-secondary me-2"></i>
                          </a>

                          <a
                            href="/"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteresult"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            onClick={() => {
                              setDeleteid(item.userId);
                              setModal(true);
                            }}
                          >
                            <i
                              className="fa fa-trash text-secondary"
                              data-toggle="tooltip"
                            ></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="example2_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 5 of 5 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="example2_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous "
                        id="example2_previous"
                      >
                        <button
                          aria-controls="example2"
                          data-dt-idx="0"
                          tabIndex="0"
                          className="page-link"
                          onClick={() => {
                            PreviousPagination();
                            setDelete_Done(1);
                          }}
                        >
                          Previous
                        </button>
                      </li>
                      <li className="paginate_button page-item active">
                        <button
                          aria-controls="example2"
                          data-dt-idx="1"
                          tabIndex="0"
                          className="page-link"
                          onClick={() => {
                            currentPagination();
                            setDelete_Done(4);
                          }}
                        >
                          {currentPage}
                        </button>
                      </li>
                      <li className="paginate_button page-item">
                        <button
                          aria-controls="example2"
                          data-dt-idx="1"
                          tabIndex="0"
                          className="page-link"
                          onClick={() => {
                            Aheadpagination();
                            setDelete_Done(3);
                          }}
                        >
                          {currentPage + 1}
                        </button>
                      </li>
                      <li
                        className="paginate_button page-item next"
                        id="example2_next"
                      >
                        <button
                          aria-controls="example2"
                          data-dt-idx="2"
                          tabIndex="0"
                          className="page-link"
                          onClick={() => {
                            Nextpagination();
                            setDelete_Done(2);
                          }}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modal ? (
          <Modal_pop
            function={modal}
            id={deleteid}
            changemodal={(modal) => setModal(modal)}
            changestate={(delete_done) => setDelete_Done(delete_done)}
          />
        ) : (
          <></>
        )}

        {/* Modal Popup is called when delete icon is clicked */}
        {activeBool ? (
          <IsActive
            id={activeId}
            changeActive={(activeBool) => setactiveBool(activeBool)}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
