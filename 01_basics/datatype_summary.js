// Primitive Datatypes
//7 Types : String,Number,Boolean,null,undefined,Symbol  and BigInt

/*JavaScript is a dynamically typed language, which means that data types of variables are
 determined by the value they hold at runtime and can 
change throughout the program as we assign different values to them.*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //typrof is Objest

// let userEmail = undefined;
//or
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const BigInt = 1n


// Reference Datatype(Non Primitive) all object but function is called object Function
// Array, Objects, Function

const games = ["BGMI", "Coc" ,"SubwaySurfer"]
let myObj = {
    name:"surya",
    age:22,
}


const myFunction = function(){
    console.log("hello surya");
}

console.log(typeof myFunction);
