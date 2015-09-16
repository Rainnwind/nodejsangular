var http = require("http"),
    express = require("express"),
    app = express();

app.use("/", express.static("../web/dist/"));
app.use("/about", express.static("../web/dist/"));
app.use("/contact", express.static("../web/dist/"));


app.route("/test")
    .get(function(request, response) {
        console.log(request.query);
        response.send("nice");
    });

http.createServer(app).listen(8888);