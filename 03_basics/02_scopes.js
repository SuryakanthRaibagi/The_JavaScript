// var c=300
let a =300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner:",a);

}
// console.log(a)

//Nested Scope

function one() {
    const userName = "surya"
    function two() {
        const website = "Youtube"
        console.log(userName)
    }
    //errof if you but console.log();
    two()
}
// one()

if (true){
    const userName = "Surya"
    if(userName === "Surya"){
        const website = "youtube"
        // console.log(userName + website);
    }
}

// console.log(userName);

//Imp
console.log(addone(5))
function addone(num) {
    return num+1
}

console.log(addTwo)//Example for hosting 
const addTwo = function (num) {
    return num+2
}
addTwo(5)