import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Delete_User from "../../apiUtils/user_Search_utils/delete_User";
import { Link } from "react-router-dom";
import ApiCall from "../../apiUtils/user_Search_utils/ApiCall";

export default function Modal_pop(props) {
  const [Id, setId] = useState("0");

  function refreshPage() {
    
    props.changemodal(false);
    props.changestate(1);
    // console.log(Id);
    // console.log("Modal Refresh ")
  }
  useEffect(()=>{
    setId(props.id);
  })

  return (
    <>
      <Modal show={props.function} onHide={() => props.changemodal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.changemodal(false)}>
            No
          </Button>
          <Button
            style={{ backgroundColor: "Blue" }}
            variant="secondary"
            onClick={() => {
              
              refreshPage();
            }}
          >
            {/* {props.id} */}
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Delete_User id={Id} />
    </>
  );
}
