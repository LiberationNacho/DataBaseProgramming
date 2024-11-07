const express = require('express');
const app = express();
const fs = require('fs');  // 파일 시스템 모듈 추가

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중...");
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
});

app.get('/home', function(req, res){
    res.send('메인 페이지입니다.');
});

app.get('/test', function(req, res){
    // test.html 파일을 읽어서 클라이언트에 전송
    fs.readFile('test.html', 'utf8', function(err, data){
        if (err) {
            res.status(500).send('파일을 읽는 도중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});
