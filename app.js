const { error } = require("console");
const express=require("express");
const { request } = require("https");
const { parse } = require("path");
const app=express();
 
app.use(express.json());

const users=[
    {"id":1,"name":"amrit","email":"amrit1234@kumarigmail.com"},
    {"id":2,"name":"pooja","email":"pooja834@kumarigmail.com"},
    {"id":3,"name":"nagma","email":"nagma134@kumarigmail.com"},
    {"id":4,"name":"hena","email":"hena7234@kumarigmail.com"},
];
app.get("/users",(request,response)=>{
    response.status(200).json(users);
});

app.post("/addUser",(request,response)=>{
    const {name,email}=request.body;
    const userData={ "id":users.length+1,name:name,email:email};
    users.push(userData);
   
    response.status(201).json({
        "message":"create user successfully",
        user:userData
    })
});

app.put("/updateUser/:id",(request,response)=>{
    const id=parseInt(request.params.id)
    const {name,email}=request.body;
    const userData={id:id,name:name,email:email};

    const userIndex=users.findIndex((e)=>e.id===id);
    if( userData!== -1){
        users[userIndex]=userData;
        response.status(200).json({
            "message":"user update successfully",
           user:userData
        })
    }
    else{
        response.status(404).json({massage:"user not found!"})
    }
})

app.delete("/deleteUser/:id",(request,response)=>{
    const id=parseInt(request.params.id);
    const userIndex =users.findIndex((e)=>e.id===id);

    if(userIndex!=-1){
        users.splice(userIndex,1);
        response.status(200).json({massage: "Teacher deleted successfully","teachers":teachers});
    }
    else{
        response.status(404).json({massage:"user not found!"});
    }
})

app.listen(4000,(error)=>{
    if(error) throw error;
    console.log("server is runing on http://localhost:/4000")
});