/* nodejs 打造静态服条器*/
var http = require('http');
var path = require("fs");
var fs = require('fs');

var PORT = 8000;

var server = http.createServer(function(req,res){
    //TODO
    var pathname = url.parse(req.url).pathname;
    var realpath = 'assets'+pathname;
    path.exists(realpath,function(exists){
        if(!exists){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write("This request URL"+pathname+"was not found on This server.");
            res.end();
        } else {
        
        }
        
    });
});

server.listen(PORT);

console.log("Server runing at port:%d",PORT);
