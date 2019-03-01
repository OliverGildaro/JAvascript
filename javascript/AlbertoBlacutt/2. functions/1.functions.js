//A Function Declaration defines a named function
//variable without requiring variable assignment. 
function sayHello() {
  return 'Hello Word';
}
console.log(sayHello());

//A Function Expression defines a function
//as a part of a larger expression syntax
//(typically a variable assignment )
              //anonymous function
const sayGooDay = function (date) {
  return 'good Day' + date;
};
console.log(sayGooDay('oliver'));


//Arrow function, ES6
//the principal difference in a arrow function of a ES5 function.
//use the value of this in the context in which it was defined 
let arrowFunction = (date) => {
  console.log(date);
};

arrowFunction('oliver2');
// const simpleArrowFunction = () => 'goodDay';
const simpleArrowFunctionB = date => 'goodDay';
const simpleArrowFunctionC = (date, age, man) => {
  return 'goodDay' + date + age + man};

console.log(simpleArrowFunctionC(23, 32, 'oliver'));

const myArrow = (n1, n2) => n1+n2;

console.log(myArrow(4,5));

//Immediately Invoked Function Expression
//IIFE
//the variables inside the Grouping Operator () can't be
//accessed from outside, or parent scope
//in this case the global scope
const issue = 'nice';
(function () {
  console.log('I guys I am a IIFE');
  const myName = 'myName';
  function startCounters() {
  }

  function libraryAwesomeHelpers() {
  }
})();
const myName = 'hi';
console.log(myName);