const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ["abc", "aaa", "ddd"]
for (var i = 0; i < arr.length; i++) {
    console.log(i + 1 + '. ' + arr[i]);
}

console.log();
rl.question('바꾸고자 하는 문자열은? ', (a) => {

    rl.question('문자열을 입력하시오 : ', (b) => {
        arr[a - 1] = b;
        rl.close();

        console.log();
        console.log('===== 배열의 출력 =====');

        //console.log('배열의 길이 : ' + arr.length);
        for (var i = 0; i < arr.length; i++) {
            console.log(i + 1 + '. ' + arr[i]);
        }
    });
});