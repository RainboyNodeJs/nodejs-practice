//�ݹ��ȡ�ļ�Ŀ¼�µ��ļ�
//�õ��İ���path��fs

// �߼����
/* for file in  files
 		if (files_type == dir)
				Recurse();
		else
			console.log();
		*/
		
var fs = require('fs');
var path = require('path');

//����
var str_path = "C:\\Program Files\\";

//����
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
				//��һ��Ŀ¼
				tpath += path.sep;	
				//��Ϊ�������첽���������Ի������tpath
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