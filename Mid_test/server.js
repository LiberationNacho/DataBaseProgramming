var mySql = require('mysql2');
const express = require('express');
const app = express();

var conn = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "man06066!!",
    database: "libery"
});
conn.connect();

app.listen(8080, function () {
    console.log("포트 8080으로 서버 대기중 ... ")
});

// 조회 (list)
app.get('/list', function (req, res) {
    const { author } = req.query;

    var query1 = `select * from book where author like '${author}%'`;
    conn.query(query1, (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

// 조회 (rentallist)
app.get('/rentallist', function (req, res) {
    const { notreturned } = req.query;
    if (notreturned) var query1 = `select * from rental`;
    conn.query(query1, (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

// 추가 (rental)
app.get('/rental', function (req, res) {
    const { book_id, rental_user_id } = req.query;

    var query2 = `select * from book where book_id = ${book_id}`;
    conn.query(query2, (err, rows, fields) => {
        if (err) throw err;
        var text = rows;
        var query5 = `insert into rental(title, rental_date, return_date, rental_user_id, rental_user_name) values('${text[0].title}', now(), null, ${rental_user_id}, "Lee Ingyu")`;
        conn.query(query5, (err, rows, fields) => {
            if (err) throw err;
            res.send("OK");
        });
    });
});

// 갱신 (UPDATE)
app.get('/return', function (req, res) {
    const {rental_id} = req.query;
    var query3 = `update rental set return_date = now() where rental_id = ${rental_id}`;
    conn.query(query3, (err, result) => {
        if (err) throw err;
        res.send('OK');
    });
});
