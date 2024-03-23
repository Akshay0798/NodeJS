const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("Request Recived");
    console.log("req method", req.method)
    console.log("req url", req.url)
    // console.log("req received")
    // console.log("Welcome to Home page")
    
    if (req.url === "/login") {
        res.write("Welcome to Login page !!");
    }else if (req.url === "/signup") {
        res.write("Welcome to signup page !!"); 
    }else {
        res.write("Welcome to Home page !!");
    }

    res.end();
});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});

// function dataControl(req,res){
//     res.write("<h1>Hello Suppu Darling</h1>");
//     res.end();
// }
// http.createServer(dataControl).listen(6969);

// http.createServer((req,res)=>{
//     res.write("<h1>Hello World</h1>");
//     res.end();
// }).listen(6969);

