//control flow

// const isUserLoggedIn = true
// const temp=41
// if (2==='2') {
//     console.log("exicute");    
// }

//comparasion
// <,>,<=,>=,==,!=
//=== type checking

// if (temp<50) {
//     console.log("temp is greater then 50");
// }

// _____________________________

// if (temp===40) {
//     console.log("temp is less then 40");
// }else{
//     console.log("temp is greater then 50");
// }


// const  score =200

// if (score>100) {
//     const power="fly"
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`);//block scope

// __________shothandf Notation

// const balance = 1000
// if(balance>500) console.log("test");

//_______________-Nesting

// if (balance < 500) {
//     console.log("Less then 500");
// } else if(balance<750){
//     console.log("Less then 500");
// }else if (balance<900){
//     console.log("Less then 900");
// }else{
//     console.log("Less then 1200");
// }


// --------------------web account

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
