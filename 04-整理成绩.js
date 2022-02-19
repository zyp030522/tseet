const fs = require('fs');

fs.readFile('./tst/考试成绩.txt','utf8',function(err,dataStr) {
	// console.log(dataStr)
	if(err){
		return console.log('文件读取失败了'+ err.message)
	}
	console.log('成绩文件读取成功了')
	//先把读取的成绩数据 按照空格进行分隔
	const kongge  = dataStr.split(" ")
	//定义一个新的数组
	const arrobj = []
	//forEach() 方法对数组的每个元素执行一次给定的函数。
	kongge.forEach(zyp => {
		//replace(要被替换的符号或者值,要替换的新符号或值) 用来替换文本符号或者值
		arrobj.push(zyp.replace("=",":"))
	})
	// 定义新的变量 并用join 加换行\n
	const newstr = arrobj.join('\n')
	//把上面整理好的成绩数组存放到文件 成绩ok.txt文件中
	fs.writeFile('./tst/成绩ok.txt',newstr,function(err) {
		if(err){
			console.log('写入文件失败' + err.message)
		}
		console.log('成绩整理完成了')
	})
})