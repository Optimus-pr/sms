import React from 'react'
import Navbar from '../components/Navbar'
import img from '../images/lib.jpg'
import {Link } from 'react-router-dom'

export default function Home() {
  // const img='url(../images/lib.jpg)'
  return (
    // <>
    //   <Navbar/>
    //   <div style={{
    //   backgroundImage: img,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   // Other styles if needed
    // }}>
        
        /* <div style={{textAlign:"center",margin:"100px",fontSize:"2.5rem"}}>
          <h1>WELCOME TO STUDENT MONITORING SYSTEM</h1>
        </div> */
        /* <div style={{height:'700px',width:'1500px'}}>
          <img src={img} alt="" style={{height:'100%',width:'100%',objectFit:'cover'}}/>
         
    </div>
    
        */
    // </div>

    <>
      <Navbar/>
      <div style={{height:'700px',width:'1500px'}}>
          <img src={img} alt="" style={{height:'100%',width:'100%',objectFit:'cover'}}/>
      </div>
    </>

  )
}
