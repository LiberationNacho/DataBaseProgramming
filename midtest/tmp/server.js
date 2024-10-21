// 중간고사 시작 전 npm install express mysql2

var mySql = require('mysql2');
const express = require('express');
const app = express();

var conn = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "man06066!!",
    database: "myboard"
});

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ... ")
});
app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
app.get('/', function(req, res){

    const {title, writter} = req.query; // get, URL의 변수를 받는 것, 띄어쓰기는 하면 안됨
    // res.send(title + " " + writter);

    var query1 = `select * from post where title =  ${title}`; // 꼭 tab위에 키 쓰기 ,URL에 ""가 있어야 함

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });

    // index.html 실행
    // res.sendFile(__dirname + '/index.html');


})

