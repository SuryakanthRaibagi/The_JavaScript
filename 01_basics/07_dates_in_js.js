//Dates 

let yourDate = new Date()
console.log(yourDate.toString());
console.log(yourDate.toDateString());
console.log(yourDate.toLocaleDateString());
console.log(typeof yourDate);//it is an Object


// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,3)
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-01-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());    //compare throught milisecomnds we use this method
// console.log(Date.now()/1000);//comes in decimal value so we use the following
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());


//IMP //defines an object
newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:''
})
