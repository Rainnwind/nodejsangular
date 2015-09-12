var http = require("http"),
    express = require("express"),
    app = express();

app.use("/", express.static("../web/"));
app.use("/q", express.static("../web/"));


app.route("/test")
    .get(function(request, response) {
        console.log(request.query);
        response.send("nice");
    });

http.createServer(app).listen(8888);