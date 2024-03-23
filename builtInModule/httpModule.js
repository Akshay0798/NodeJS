// Http verbs to achieve CRUD operations

// C -> POST
// R -> GET
// U -> PUT/PATCH
// D -> DELETE

const http = require("http");
const url = require("url");

const PORT = 8080;

let data = [];

// Endpoints

// http://localhost:8080 -> Get all the data
// http://localhost:8080/get-item?id=abc -> Get specific item

// http://localhost:8080/add-item -> Add item
// => send data in body as json {}

// http://localhost:8080/remove-item?id=abc -> Delete specific item

const server = http.createServer((req, res) => {
  const { method, url: reqUrl } = req;
  const parsedUrl = url.parse(reqUrl, true);
  const path = parsedUrl.pathname;

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && path === "/") {
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else if (method === "GET" && path === "/get-item") {
    const id = parsedUrl.query.id;
    const item = data.find((item) => item.id === id);
    if (item) {
      res.writeHead(200);
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Item not found" }));
    }
  } else if (method === "POST" && path === "/add-item") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newItem = JSON.parse(body);
      newItem.id = Math.random().toString(36).substr(2, 9); // Generate a random ID
      data.push(newItem);
      res.writeHead(201);
      res.end(
        JSON.stringify({ message: "Item added", dataLength: data.length })
      );
    });
  } else if (req.method === "DELETE" && path === "/remove-item") {
    const id = parsedUrl.query.id;
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedItem = data.splice(index, 1)[0];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ message: "Item deleted", dataLength: data.length })
      );
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Item not found" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Invalid request" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});