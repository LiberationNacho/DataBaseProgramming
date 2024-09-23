const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('첫번쨰 값: ', (num1)=>{
    var sum = 0;
    sum += parseInt(num1);
    r1.question('두번째 값: ', (num2) =>{
        sum += parseInt(num2);
        
        console.log("두 수의 합은 " + sum + "입니다");
        rl.close();
    });
});