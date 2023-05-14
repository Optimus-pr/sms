import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from 'axios'
import {
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper
} from '@mui/material'

export default function TakeAttendance() {
    const [students, setStudents] = useState([])

    const incr=async function(rno){
        //console.log(rno)
        const response=await axios.post('http://localhost:4000/api/incrattendance',{rno:rno})
        // console.log(response)
    }

    const decr=async function(rno){
      //  console.log(rno)
        const response=await axios.post('http://localhost:4000/api/decrattendance',{rno:rno})
    }

    useEffect(() => {
        const response = async function () {
            const res = await axios.get('http://localhost:4000/api/takeattendance')
           // console.log(res.data)
            setStudents(res.data)
        }
        response()
    }, [incr,decr])

   


    return (

        <>
            <h1 style={{ textAlign: "center" }} className='m-5'>Attendance Sheet</h1>

            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Roll No</TableCell>
                            <TableCell align='center'>USN</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((std) => {
                                return (<TableRow
                                    key={std.rno}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{std.rno}</TableCell>
                                    <TableCell align='center'>{std.USN}</TableCell>
                                    <TableCell>{std.name}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={()=>{decr(std.rno)}}>
                                            <RemoveCircleIcon />
                                        </IconButton>
                                        {std.attendance}
                                        <IconButton onClick={()=>{incr(std.rno)}}>
                                            <AddCircleIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>

            </TableContainer>

            {/* )} */}
        </>
    )
}
