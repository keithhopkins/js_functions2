var people = {'Chuck':22,
              'Brian':46,
              'Mike': 60,
              'Kaylyn':26};
function oldestPerson(obj){
  var oldest=0;
  var person;
  for(var name in obj){
    if(obj[name]>oldest){
      oldest=obj[name];
      person=name;
    }
  }
  return person;
}
console.log(oldestPerson(people));

function longestWord(str){
  var currentWord="";
  var reg = /\W/;
  var array = str.split(reg);
  console.log(array);
  for(var i=0;i<array.length;i++){
    if(array[i].length>currentWord.length){
      currentWord=array[i];
    }
  }
  return currentWord;
}
console.log(longestWord("This!!?!?! is!?!?!? the?!?! longest./! word!!!!?!?!?!?!"));

function factorial(num){
  var total=1;
  for(var i=num;i>0;i--){
    total*=i;
    console.log("num",i);
    console.log("current total",total);
  }
  return total;
}
var rand = Math.floor(Math.random()*100);
console.log(rand);
console.log(factorial(rand));

function palindrome(str){
  var reverse = '';
  var newstr = str.split(/\W/);
  newstr = newstr.join('');
  for(var i=newstr.length-1;i>=0;i--){
    reverse+=newstr[i];
  }
  return reverse===newstr;
}
console.log('do geese see god');
console.log(palindrome('do geese see god'));
