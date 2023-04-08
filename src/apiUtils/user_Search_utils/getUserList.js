import APIConstants from "../../constants/APIConstants";
import * as Constants from "../../constants/temp";


 var token = localStorage.getItem('LOGIN_TOKEN');


  export const getRoles= async()=>{

    const res= 
    await fetch(APIConstants.BASE_URL + APIConstants.GET_ALL_USERS, {
  
          method: 'GET',
  
          headers: {
  
            'Content-Type': 'application/json',
  
            Authorization: `Bearer ` + token,
  
          },
  
        });
  
        return res.json();    
  
  }