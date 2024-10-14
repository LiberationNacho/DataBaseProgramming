/*
var pro = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('success');
    }, 1000);
});

async function test() {
    var result = await pro();
    console.log('result', result);
}

// test();
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ['abc', 'aaa', 'bbb'];
var size = 0;

function askQuestion(query){
    return new Promise((resolve)=>{
        rl.question(query, resolve);
    });
}

/*
function askInput(){
    askQuestion('단어를 입력하세요 (종료 : exit) : ').then(input => {
        if(input == 'exit'){
            rl.close();
        }
        else{
            askInput();
        }
    });
}
*/


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
        arr.push(a2);
    }
    else if(input == '3')
    {
        var input = await askQuestion('삭제: ');
        arr.splice(arr.indexOf(input), 1);
    }
    askInput();
}

// function askInput(): Promise<void>

askInput();