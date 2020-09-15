const reverseString = function(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

const reverseAllStrings = function(arguments) {
  let newArray = [];
  let j = 0;
  for (let i = 2; i < arguments.length; i++) {
    newArray[j] = reverseString(arguments[i]);
    j++;
  }
  return newArray;
};

reverseAllStrings(process.argv).forEach(element => console.log(element));

