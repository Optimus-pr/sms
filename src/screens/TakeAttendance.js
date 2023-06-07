import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

export default function TakeAttendance() {
    const [students, setStudents] = useState([]);
   const [std, setStd] = useState([]);
    const [hrs, setHrs] = useState(0);
    const navigate = useNavigate();
    // const std=[];



    // const incr = async function (rno, hrs) {
    //     if (hrs === 0) alert('Please fill in the number of hours taken.');
    //     else {
    //         const response = await axios.post(
    //             'http://localhost:4000/api/incrattendance',
                
    //         );
    //     }
    // };

    // const decr = async function (rno, hrs) {
    //     if (hrs === 0) alert('Please fill in the number of hours taken.');
    //     else {
    //         const response = await axios.post(
    //             'http://localhost:4000/api/decrattendance',
    //             { rno: rno, hrs: hrs }
    //         );
    //     }
    // };

    useEffect(() => {
        const fetchData = async function () {
            const res = await axios.get('http://localhost:4000/api/takeattendance');
            const resp = await axios.get('http://localhost:4000/api/takeusn');

            setStudents(res.data);
            setStd(resp.data);
        };

        fetchData();
    }, []);

    // students.map((obj)=>{
    //     std.push(obj.USN);
    // })

    const onChange = (event) => {
        setHrs(event.target.value);
    };

    const handleClick = async function (e) {
        e.preventDefault();
        if (hrs === 0) alert('Please fill in the number of hours taken.');
        else {
            const response = await axios.post(
                'http://localhost:4000/api/doneattendance',
                { USN: localStorage.getItem('USN'), hrs: hrs,arr:std}
            );
            const respons = await axios.post(
                'http://localhost:4000/api/attendancestatus',
                { USN: localStorage.getItem('USN') }
            );
            alert('Attendance updation done');
            navigate('/teacher');
        }
    };

    const [checkedStudents, setCheckedStudents] = useState({});

    const handleChange = (event, USN, rno) => {
        setCheckedStudents((prevState) => ({
            ...prevState,
            [rno]: event.target.checked,
        }));
        let array=std;
        let index = array.indexOf(USN);

        // Check if the element exists in the array
        if (index > -1) {
            // Remove the element using splice()
            array.splice(index, 1);
        }
        
        setStd(array)
        console.log(std);
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }} className="m-5">
                Attendance Sheet
            </h1>
            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    <input
                        type="number"
                        className="form-control"
                        name="hrs"
                        value={hrs}
                        onChange={onChange}
                    />
                    <label className="form-label" htmlFor="usn">
                        Enter the number of hours taken
                    </label>
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Roll No</TableCell>
                            <TableCell align="center">USN</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {students.map((std) => (
                            <TableRow
                                key={std.rno}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{std.rno}</TableCell>
                                <TableCell align="center">{std.USN}</TableCell>
                                <TableCell>{std.name}</TableCell>
                                <TableCell>
                                    {std.attendance}
                                    <Checkbox
                                        checked={checkedStudents[std.rno] || false}
                                        onChange={(event) => handleChange(event, std.USN, std.rno)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="d-flex mx-4 mb-3 mb-lg-4 justify-content-center align-items-center">
                <button onClick={handleClick} className="btn btn-primary btn-lg">
                    Done
                </button>
            </div>
        </>
    );
}
