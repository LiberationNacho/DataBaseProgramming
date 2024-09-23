/*
var msg = "hello";
msg = 123;
console.log(msg);


var myAge = 20;
var myHeight = 178.5;
console.log(myAge);
console.log(myHeight);

msg = '난'/10;
console.log(msg);

var msg = "javascript";
var myAge = '사랑하';
var myHeight = null;
var num = 5;
console.log(msg.length + myAge.trim + myHeight + num);

// Boolean(null) => false

var name;
console.log(name);
undefined

var a = 3;
var b = 2;
console.log('더하기 결과: '+(a + b));
console.log('빼기 결과: '+(a - b));
console.log('곱하기 결과: '+(a * b));
console.log('나누기/ 결과: '+(a / b));
console.log('나누기% 결과: '+(a % b));
console.log('거듭제곱 결과: '+(a ** b));

var a = 3;

console.log(a);
console.log(++a);
console.log(a++);
console.log(a);

var size1 = 1024;
var size2 = '1024';

console.log(size1 == size2);
console.log(size1 === size2);
*/

console.log(null == undefined);
console.log(null === undefined);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('프로그래밍 언어 이름을 입력하시오. : ', function(data){
    // 입력값에 대한 처리
    console.log(data);
    rl.close();
});