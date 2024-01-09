const score = 400
// console.log(typeof (score));
const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.829
// console.log(otherNumber.toPrecision(3));

const Hundred=1000000
// console.log(Hundred.toLocaleString("en-IN"));
//o/p
//number
// [Number: 100]
// 3
// 100.0
// 124
// 10,00,000

//___________________Math___________________
// console.log(Math);
// console.log(Math.abs(-4));//converts -ve to +ve only
// console.log(Math.round(4.7));//round
// console.log(Math.ceil(4.2));//round off to the greater number it it is more then .1
// console.log(Math.floor(4.9));//reverse of ceil
// console.log(Math.min(4,5,5,9,2));//minimum
// console.log(Math.max(4,5,5,9,2));//max

console.log(Math.random());//0 to 1
console.log(Math.floor(Math.random()*10)+1);//lowest value

const max=20
const min=10

console.log(Math.floor(Math.random() * (max-min+1))+min);

