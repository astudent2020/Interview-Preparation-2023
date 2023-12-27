//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });

//3. 使用 Promise 封装
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.mda", (err, data)=>{
        //判断如果失败
        //err为 null, 则没有错误,否则就是错误对象
        //data是读取到的数据
        if(err) reject(err);
        //使用reject改变Promise（p）状态为失败状态
        resolve(data);
    });
});

// p.then(function(value){
//     console.log(value.toString());
// }, function(reason){
//     console.log("读取失败!!");
// });
