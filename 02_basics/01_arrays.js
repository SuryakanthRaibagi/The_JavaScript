//array
//shallow copy(whose copy shere the same reference point) change in original
//deep copy(whose copy shere the same reference point) changed the copy

const MyArray=[0,1,2,3,4,5,6]
const myfruits=["Apple","mangow"]

const MyArray2=new Array(1,2,3,4,5)
// console.log(MyArray[1]);//0 based indexing 

//Array Methods
//Push adds an value
//pop removes the last value in array
//unshift used to add a value at the start
//shift used to delete the 1st value in an array

// MyArray.push(6)
// MyArray.push(7)
// MyArray.pop()
// MyArray.unshift(0)
// MyArray.shift()
// console.log(MyArray.includes(9));
// console.log(MyArray.indexOf(9));



// const newArray = MyArray.join()
// console.log(MyArray);
// console.log(typeof newArray);//join has binded and convered to string 

//slice,splice
//slice:dont change the original array and given my range 
//splice changes the original array it removes the given range of elements form the original and displays the given range values

// console.log("A ",MyArray);

// const myn1=MyArray.slice(1,3)

// console.log(myn1);
// console.log("B ",MyArray);

// const myn2=MyArray.splice(1,3)
// console.log("C ",MyArray);
// console.log(myn2);

