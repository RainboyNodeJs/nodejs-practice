var mongoose = require('mongoose');
var config = require("./config.js");
var Promise = require('bluebird');

var getAddress = function(){
	var S = 'mongdb://';
	var rs = function(str){
		if(str === null )
			return '';
		else
			return str;
	}
	return S+rs(config.username)+':'+rs(config.password)+'@'+rs(config.host)+':'+rs(config.port);
		
}


console.log(getAddress());



var db = function(){
	this.db;
	this.Schema = new mongoose.Schema({
		
	});
	this.model = mongoose.model('GirlPic',this.Schema);
}

db.prototype.init(){
	this.db=null;
	this.db = mongoose.createConnection(getAddress());
	if(this.db === null)
		return false;
	else 
		return true;
}


db.prototype.save(data){

}

// 判断是否存存
//存在更更新 oo xx tucao
//不存在, 存入是图片路径



db.prototype.update(condtion1,data,callback){
	this.model.update(condtion1,{$set:{oo:data.oo,xx:data.xx}},callback);
}

//Promise
db.prototype.find(ID,callback){
	this.find();
}

