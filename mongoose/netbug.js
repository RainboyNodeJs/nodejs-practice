var http = require('http');
var cheerio = require("cheerio");


var bd = [];
var length=0;
var opt = {
	hostname:'jandan.net',
	path:'/pic/page-8660',
	method:'GET',
	headers:{
		'Host': 'jandan.net',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
		Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
		'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
		'Accept-Encoding': 'utf8',
		Cookie: '_ga=GA1.2.374819603.1456343936; Hm_lvt_fd93b7fb546adcfbcf80c4fc2b54da2c=1457830844,1458131867,1458201381,1458259480; gif-click-load=off; 3987673903=13; Hm_lpvt_fd93b7fb546adcfbcf80c4fc2b54da2c=1458260338; _gat=1',
		Connection: 'keep-alive',
		'Cache-Control': 'max-age=0'
	}	
};

var res = http.request(opt,function(res){

	res.on('data',function(data,err){
		bd.push(data);
	});
	
	res.on('end',function(){
		
		$ = cheerio.load(bd.toString());
		$(".row >.text > p").each(function(i,elements){
			//console.log('%d : %s ',i,$(this).find('img').attr('src'));
			$(this).find('img').each(function(j,elem){
				console.log("%d-%d : %s",i,j,$(this).attr('src'));
			});	
		});
		//$(".row >.text > p > img").attr('src')
	});
	
});



res.end();

