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
    const [hrs, setHrs] = useState(0)

    const incr = async function (rno, hrs) {
        //console.log(rno)
        if (hrs === 0)
            alert("please fill the number of hours taken");
        else { const response = await axios.post('http://localhost:4000/api/incrattendance', { rno: rno, hrs: hrs }) }
        // console.log(response)
    }

    const decr = async function (rno, hrs) {
        //  console.log(rno)
        if (hrs === 0)
            alert("please fill the number of hours taken");
        else { const response = await axios.post('http://localhost:4000/api/decrattendance', { rno: rno, hrs: hrs }) }
    }

    useEffect(() => {
        const response = async function () {
            const res = await axios.get('http://localhost:4000/api/takeattendance')
            // console.log(res.data)
            setStudents(res.data)
        }
        response()
    }, [incr, decr])

    const onChange = (event) => {
        setHrs(event.target.value)
    }



    const handleClick = async function (e) {
        e.preventDefault()
        if (hrs === 0)
            alert("please fill the number of hours taken");
        else {
            const response = await axios.post('http://localhost:4000/api/doneattendance', { USN: localStorage.getItem("USN"), hrs: hrs })
        }
    }




    return (

        <>
            <h1 style={{ textAlign: "center" }} className='m-5'>Attendance Sheet</h1>
            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    <input type="number" className="form-control" name='hrs' value={hrs} onChange={onChange} />
                    <label className="form-label" htmlFor="usn">Enter the number of hours Taken </label>
                </div>
            </div>

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
                                        <IconButton onClick={() => { decr(std.rno, hrs) }}>
                                            <RemoveCircleIcon />
                                        </IconButton>
                                        {std.attendance}
                                        <IconButton onClick={() => { incr(std.rno, hrs) }}>
                                            <AddCircleIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>

            </TableContainer>
            <div className="d-flex  mx-4 mb-3 mb-lg-4">
                <button onClick={handleClick} className="btn btn-primary btn-lg">Done</button>
            </div>

            {/* )} */}
        </>
    )
}
