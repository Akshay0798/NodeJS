/*
// console.log(Buffer);
const buf1 = Buffer.from("Akshay");
//not readable..its a encoded format
console.log(buf1)
//redable
console.log(buf1.toString())

// Accessing individual bytes that outputs ASCII values
for (let i = 0; i < buf1.toString().length; i++) {
    console.log(`ASCII value of ${buf1.toString()[i]}`, buf1[i]);
    // ASCII table: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
}
*/

// Creating & writing to a buffer of size 10
// const buf2 = Buffer.alloc(10);
// buf2.write("Node.jsdb");
// console.log(buf2.toString());

const http = require("http");
const url = "http://jsonplaceholder.typicode.com/todos/1";
const req = http.get(url,(res)=>{
    try {
        res.on("data",(part)=>{
        console.log(part.toString())
    })
    } catch (error) {
        console.log("error in response")
    }
})
//if i want to catch error
req.on("error",(error)=>{
    console.log("Error in request")
})