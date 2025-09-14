"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url === "/mahi") {
    res.end("hello deyam");
  }

  res.end("I love you ammu");
});
server.listen(1433);
//# sourceMappingURL=server.dev.js.map
