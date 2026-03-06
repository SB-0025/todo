import http from "http";

const server = http.createServer((req, res) => {
  console.log("- Request Received Successfully -");

  if (req.url === "/") {
    res.end("Welcome to Home Page");
    // console.log(req.method, req.url)
  } else if (req.url === "/about") {
    res.end("Welcome to About Page");
  } else {
    res.end("404 Invalid Page.");
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server is running on port - ${PORT}`));
