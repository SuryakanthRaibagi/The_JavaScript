const user ={
    userName :"surya",
    age: 23,

    welcomeMessage: function () {
        console.log(`${this.userName} , Welcome to website`);
        //to access the scope we use this keyword
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName ="sam"
// user.welcomeMessage()

// console.log(this);//it will refer empty becouse we are in a node environment
//the global object in the browser is called the window object

// Ex1
// function coffee(){
//     let userName = "surya"
//     console.log(this.userName);
// }
//O/p undefined

// Ex2
// const coffee = function(){
//     let userName = "surya"
//     console.log(this.userName);
// }

//o/p undefined


const coffee = ()=>{
    let userName = "surya"
    console.log(this);
}
// coffee()

// o/p {} all are same 


// Arrow_____________________________________
//explicite return
// const addTwo =(num1, num2)=>{
//     return num1+num2
// }

// or Implicite return

// const addTwo =(num1, num2)=>num1+num2
// or
// const addTwo =(num1, num2)=>(num1+num2)

//if i want to return an object i have to inclose it with in a ()parantices

const addTwo =(num1, num2)=>({userName:"Surya"})


console.log(addTwo(3,4));


