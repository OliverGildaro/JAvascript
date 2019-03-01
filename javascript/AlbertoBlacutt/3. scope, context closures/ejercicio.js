const object = {
  vocales: ['a','e','i','o','u'],
  result: [],
  vocalCounter: function (str) {
    let vocalCounter = 0;
    for (let index = 0; index < str.length; index++) {
      const mychar = str[index];
      if(this.charContain(mychar))
      {
        vocalCounter++;
      }
    }
    this.result.push(`str: ${str} has ${vocalCounter}`);
  },
  charContain: function (char){
    return this.vocales.some((vocal)=>(vocal === char));
  }
}

object.vocalCounter('dog');
object.vocalCounter('this is a worf');
object.vocalCounter('something hapend');
object.vocalCounter('one');

console.log(object.result);