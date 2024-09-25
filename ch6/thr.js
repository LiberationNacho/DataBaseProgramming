const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ['abc', 'aaa', 'bbb'];
var size = 0;
console.log("(delete 입력 시 삭제, view 입력시 모든 데이터 조회)");

function menu()
{
    rl.question('명령어를 입력하시오: ', (str) =>{

        const [a1, a2 ,a3] = str.split(' ');

        if(a1 == 'exit')
        {
            rl.close();
            return;
        }
        else if(a1 == 'set')
        {
            size = a2;
        }
        else if(a1 == 'replace')
        {
            arr.splice(arr.indexOf(a2), 1, a3);
        }
        else if(a1 == 'add')
        {
            if(arr.length < size)
            {
                arr.push(a2);
            }
            else
            {
                console.log('최대 갯수를 초과하였습니다.')
            }
        }
        else if(a1 == 'delete')
        {
            arr.splice(arr.indexOf(a2), 1);
            // arr = arr.map(item => item == a2 ? a3 : item);

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