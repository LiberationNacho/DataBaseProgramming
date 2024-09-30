const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [];
console.log("(remove 입력 시 삭제, view 입력시 모든 데이터 조회)");

function menu()
{
    rl.question('? ', (str) =>{

        const [a1, a2] = str.split(' ');
        var inpt = parseInt(a2);

        if(a1 == 'exit')
        {
            rl.close();
            return;
        }
        else if(a1 == 'sum')
        {
            var sum = 0;
            for(var j = 0; j < arr.length; j++) sum += arr[j];
            console.log(sum);
        }
        else if(a1 == 'add')
        {
            arr.push(inpt);
            for(var j = 0; j < arr.length; j++) console.log(arr[j]);
        }
        else if(a1 == 'remove')
        {
            arr.splice(arr.indexOf(inpt), 1);
            // arr = arr.map(item => item == a2 ? a3 : item);
            for(var j = 0; j < arr.length; j++) console.log(arr[j]);

        }
        else if(a1 == 'avg')
        {
            var sum = 0;
            for(var j = 0; j < arr.length; j++) sum += arr[j];

            sum /= arr.length;
            console.log(sum);
        }

        menu();
        // rl.close();
    });
    
}

menu();