import React, { useState } from "react";
import axios from "axios";


//in JSX all the html tags should be closed

//component also can be exported at the begining
export default function AddStudent() {

    //declaring variables
    //set name is used to assign values for name
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    //pass the event as 'e'
    function sendData(e){
        e.preventDefault();

        const newStudent = {
            name,
            age,
            gender
        }

        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
           // alert("Student Added!!")
            window.location.reload(false);
            

        }).catch((err)=>{
            alert(err)
        })

    }

    return (

        <div className="container">

            <br></br>
            <hr></hr>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="studentName" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="studentName" placeholder="Enter Student Name" 
                    
                    onChange={(e)=>{

                        setName(e.target.value);
                    
                    }}></input>

                </div>

                <div class="mb-3">
                    <label for="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
                    
                    onChange={(e)=>{

                        setAge(e.target.value);
                    
                    }}
                    
                    ></input>
                </div>

                <div class="mb-3">
                    <label for="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    
                    
                    onChange={(e)=>{

                        setGender(e.target.value);
                    
                    }}
                    
                    ></input>
                </div>


                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

            <hr></hr>

        </div>
    )
}
