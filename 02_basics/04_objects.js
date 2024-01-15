const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedin=false

// console.log(tinderUser);

const regularUser={
    email:"surya@gmail.com",
    fullname:{
            userfullname:{
            firstname:"surya",
            lastname:"raibagi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 = {obj1,obj2}//object within an object 2object in 1 object

const obj3=Object.assign({},obj1,obj2)//copy one or more objects to a sorce objects to target Object.
//{} acts as an empty target objects
// console.log(obj3);
//or
const obj4={...obj1,...obj2}//spreed operator
// console.log(obj4);


//database will mostly send array of objects

const users=[
    {
        id:1,
        email:"surya.com"
    },
    {
        id:1,
        email:"surya.com"
    },
    {
        id:1,
        email:"surya.com"
    },    {
        id:1,
        email:"surya.com"
    },
    {
        id:1,
        email:"surya.com"
    },
]

//TAKE ALL KEYS AND VALUES AND PUT IT IN AN ARRAY
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));
//O/P
// [ 'id', 'name', 'isLoggedin' ]
// [ '123abc', 'Sammy', false ]
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedin', false ] ]

//de-structring ---Imp used in react js

const course={
    courseName:"Js",
    price:"99",
    courseinstructor:"surya"

}

const {courseinstructor:instructor}=course

// console.log(instructor);


// //React consept//destructer 
// const navbar=({company})=>{

// }
// navbar(company="surya")


// API
//json
// {
//     "name":"surya",
//     "courseName":"js",
//     "prise":"Fres"
// }

