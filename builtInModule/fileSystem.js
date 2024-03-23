const fs = require("fs");

//! Step1-create a directory in async and sync way
console.log("start");
//? Creating a directory in Asynchonous way
// fs.mkdir("./new", (error) => {
//     console.log("Inside module");
//     if (error) {
//         console.log("Error : ", error.message)
//     } else {
//         console.log("directory created successfully");
//     }
// })

//? Creating a directory in Synchronous way
// try {
//     fs.mkdirSync("./newSync");
//     console.log("directory created successfully");
// } catch (error) {
//     console.log("Directory Already Exist")
//     console.log("Error : ",error.message);
// }

//? Delete a dir
// fs.rmdir("./newSync",(err)=>{
//     if(err){
//         console.log("Error : ",err.message);
//     }else{
//         console.log("Directory Deleted");
//     }
// })

//? it rename fule
// fs.rename('./new', './newName', (err) => {
//     if (err) {
//         console.error("Error renaming file:", err);
//     } else {
//         console.log("File renamed successfully");
//     }
// });

//? it check directory is avaliable or not if not it create 
// fs.mkdir('./newDirectory', { recursive: true }, (err) => {
//     if (err) {
//         console.error("Error creating directory:", err);
//     } else {
//         console.log("Directory created successfully");
//     }
// });

// it check in dir any file exist or not
// fs.readdir('./newDirectory', { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.error("Error reading directory:", err);
//     } else {
//         console.log("Files in directory:", files);
//     }
// });

//? provides information about the file or directory such as size, type, and permissions.
// fs.stat('./newDirectory', (err, stats) => {
//     if (err) {
//         console.error("Error getting file/directory stats:", err);
//     } else {
//         console.log("Stats:", stats);
//     }
// });

//? 
// const readStream = fs.createReadStream('./newDirectory');
// readStream.on('data', (chunk) => {
//     console.log("Received data:", chunk);
// });
// readStream.on('end', () => {
//     console.log("Reading finished");
// });

//? create file and write data in it
const writeStream = fs.createWriteStream('./createWriteStream.txt');
writeStream.write("My Name is Akshay");
writeStream.end();
console.log("Data written to file");

console.log("End");