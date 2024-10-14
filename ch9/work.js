const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ['abc', 'aaa', 'bbb'];

function askQuestion(query){
    return new Promise((resolve)=>{
        rl.question(query, resolve);
    });
}

async function askInput(){
    console.log("1. 조회");
    console.log("2. 추가");
    console.log("3. 삭제");
    console.log("종료는 exit");
    var input = await askQuestion('');

    if(input == 'exit')
    {
        rl.close();
        return;
    }
    else if(input == '1')
    {
        for(var j = 0; j < arr.length; j++) console.log((j + 1) + "." + arr[j]);
    }
    else if(input == '2')
    {
        var input = await askQuestion('입력: ');
        arr.push(input);
    }
    else if(input == '3')
    {
        var input = await askQuestion('삭제: ');
        arr.splice(arr.indexOf(input), 1);
    }
    askInput();
}

askInput();