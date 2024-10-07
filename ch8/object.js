/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};


rl.question("찾을 단어를 입력하세요: ", function(key){
    let word = key;
    console.log(dic[word]);
    rl.close();
});


rl.question("찾을 단어를 입력하세요: ", function(obj){
    let basket = {
        [obj]:"1000원"
    }
    console.log(basket[obj]);
    rl.close();
});
*/


let user = {
    id : "jamsu",
    pw : "1111",
    name : "1ch",
    mobile : "010-1111-1111",
    country : "대한민국"
}

for (let info in user){
    console.log(`${info} : ${user[info]}`)
}


const arr1 = ['C#', 'javascript'];
const arr2 = ['python', 'react', 'c++'];
const arr3 = [...arr1, ...arr2];

console.log(arr3);