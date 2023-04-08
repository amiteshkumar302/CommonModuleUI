import React, { useEffect, useState } from "react";
import Modal_pop from "../utils/modal_pop";
import APIConstants from "../constants/APIConstants";

export default function ApiCall(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [deleteid, setDeleteid] = useState(0);
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //     debugger;
  //   setUserid(Userid);
  //       }
  //    ,[Userid] )

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(APIConstants.BASE_URL + APIConstants.GET_ALL_USERS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1YzZiMDFmLTAzNjYtNGUwOC1iODExLTc5Y2Q3NDY5ZThjMSIsIm5iZiI6MTY2MjgxMDA4NywiZXhwIjoxNjYyODEyNDg3LCJpYXQiOjE2NjI4MTAwODcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.WlWc4KMjhg69o2nXB2WCSZ8xg9xbQ-2Zii2I25OevWQ",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      // <ul>
      //   {items.map((item,i) => (
      //     <li key={i}>
      //       {item.firstName} {item.lastName} {item.email} {item.isActive? "true":"false"}

      //     </li>

      //   ))}
      // </ul>
      <>
        <div className="row px-3 bg-white elevation-5 p-4 pt-2 mt-3">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
            <h2 className="h6">User List</h2>
            <a href="user.html" className="btn btn-sm bg-secondary text-white">
              <i className="fa fa-plus"></i> Add
            </a>
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
                    {items.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <a href="user_detail.html"></a>
                        </td>
                        <td>{item.userId}</td>
                        <td>{item.mobileNo}</td>

                        <td>
                          <span className="role"></span>
                        </td>

                        <th>
                          <input
                            type="checkbox"
                            hidden
                            id="user1"
                            checked={item.isActive ? "true" : ""}
                          />
                          <label className="switch" htmlFor="user1"></label>
                        </th>
                        <td className="text-centre py-0 align-middle">
                          <a
                            href="user.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add/Edit"
                          >
                            <i className="fa fa-pencil text-secondary me-2"></i>
                          </a>
                          &nbsp;{" "}
                          <a
                            href="/"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Reset Password"
                          >
                            <i className="fa fa-unlock-alt text-secondary me-2"></i>
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteresult"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            onClick={() => {
                              setDeleteid(item.id);
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
            </div>
          </div>
        </div>
        <Modal_pop
          function={modal}
          id={deleteid}
          changemodal={(modal) => setModal(modal)}
        />
      </>
    );
  }
}
