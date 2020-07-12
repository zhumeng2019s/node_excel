
const xlsx = require('xlsx');
const {connection} = require('./DB');
let workbook = xlsx.readFile('User.xlsx'); //List就是xls文档对象

let sheetNames = workbook.SheetNames; //获取表明

let sheet = workbook.Sheets[sheetNames[0]]; //通过表明得到表对象

var data =xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json

connection.connect();
data.forEach(item=> {
            var  addSql = 'INSERT INTO testuser(name,sid,phone,sex,unit,mail) VALUES(?,?,?,?,?,?)';
            var  addSqlParams = [item.name,item.sid,item.phone,item.sex,item.unit,item.mail];
            //增
            connection.query(addSql,addSqlParams,function (err, result) {
                if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
                }        

            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:', result);        
            console.log('-----------------------------------------------------------------\n\n');  
            });
            //
    
});
connection.end();


