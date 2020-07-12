
//  查询数据库 生成esel 表格
const {connection} = require('./DB');
var fs = require('fs');
var xlsxs = require('node-xlsx');

connection.connect();
var  sql = 'SELECT * FROM user'; //user  数据库表
//查
connection.query(sql, (err, result) =>{
        var datas=[];
        var data=['id','name','sid','phone','sex','unit','mail']; ////一行一行添加的 不是一列一列  文档的头
        datas.push(data);   
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        result.forEach( item=> {
            // console.log(item.id);
            var data1=[item.id,item.name,item.sid,item.phone,item.sex,item.unit,item.mail];
            //一行一行添加的 不是一列一列
           datas.push(data1); 
        });
        writeXls(datas);
    //    console.log(result.id);
      
});
connection.end();
function writeXls(datas) {
    var buffer = xlsxs.build([
        {
            name:'sheet1',
            data:datas
        }
    ]);
    fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});   //生成excel
}
console.log("完成");