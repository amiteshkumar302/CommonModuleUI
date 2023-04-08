import React from 'react'
import InputBox from '../utils/InputBox'
import { useState } from 'react'
import Dropdown from '../utils/Dropdown'
import Button from '../utils/Button'
import ApiCall from '../Api utils/ApiCall'
export default function Main(props) {
 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    //function to get input from user name input box
    const OnNamechange = (event)=>{
   
        setName(event.target.value); 
    }
 //function to get input from user name input box
 const OnEmailchange = (event)=>{
   
    setEmail(event.target.value); 
}
//function to get input from user name input box
const OnMobilechange = (event)=>{
   
    setMobile(event.target.value); 
}

  return (
    <div>
        <div className="container-fluid">
    <div className="page-body-wrapper">
      
      <div className="row">

        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <nav aria-label="breadcrumb" className="pt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Search User</li>
            </ol>
          </nav>
          <div className="col-md-12 mb-3">
            <h5 className="mb-0">Serach User</h5>
            <small>Lorem ipsum dolor sit amet consectetur.</small>
        </div>
          <div className="row px-3 bg-white elevation-5 p-4 pt-2">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
              <h2 className="h6">Search</h2>

            </div>
            <div className="row">
              <div className="col-12">
                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <InputBox label = "Name" inputType ="text" id = "InputName" value = {name} onChange={OnNamechange} placeholder= "Name"/>
                    {/* <label for="" className="form-label">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="" required placeholder=""/> */}
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <InputBox label = "Email" inputType ="email" id = "InputEmail" value = {email} onChange={OnEmailchange} placeholder= "E mail"/>

                    {/* <label for="validationCustom03" className="form-label">Email </label>
                    <input type="text" className="form-control" id="validationCustom03" required/> */}
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">

                  <InputBox label = "Mobile" inputType ="number" id = "InputMobile" value = {mobile} onChange={OnMobilechange} placeholder= "Mobile Number"/>

                    {/* <label for="validationCustomphone" className="form-label">Mobile</label>
                    <div className="input-group has-validation">
                      <input type="text" className="form-control" id="validationCustomphone" name="mobile-number" aria-describedby="" required/> */}
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  {/* </div> */}
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <div className="form-group multiple-dropdown">
                    <Dropdown label = "Roles" defaultValue = "Select Roles" Value1 = "Admin" Value2 = "Manager" Value3 = "HR" Value4 = "User"/>
                      {/* <label htmlFor="inputState" class="form-label">Roles</label>
    <select id="inputState" class="form-select">
      <option selected>Select Roles</option>
      <option>Admin</option>
      <option>Manager</option>
      <option>HR</option>
      <option>User</option>
    </select> */}
                      <div className="invalid-feedback">
                        Please select a role.
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-2 mt-5">
                    <Button label = "Search" color = "#5a70c6"/>
                    {/* <button className="btn btn-primary" type="submit">Search</button>  */}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="row px-3 bg-white elevation-5 p-4 pt-2 mt-3">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
              <h2 className="h6">User List</h2>
              <a href="user.html" className="btn btn-sm bg-secondary text-white"><i className="fa fa-plus"></i> Add</a>
            </div>
            <div className="row">
              <div className="col-12">
               <div className="table-responsive">
                <table  id="example2" className="table table-hover dataTable dtr-inline example2" role="grid">
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
                    <tr>
                      <td><a href="user_detail.html">Umesh</a></td>
                      <td>umesh@gmail.com</td>
                      <td>9896778769</td>
                      <td>Manager</td>
                      <th>
                        <input type="checkbox" checked hidden="hidden" id="user1"/>
                        <label className="switch" htmlFor="user1"></label>
                      </th>
                      <td className="text-centre py-0 align-middle">
                        <a href="user.html" data-toggle="tooltip" data-placement="top" title="Add/Edit"><i className="fa fa-pencil text-secondary me-2"></i></a>&nbsp; <a href="#" data-toggle="tooltip" data-placement="top" title="Reset Password"><i className="fa fa-unlock-alt text-secondary me-2"></i></a>&nbsp; 
                        <a href="/" data-bs-toggle="modal" data-bs-target="#deleteresult" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash text-secondary" data-toggle="tooltip"></i></a>
                    </td>
                    
                    </tr>
                    <tr>
                      <td><a href="user_detail.html">Shivam</a></td>
                      <td>shivam@gmail.com</td>
                      <td>9897459693</td>
                      <td><span className='role'>Admin</span></td>
                      <th>
                        <input type="checkbox" hidden="hidden" id="user2"/>
                        <label className="switch" htmlFor="user2"></label>
                      </th>
                      <td className="text-centre py-0 align-middle">
                        <a href="user.html" data-toggle="tooltip" data-placement="top" title="Add/Edit"><i className="fa fa-pencil text-secondary me-2"></i></a>&nbsp; <a href="#" data-toggle="tooltip" data-placement="top" title="Reset Password"><i className="fa fa-unlock-alt text-secondary me-2"></i></a>&nbsp; 
                        <a href="/" data-bs-toggle="modal" data-bs-target="#deleteresult" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash text-secondary" data-toggle="tooltip"></i></a>
                    </td>
                    </tr>
                    <tr>
                      <td><a href="user_detail.html">Mohit</a></td>
                      <td>mohit@gmail.com</td>
                      <td>9999584627</td>
                      <td><span className='role'>HR</span>
                      <span className='role'>Manager</span>
                      </td>
                      <th>
                        <input type="checkbox" checked hidden="hidden" id="user3"/>
                        <label className="switch" htmlFor="user3"></label>
                      </th>
                      <td className="text-centre py-0 align-middle">
                        <a href="user.html" data-toggle="tooltip" data-placement="top" title="Add/Edit"><i className="fa fa-pencil text-secondary me-2"></i></a>&nbsp; <a href="#" data-toggle="tooltip" data-placement="top" title="Reset Password"><i className="fa fa-unlock-alt text-secondary me-2"></i></a>&nbsp; 
                        <a href="/" data-bs-toggle="modal" data-bs-target="#deleteresult" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash text-secondary" data-toggle="tooltip"></i></a>
                    </td>
                    </tr>
                    <tr>
                      <td><a href="user_detail.html">Lilly</a></td>
                      <td>lilly@gmail.com</td>
                      <td>9896778769</td>
                      <td>Manager</td>
                      <th>
                        <input type="checkbox" hidden="hidden" id="user4"/>
                        <label className="switch" htmlFor="user4"></label>
                      </th>
                      <td className="text-centre py-0 align-middle" style={{color:"#5a70c6"}}>
                        <a href="user.html" data-toggle="tooltip" data-placement="top" title="Add/Edit" ><i className="fa fa-pencil text-secondary me-2" ></i></a>&nbsp; <a href="#" data-toggle="tooltip" data-placement="top" title="Reset Password"><i className="fa fa-unlock-alt text-secondary me-2"></i></a>&nbsp; 
                        <a href="/" data-bs-toggle="modal" data-bs-target="#deleteresult" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash text-secondary" data-toggle="tooltip"></i></a>
                    </td>
                    
                    </tr>
                    <tr>
                      <td><a href="user_detail.html">Peter</a></td>
                      <td>peter@gmail.com</td>
                      <td>9999584627</td>
                      <td>HR</td>
                      <th>
                        <input type="checkbox" checked hidden="hidden" id="user5"/>
                        <label className="switch" htmlFor="user5"></label>
                      </th>
                      <td className="text-centre py-0 align-middle">
                        <a href="user.html" data-toggle="tooltip" data-placement="top" title="Add/Edit"><i className="fa fa-pencil text-secondary me-2"></i></a>&nbsp; <a href="#" data-toggle="tooltip" data-placement="top" title="Reset Password"><i className="fa fa-unlock-alt text-secondary me-2"></i></a>&nbsp; 
                        <a href="/" data-bs-toggle="modal" data-bs-target="#deleteresult" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash text-secondary" data-toggle="tooltip"></i></a>
                    </td>
                    </tr> */}
                    {/* <ApiCall /> */}
                    
                   

               <ApiCall/>
               
                
              
        </main>
        
      </div>
    </div>
  </div>
    </div>
  )
}
