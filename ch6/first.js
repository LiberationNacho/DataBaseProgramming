const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ['abc', 'aaa', 'bbb'];

console.log("(delete 입력 시 삭제, view 입력시 모든 데이터 조회)");

function menu()
{
    rl.question('명령어를 입력하시오: ', (str) =>{

        const [a1, a2] = str.split(' ');

        if(a1 == 'exit')
        {
            rl.close();
            return;
        }
        else if(a1 == 'add')
        {
            arr.push(a2);
        }
        else if(a1 == 'delete')
        {
            arr.splice(arr.indexOf(a2), 1);

        }
        else if(a1 == 'view')
        {
            for(var j = 0; j < arr.length; j++) console.log((j + 1) + "." + arr[j]);
        }

        menu();
        // rl.close();
    });
    
}

menu();