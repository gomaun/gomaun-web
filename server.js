var express = require('express');
var app = express();

//routers
var postRouter = require("./routes/post")(app);
var aboutRouter = require("./routes/about")(app);

//packages
var pug = require('pug');
var path = require('path');

//set view engine to 'pug'
app.set("view engine", 'pug');
app.set("views", path.join(__dirname + "/views"));

//static files to /public
app.use("/public", express.static(path.join(__dirname + "/public")));

//set port to process.env.PORT or 3030
app.set("port", process.env.PORT || 3030);

//server listen
app.listen(app.get("port"), function(){
    console.log("gomaun express server is running at localhost:" + app.get("port"));
});
