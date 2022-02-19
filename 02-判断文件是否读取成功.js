//导入 fs 模块
const fs = require('fs')

fs.readFile('./tst/test.txt','utf8',function(err,dataStr){
	//判断err为true时 则为读取失败了
	if(err){
		console.log('文件读取失败了'+ err.message)
	}
	//读取成功打印
	console.log('文件读取成功了' + dataStr)
}) 