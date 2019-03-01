


//so what is hoisting
/*
   Function declarations are always
   moved (hoisted) to the top of their JavaScript scope
   but Assignment Expressions don’t
*/

//ejemplo1
/* in this case hoisting only applies to function declarations */
function petFactory() {
  return getDog();
    function getDog() {
        return 'brian';
    }

    function getDog() {
        return 'ayudanteDeSanta';
    }
}
console.log('PET::: => ', petFactory()); 


//ejemplo2
function petFactory() {
  var getDog = function () {
      return 'brian';
  };
  return getDog();
  
  var getDog = function () {
      return 'ayudanteDeSanta';
    };
}
console.log(petFactory()); 

//ejemplo3, en funciones anonimas no se realiza la declaracion de las funciones antes del return
function petFactory() {
    return getDog();
  
    var getDog = function () {
        return 'brian';
    };
  
    var getDog = function () {
      return 'ayudanteDeSanta';
    };
  } 
  console.log('PET:::: =>', petFactory());
  
  
//ejemplo4
function petFactory() {
  function getDog() {
      console.log(issue, '::: Oh oh a issue');
      return 'brian';
  }
  const issue = 'the dog is sick';

  return getDog();//debe haber este return pues se devuelve 'brian
}

console.log('PET:::: =>', petFactory());
