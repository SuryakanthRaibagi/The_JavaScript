function sayMyName(){
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
}
// sayMyName//reference
// sayMyName()//exicution

// function addTwoNo(num1,num2){//(this are parameters)
//     console.log(num1+num2);
// }
// addTwoNo(1,3)//(arguments)


//--for info
// const reuslt=addTwoNo(4,4)
// console.log("result",reuslt);//the result will be undefined 


function addTwoNo(num1,num2){//(this are parameters)
    // let result= num1+num2
    // return result
    return num1+num2
}
const result= addTwoNo(3,5)
// console.log("result:",result);


function loginUserMessage(userName){
    if (!undefined)
    {
        console.log("Please end a user name");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("surya"))

//E-cart

function calculateCardPrice(...num1){//if more values use rest also called a spreed in an array
    return num1
}
// console.log(calculateCardPrice(200,400,500));

const user={
    userName:"surya",
    ages:23
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and age is ${anyobject.age}`);
    
}
// handleObject(user)
handleObject({
    userName:"raj",
    age:27
})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
    
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));