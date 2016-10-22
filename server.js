var express = require('express');
var app = express();

var teaserRouter = require("./routes/teaser")(app);

var pug = require('pug');
var path = require('path');


app.set("view engine", 'pug');
app.set("views", path.join(__dirname + "/views"));

app.set("port", process.env.PORT || 3030);

app.listen(app.get("port"), function(){
    console.log("gomaun express server is running at localhost:" + app.get("port"));
});
