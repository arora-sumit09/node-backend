const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request Made");
  // console.log(req.url , req.method);

  // res.setHeader("Content-Type" , "text/html");
  // res.write("<p>Hey there wts up guys</p>");
  // res.write("<h1>I am sumit</h1>");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location" , "/about");
      break;

    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

  // res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
