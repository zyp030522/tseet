// 1.导入fs 文件系统模块
const fs = require('fs')

//2.调用 fs.write.File()方法 写入文件的内容
//  参数1 表示文件的存放路径
//  参数2 表示要写入的内容
//  参数3 回调函数
fs.writeFile('./tst/test2.txt','yapitheima',function(err) {
	//如果文件写入成功则err 返回的是null
	//如果文件写入失败则err 返回的是 一个错误的信息
	// console.log(err)
	
	//判断文件是否写入成功了
	if(err){
		console.log('文件写入失败了'+ err.message)
	}
	//读取成功打印
	console.log('文件写入成功了')
})