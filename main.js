function treeTraversal(inputObj, stringX, arrayY) {
  let keys = Object.keys(inputObj);
  keys.forEach((element) => {
    stringX += element;
    if (
      typeof inputObj[element] == "object" &&
      Object.keys(inputObj[element]).length > 0
    ) {
      stringX += "_";
      treeTraversal(inputObj[element], stringX, arrayY);
      return;
    }
    arrayY.push(stringX);
    return;
  });
}

exports.generateListOfStrings = (inputObj) => {
  // generateListOfStrings = (inputObj) => {
  let sltn = [];
  let someString = "";

  treeTraversal(inputObj, someString, sltn);

  console.log(sltn);
  return sltn;
};

// console.log(generateListOfStrings(obj));
