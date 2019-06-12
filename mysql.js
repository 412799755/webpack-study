var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
});

connection.connect();
var  addSql = 'INSERT INTO websites(name,url,alexa,country) VALUES(?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
connection.query(addSql,addSqlParams, function (error, results, fields) {
    if (error) throw error;
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',results);
    console.log('-----------------------------------------------------------------\n\n');
});