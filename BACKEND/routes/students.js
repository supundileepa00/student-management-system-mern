const router = require("express").Router();
let Student = require("../models/Student.js");


//add
//http://lacalhost:8070/student/add
router.route("/add").post((req,res) => {
    
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    //then--> check the data is added or not
    newStudent.save().then(()=>{
        //give response to frontend in jason format 
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//get all details
router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})


//http://lacalhost:8070/student/update/hhj34b5iafo
//update
//post can be also used
//async await function
router.route("/update/:id").put(async(req, res)=>{
    //req.param - fetch the id from url which is coimg as parameter in url
    let userId = req.params.id;

    //get values from frontend
    //destructure
    //Also can use method used in add
    const {name,age,gender} = req.body;
    
    const updateStudent = {
        name,
        age,
        gender
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})

//delete
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})

//search
router.route("/get/:id").get(async (req, res) =>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status: "User fetched", student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})


module.exports = router;

