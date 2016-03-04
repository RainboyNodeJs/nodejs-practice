var http = require('http');

var options = {
	host:'www.baidu.com',
    hostname: 'www.baidu.com',  
    port: 80,  
    path: '/',  
    method: 'GET'  
};

var chunk = [];
var req = http.request(options,function(res){
	res.on('data',function(cb){
		console.log('BODY : '+cb)
	});
});

req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
}); 
req.end();
