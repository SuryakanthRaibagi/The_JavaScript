// imideatly invoke function expresion1(Imideatly exicuting functiomn) and 
// iife :helpes with andleing with global scope polution

// function coffee(){
//     console.log('Db connection');
// }
// coffee()

//Interview IMP
//iife (for function def)(for exicution in place if coffee())
(function coffee(){
    //named iife  IMP
    console.log('Db connection');
})();//we need to but ; to indicate the iife to imtimate its end 


((name)=>{
    //simple iffe
    console.log(`Db connected ${name}`);
})("Surya")
