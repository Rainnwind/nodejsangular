var http = require("http"),
    express = require("express"),
    app = express();

app.use("*", function(request, response) {
    response.send("<div>So sweet</div>");
});


http.createServer(app).listen(8888);