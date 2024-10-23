// 중간고사 시작 전 npm install express mysql2

var mySql = require('mysql2');
const express = require('express');
const app = express();

var conn = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "man06066!!",
    database: "" // myboard로 이름 지으면 감점, 꼭 특정 DB이름으로 만들기
});
conn.connect();

app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중 ... ")
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})

app.get('/', function(req, res){

    const {title, writter} = req.query; // get, URL의 변수를 받는 것, 띄어쓰기는 하면 안됨
    // res.send(title + " " + writter);

    var query1 = `select * from post where title = '${title}'`; // 꼭 tab위에 키 쓰기

    conn.query(query1, (err, rows, fields) =>
    {
        if(err) throw err;
        res.send(rows);
    });

    // index.html 실행
    // res.sendFile(__dirname + '/index.html');
})


/*
// 데이터베이스 생성
use 데이터베이스 명;

// 테이블 생성
create Table 테이블 명(

);

// 조회
var query = `select * from 테이블명 where title = '${title}'`; // 꼭 tab위에 키 쓰기
ex) select * form post;
SELECT * FROM post WHERE (title = 'someTitle' OR writer = 'someWriter') AND createday > '2024-01-01'order by 필드명 DESC limit 출력할 데이터의 개수;
desc: 내림차순


// 추가
var query = `insert into 테이블명(필드명...) values (입력할 값...)`; // 꼭 tab위에 키 쓰기

// 갱신
var query = `update 테이블명 set 수정할 필드 = '수정할 내용' where id = '${id}'`; // 꼭 tab위에 키 쓰기
ex) update post set writer = 'henac' where id = '2';

// 갱신2
-> 업데이트 시간 추가
update post set writer = 'henac', updateday = now() where id = '2';


// 삭제
var query = `delete from 테이블명 where title = '${title}'`; // 꼭 tab위에 키 쓰기
*/
/*

create table rental(
rental_id int(11) not null Auto_increment,
title text not null,
rental_date text null,
return_date text null,
rental_user_id int(11) null,
rental_user_name text null,
primary Key(rental_id)
);


insert into book(book_id, title, author, isbn) values (1, "알고리즘", "Kim Dongsu", "978-0262033848");
insert into book(book_id, title, author, isbn) values (4, "클린코드", "Kim Kildong", "978-0132350884");
insert into book(book_id, title, author, isbn) values (8, "프로그래머", "Kim Taegu", "978-0201616224");

insert into rental(title, rental_date, return_date, rental_user_id, rental_user_name) values ("알고리즘", "2024-10-10", null, 1, "Lee Ingyu");
insert into rental(title, rental_date, return_date, rental_user_id, rental_user_name) values ("프로그래머", "2024-10-20", null, 1, "Lee Ingyu");
*/