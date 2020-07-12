
// 数据库 配置文件
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'text'
});

module.exports={
    connection
}