/*
1.select
2.identify which event to use
3.add listener
4.triggering the event/emitting event
*/
const eventEmitter = require("events");
const fs = require("fs");

//node me as such event nahi rahate inbuild eg.click,mouseHover
//login sinario
const Login = new eventEmitter(); //creat new instance - that allows you to implement the observer pattern, where an object (in this case, Login) maintains a list of its dependents 
//event name --> start_Login
/*
Login.addListener("start_MyLogin", (username) => {
    console.log("user started Login", username);
    // Save information to a file
    saveToFile(username);

})
Login.emit("start_MyLogin", "Akshay") //triggering event

function saveToFile(username) {
    // Specify the file where you want to save the information
    const filePath = "login_info.txt";

    // Create or append to the file
    fs.appendFile(filePath, `${username} logged in\n`, (err) => {
        if (err) {
            console.error("Error saving to file:", err);
        } else {
            console.log("Information saved to file");
        }
    });
}
*/
Login.off("validating", () => {
    console.log("user getting validated");
})

Login.on("login_sucess", () => {
    console.log("user getting sucess");
})
Login.once("login_sucess", () => {
    console.log("user getting trigger once only");
})

Login.emit("login_sucess");
Login.emit("login_sucess");