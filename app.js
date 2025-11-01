const { error } = require("console");
const express=require("express");
const { request } = require("https");
const app=express();
 
app.use(express.json());

const users=[
    {"id":"1","name":"amrit","email":"amrit1234@kumarigmail.com"},
    {"id":"2","name":"pooja","email":"pooja834@kumarigmail.com"},
    {"id":"3","name":"nagma","email":"nagma134@kumarigmail.com"},
    {"id":"4","name":"hena","email":"hena7234@kumarigmail.com"},
];
app.get("/users",(request,response)=>{
    response.status(200).json(users);
});

app.post("/addUsers",(request,response)=>{
    const {name,email}=request.body;
    const userData={name:name,email:email};
    users.push(userData);
   
    response.status(201).json({
        "message":"create user successfully",
        "id":users.length+1,
        "name":name,
        "email":email
    })
});

app.listen(4000,(error)=>{
    if(error) throw error;
    console.log("server is runing on http://localhost:/4000")
});