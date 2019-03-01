
// if (new Boolean(false)) 
// {
//     console.log('is true?');
// } 
// else 
// {
//     console.log('is false');
// }
  
var text = 'dsdsfd';
var number = -34343;
var object = {};
var array = [];
var func = function () {};

new Boolean(text).valueOf() // ??
new Boolean(number).valueOf() // ??
new Boolean(object).valueOf() // ??
new Boolean(array).valueOf() // ??
new Boolean(func).valueOf() // ??

if(text) {
console.log('text was true');
}

if(number) {
console.log('number was true');
}

if(object) {
console.log('object was true');
}

if(array) {
console.log('array was true');
}

if(func) {
console.log('function was true');
}