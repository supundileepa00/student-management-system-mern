import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";




export default function AllStudents() {
    const [students, setStudents] = useState([]);


    const deleteStudent = (id) => {
        axios.delete('http://localhost:8070/student/delete/'+id).then(()=>{
            window.location.reload(false);
        })
    }



    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) => {

                console.log(res.data);

                setStudents(res.data);
            }).catch((err) => {
                alert(err)
            })
        }

        getStudents();
    }, [])


    return (
        <div>

            <h1>All Students</h1>

        <div className = "container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="name">Name</th>
                        <th scope="age">Age</th>
                        <th scope="gender">Gender</th>
                        <th scope="edit">Edit</th>
                        <th scope="delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, key) => (


                        <tr key={key}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td><Link to={"student/get/"+student._id} className="nav-link active" aria-current="page" ><button type="button" class="btn btn-success">Edit</button></Link></td>

                            <td><button type="button" class="btn btn-danger" onClick={()=> deleteStudent(student._id)}>Delete</button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
            </div>

        </div>
    )
}