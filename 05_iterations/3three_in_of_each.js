//for of
// ["","",""]
// [{},{},{}]

const myArray=[1,2,3,4,5]

// gives the values
// for (const arr of myArray) {
//     console.log(arr);
// }
// gives the values

// const greetings="Hello Surya"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// ____Maps
const map=new Map()
map.set('In',"India")
map.set('UK','United Kingdom')
map.set('SA','South Korea')

// console.log(map);

//destructuring of map
for (const [key,value] of map) {
    // console.log(`${key}:-${value}`);
}




// ___forin

const myObject={
    js:'javascript',
    cpp:'c++',
    py:'python',
    java:'java'
}

for (const key in myObject) {
    // console.log(`${key} shutcut is for ${myObject[key]}`);

}

const myKnow=["js","rb","py","java","cpp"]
for (const key in myKnow) {
    // console.log(key);
}
const myKnow2=["js","rb","py","java","cpp"]
for (const key in myKnow2) {
    // console.log(myKnow2[key]);
}


// ____foreach

const lang=["js","rb","py","java","cpp"]
//becouse this is call back we dont use name and provide a parameter 
// lang.forEach( function (item) {
//     console.log(item);
    
// })

//or by arrow function**

// lang.forEach((item)=>{
//     console.log(item);
// })

//or **
// function hello(item){
//     console.log(item);
// }

// lang.forEach(hello)



//imp we can also have multiple parameters in index and array
// lang.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


//imp

const myAmine=[
    {
    Anime:'DBZ',
    Animename:'Goku',
    },
    {
    Anime:'JJK',
    Animename:'Sukuna',
    },
    {
    Anime:'DS',
    Animename:'Thanjiro',
    },
    
]
myAmine.forEach((item)=>{
    console.log(item.Animename);
})