var http = require("http"),
    express = require("express"),
    app = express();

app.use("/", express.static("../web/"));


http.createServer(app).listen(8888);