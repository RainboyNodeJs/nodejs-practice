var http = require('http');

var server = http.createServer(function(req,res){
		res.writeHead(200,{"Content-type":"text/plain",Server:"GSE"});
		res.write("hello world!");
		res.end();
	}
);

server.listen(8800);

console.log("nodejs web is lisening 8800 port!");