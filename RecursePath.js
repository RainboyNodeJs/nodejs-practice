//递归读取文件目录下的文件
//用到的包，path，fs

// 逻辑设计
/* for file in  files
 		if (files_type == dir)
				Recurse();
		else
			console.log();
		*/
		
var fs = require('fs');
var path = require('path');

//数据
var str_path = "C:\\Program Files\\";

//函数
function RecurseReadFile(str_path) {
fs.readdir(str_path, function(err,files){

	if (err) throw err;
	if(files === null)
		console.log("wrong path:"+str_path);
	else{
		files.forEach(function(file){
			//console.log(file);
			var tpath = str_path+file;
			var stats = fs.statSync(tpath);
			if(stats.isDirectory()){
				//是一个目录
				tpath += path.sep;	
				//因为这里是异步函数，所以会先输出tpath
				debugger;
				RecurseReadFile(tpath);
				console.log(tpath);
			} else {
				//console.log(tpath);
			}
				
		});
	}
});

}

RecurseReadFile(str_path);