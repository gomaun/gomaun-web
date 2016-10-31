var express = require('express');
var router = express.Router();


module.exports = function(app){
    app.use("*/public", express.static(__dirname + "./public"));
    
    app.get("/post", function(req, res){
        res.render("post/list.pug");
    });

    app.get("/post/:id", function(req, res){
        res.render("post/" + req.params.id + ".pug");
    });

}
