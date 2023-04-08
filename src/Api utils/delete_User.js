import React, { useEffect, useState } from 'react'
import APIConstants from '../constants/APIConstants';

export default function Delete_User(props) {

const [status , setStatus] = useState();
   
useEffect(() => {
// DELETE request using fetch with set headers

const requestOptions = {
 method: 'DELETE',
  headers: { 
 "Content-Type": "application/json",
 Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1YzZiMDFmLTAzNjYtNGUwOC1iODExLTc5Y2Q3NDY5ZThjMSIsIm5iZiI6MTY2MjgxMDA4NywiZXhwIjoxNjYyODEyNDg3LCJpYXQiOjE2NjI4MTAwODcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.WlWc4KMjhg69o2nXB2WCSZ8xg9xbQ-2Zii2I25OevWQ',
 
 }
 };
// fetch(`https://localhost:7227/api/user/${props.id}`, requestOptions)
fetch(APIConstants.BASE_URL + APIConstants.DELETE_USER + props.id, requestOptions)
 .then(() => setStatus('Delete successful'));
}, [{}]);



  return (
    <></>
  )
}



