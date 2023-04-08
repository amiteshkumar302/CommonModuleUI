import React,{ useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Delete_User from '../Api utils/delete_User';

export default function Modal_pop(props) {
 const[id , setId] = useState();
   
  return (
    <><Modal show = {props.function} onHide={()=> props.changemodal(false)}>
    <Modal.Header closeButton >
      <Modal.Title>Delete User</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=> props.changemodal(false)}>
        No
      </Button>
      <Button variant="secondary" onClick={()=> {setId(props.id)}}>
        Yes
      </Button>
      
    </Modal.Footer>
    <p>{props.id}</p>
  </Modal>
 <Delete_User id = {id}/> 
  
  </>
  )
}
