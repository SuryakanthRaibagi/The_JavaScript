const name="suraj"
const age=25

// console.log(name+age+"value");

console.log(`hello my name is ${name} and my age is ${age}`);//recomended syn using backticks (string interpulation)

const gamename = new String('surya-lr-com')
// console.log(gamename[1]);
// console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));//gives the element through position
console.log(gamename.indexOf('a'));//gives the position through element

const newgame=gamename.substring(0,4)
console.log(newgame);

const anothergame= gamename.slice(-8,4)// can use -Ve index n0
console.log(anothergame);

const newString1 ="    Suraj    "
console.log(newString1);
console.log(newString1.trim());//remove start and end space in string


const url="https://git.com/suryakanth%20raibagi"

console.log(url.replace('%20','-'))//replace a value in a string

console.log(url.includes('raj'))//can also ask if it has the given string raj in Url

console.log(gamename.split('-'));//split by -
