const eventEmitter = require("events");
const fs = require("fs");

const Login = new eventEmitter();
Login.addListener("LoginEvent",(username)=>{
    const timeStamp = new Date().toLocaleString()
    console.log(`${timeStamp} - User Started Login ${username}`);
     // Save information to a file
    saveFile(`${timeStamp} - ${username} logged in`)
})
Login.emit("LoginEvent","Suppu");

function saveFile(data){
    const filepath = "suppu_info.txt"
    fs.appendFile(filepath,data,(err)=>{
        if(err){
            console.log("file not possible to create getting some error",err);
        }else{
            console.log("file created successfully");
        }
    })
}