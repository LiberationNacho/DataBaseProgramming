const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ["abc", "aaa", "ddd"];

for(var i = 0; i < arr.length; i++)
{
    console.log((i+1) + "." + arr[i]);
}

console.log();

/*
rl.question('바꾸고자 하는 문자열은? ', (num1)=>{

    rl.question('문자열을 입력하시오: ', (str) =>{
        arr[num1 - 1] = str;
        rl.close();
        
        console.log();
        console.log('===== 배열의 출력 =====');

        for(var j = 0; j < arr.length; j++)
        {
            console.log((j + 1) + "." + arr[j]);
        }
    });
});
*/

rl.question('문자열을 추가하시겠습니까? ', (str)=>{
    if(arr.length < 3)
    {
        arr.push(str);
        for(var j = 0; j < arr.length; j++)
        {
            console.log((j + 1) + "." + arr[j]);
        }
    }
    else
    {
        console.log('최대 단어는 3개까지 입력할 수 있습니다.')
    }
    rl.close();
});