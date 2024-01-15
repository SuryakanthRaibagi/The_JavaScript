//singleton
//Object Literals

const mySym=Symbol["key1"]//imp
const jsUser={
    name:"Surya",
    [mySym]:"key1",
    age:20,
    location:"karnataka",
    email:"surya@gamil.com",
    isLoggedIn:false,
    lastLoginDays:[
        "Monday",
        "Saturday"
    ]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);//imp

jsUser.email="suryakanth@gmail.com"
// Object.freeze(jsUser)
jsUser.email="raj@gmail.com"
// console.log(jsUser.email);


jsUser.greeting=function(){
    console.log("Hello Js user");
}
jsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
