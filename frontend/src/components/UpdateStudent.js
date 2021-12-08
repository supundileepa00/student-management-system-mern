import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    age:'',
    gender:''
}

export default function UpdateStudent(){

    const [student, setStudent] = useState(initialValue);
    const {name, age, gender }= student;
    const { id } = useParams();
    let history = useNavigate();
    const usersUrl = 'http://localhost:8070/student/get/';


    useEffect(()=>{
        loadStudentDetails();
    }, []);

    
    const loadStudentDetails = async() =>{
        const response = await getStudent(id);
        setStudent(response.data);
    }

 

    const getStudent = async(id) =>{
        id = id || '';
        return await axios.get("${usersUrl}${id}");
    }

    const editStudent = async (id, student) => {
        return await axios.put("http://localhost:8070/student/update/"+id, student)
    }

    const editStudentDetails = async() => {
        const response = await editStudent(id, student);
        history.push('/');
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value})
    }

   


    return(
        <div className="container">

            <h3>Update Student</h3>

            <br></br>
            <hr></hr>
            <form>
                <div className="mb-3">
                    <label for="studentName" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="studentName" placeholder="Enter Student Name"       
                    onChange={(e)=>{

                        onValueChange(e);
                    
                    }} value={name}></input>

                </div>

                <div class="mb-3">
                    <label for="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
                    
                    onChange={(e)=>{

                        onValueChange(e);
                    
                    }} value={age}></input>
                </div>

                <div class="mb-3">
                    <label for="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    
                    
                    onChange={(e)=>{

                        onValueChange(e);
                    
                    }}value ={gender}></input>
                </div>


                <button className="btn btn-primary" onClick={()=> editStudentDetails()}>Update Student</button>
            </form>

            <hr></hr>

        </div>
    )
}