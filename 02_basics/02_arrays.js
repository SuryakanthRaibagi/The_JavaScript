const marval_heros =["Loki","Ironman","Moonnight"]
const Fruits =["Mango","Orange","Banana"]
// marval_heros.push(Fruits)

// console.log(marval_heros);
// console.log(marval_heros[3]);
// [ 'Loki', 'Ironman', 'Moonnight', [ 'Mango', 'Orange', 'Banana' ] ]
// [ 'Mango', 'Orange', 'Banana' ]

// const allheros=marval_heros.concat(Fruits)//given a new arra when used concat
// console.log(allheros);
            //OR
// const all_new_heros =[...marval_heros,...Fruits]//spread
// console.log(all_new_heros);

const Onemore_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const reconstruct_array = Onemore_array.flat(Infinity)
console.log(reconstruct_array);
//o/p
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("surya"));
console.log(Array.from("surya"));//converts any string to array
console.log(Array.from({name:"surya"}));//interesting

let score1=100
let score3=300
let score2=200

console.log((Array.of(score1,score2,score3)));//put all 100,200,300 in an array