const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log("포트8080으로 서버 대기중...");
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})

app.get('/', function(req, res){
    res.send('메인 페이지입니다.');
})

/*
app.get('/test', function(req, res){
    res.send(`${test.html}`);
})
*/