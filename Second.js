const http = require("http");
const data = require("./Data");
http
  .createServer((req, resp) => {
    resp.writeHead(404, { "Content-Type": "Applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5500);
