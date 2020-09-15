const reverseString = function(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

const reverseAllStrings = function(arg) {
  let newArray = [];
  let j = 0;
  for (let i = 2; i < arg.length; i++) {
    newArray[j] = reverseString(arg[i]);
    j++;
  }
  return newArray;
};

reverseAllStrings(process.argv).forEach(element => console.log(element));

