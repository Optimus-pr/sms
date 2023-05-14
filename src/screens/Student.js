import React from 'react'
import {Stack,Button} from '@mui/material'

export default function Student() {
    const USN=window.sessionStorage.getItem("USN")
    const rno=window.sessionStorage.getItem("rno")
    const name=window.sessionStorage.getItem("name")
    const attendance=window.sessionStorage.getItem("attendance")

  return (
    <>
                {/* <h1>hi {name} !!</h1> */}
            
                <p >{USN}</p>
                <p >{rno}</p>
                <p >{name}</p>
                <p >{attendance}</p>


               
            
    </>
   
    
  )
}
