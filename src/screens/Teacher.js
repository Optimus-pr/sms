import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Teacher() {
  let navigate = useNavigate()
  return (

    // <>


    //    <div className="d-flex  mx-4 mb-3 mb-lg-4 " style={{"margin":"20px"}}>

    //         <Link to='/addstudent' className="btn btn-primary btn-lg mx-3">Add Student</Link>
    //         <Link to='/takeattendance' className="btn btn-primary btn-lg mx-3">Take Attendance</Link>
    //         <Link to='/login' className="btn btn-primary btn-lg mx-3">Update Marks</Link>
    //         <Link to='/addsheet' className="btn btn-primary btn-lg mx-3">Add Sheet</Link>

    //     </div>
    // </>
    //
    <div className='d-flex justify-content-center align-items-center min-vh-100 '>
      <div className='container'>
      <div className='row'>
        <div className='col'> <div class="card" style={{ "width": "18rem","height":"320px" }}>
          <div class="card-body ">
            <h5 class="card-title">Add Student</h5>
            <p class="card-text">This will help teachers to add individual student to the database.If students are added to be are in bulk then it is better to go with <strong>Add Student Sheet</strong> where a excel sheet containing student info has to be fed, based on that database will be updated </p>
            <Link to="/addstudent" class="btn btn-primary">Add Student</Link>
          </div>
        </div></div>
       
        <div className="col"><div class="card" style={{ "width": "18rem","height":"320px" }}>
          <div class="card-body">
            <h5 class="card-title">Take Attendance</h5>
            <p class="card-text">This will help teachers to take attendance it shows the list of students .Before taking attendance there is a input field where the number of hours taken has to be updated.Then click <strong>+</strong> if the student is present if not do nothing.Finally press <strong>Done</strong> </p>
            <Link to="/takeattendance" class="btn btn-primary">Take Attendance</Link>
          </div>
        </div></div>
        
        <div className="col"> <div class="card" style={{ "width": "18rem","height":"320px" }}>
          <div class="card-body">
            <h5 class="card-title">Add Student sheets</h5>
            <p class="card-text">The manuall press in the <strong>Add Student</strong> is some what automated here i.e teachers can give the excel file containing the student details in which the first row will contain all the attributes of the students as heading there after each row will contain the data.</p>
            <Link to="/addsheet" class="btn btn-primary">Add sheets</Link>
          </div>
        </div></div>
       
        <div className="col"><div class="card" style={{ "width": "18rem" ,"height":"320px"}}>
          <div class="card-body">
            <h5 class="card-title">Add marks sheet</h5>
            <p class="card-text">This aids teachers to upload marks for all students in the specified number of subjects simultaneously here they have to give a excel file containing the first row as heading for  marks of different subjects there after each row contains the corresponding data</p>
            <Link to="/addmarks" class="btn btn-primary">Add Marks</Link>
          </div>
        </div></div>
        
      </div>
    </div>
    </div>
    


  )
}
