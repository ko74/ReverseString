function reverseString(str) {
    str=prompt("please enter any string");
      return console.log(str.split("").reverse().join(""));
  }
  reverseString("hello");

//Another approach
  str=prompt("enter a string");
function reverseString(str) {
  
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return console.log(newString);
}
reverseString(str);

  