var express = require('express');
var app = express();

app.set("port", process.env.PORT || 3030);

app.get("/", function(req, res){
    res.type("text/plain");
    res.send("express server started!");
    res.end();
});

app.listen(app.get("port"), function(){
    console.log("gomaun express server is running at localhost:" + app.get("port"));
});
