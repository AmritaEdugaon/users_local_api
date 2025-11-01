const { error } = require("console");
const express=require("express");
const { request } = require("https");
const app=express();
 
app.use(express.json());

const users=[
    {"name":"amrit","email":"amrit1234@kumarigmail.com"},
    {"name":"pooja","email":"pooja834@kumarigmail.com"},
    {"name":"nagma","email":"nagma134@kumarigmail.com"},
    {"name":"hena","email":"hena7234@kumarigmail.com"},
];
app.get("/users",(request,response)=>{
    response.status(200).json(users);
});

app.post("/users",(request,response)=>{
    const {name,email}=request.body;
    userData=[name,email];
    users.push(userData);
    if(error){
        return response.status(500).json({
            "error":error.message
        })
    }
    response.status(201).json({
        "message":"create user successfully",
        "name":name,
        "email":email
    })
});

app.listen(4000,(error)=>{
    if(error) throw error;
    console.log("server is runing on http://localhost:/4000")
});