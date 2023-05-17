'use strict'
console.log('running')

const jessica2={
    firstName:'faisal',
    lastName:'nazir',
    age:24,


};

const Detail1={
    name:'danish',
    lastname:'bhat',
}

const Detail2={
    age:24,
    address:'brane'
}

const Combined = Object.assign(Detail1,Detail2)
console.log(Combined)
// const jessicaCopy = Object.assign({},jessica2);
// jessicaCopy.lastName="dar";
// console.log('Before',jessica2)
// console.log('After',jessicaCopy)
  
// first class functions

// callback function
 const oneWord =function(str){
    return str.replace(/ /g,'abc').toLowerCase();
}
   oneWord("faisal")
 console.log(oneWord)