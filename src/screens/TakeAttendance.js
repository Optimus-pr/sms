import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TakeAttendance() {
    const [students, setStudents] = useState([])

    useEffect(()=>{
        const response=async function(){
            //const res=await fetch('http://localhost:4000/api/takeattendance')
            //setStudents(res.body)
            //console.log(res.body)
            //console.log(students)
            const res = await axios.get('http://localhost:4000/api/takeattendance')
            console.log(res.data)
            setStudents(res.data)
        }
        response()
    },[])
    

  return (
    
    <>
        <h1>Attendance status</h1>
        {students?.map((student)=>
            <p style={{color:'white'}} key={student._id}>{student.name}</p>
        )}
    </>
  )
}
