const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var max = 0;
var min = 1000;

console.log("(delete 입력 시 삭제, view 입력시 모든 데이터 조회)");

function menu()
{
    rl.question('? ', (str) =>{

        if(str == '-1')
        {
            rl.close();
            return;
        }
        const [a1, a2] = str.split(/[\+\-\*\/]+/); // str.split(/[\+\-\*\/]+/) // 정규식을 사용하면 바로 분리 가능
        a = parseInt(a1);
        b = parseInt(a2);

        if(str.indexOf('+') != -1)
        {
            console.log(a+b);
        }
        else if(str.indexOf('-') != -1)
        {
            console.log(a-b);
        }
        else if(str.indexOf('*') != -1)
        {
            console.log(a*b);
        }
        else if(str.indexOf('/') != -1)
        {
            console.log(a/b);
        }                

        menu();
        // rl.close();
    });
    
}

menu();