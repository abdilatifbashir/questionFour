const input = {
  nodeOne: {
    nodeOneLeafOne: "",
  },
  leafOne: "",
  nodeTwo: {
    nodeTwoNodeOne: {
      nodeTwoNodeOneLeafOne: "",
    },
    nodeTwoLeafOne: "",
    nodeTwoNodeTwo: {
      nodeTwoNodeTwoLeafOne: "",
    },
  },
};

const output = [
  "nodeOne_nodeOneLeafOne",
  "leafOne",
  "nodeTwo_nodeTwoNodeOne_nodeTwoNodeOneLeafOne",
  "nodeTwo_nodeTwoLeafOne",
  "nodeTwo_nodeTwoNodeTwo_nodeTwoNodeTwoLeafOne",
];

exports.generateListOfStrings = (inputObject) => {
  const listOfStrings = [];
  let string = "";

  let keys = Object.keys(inputObject);
  keys.forEach((element) => {
    string += element;
    if (typeof inputObject[element] === "object") {
      string += "_";
      //  start recursion here
      let keys = Object.keys(inputObject[element]);
      keys.forEach((el) => {
        string += el;
        if (typeof inputObject[element][el] === "object") {
          string += "_";
          let keys = Object.keys(inputObject[element][el]);
          keys.forEach((e) => {
            string += e;
            return;
          });
          listOfStrings.push(string);
          string = "";
        }
        listOfStrings.push(string);
        string = "";
        return;
      });
      listOfStrings.push(string);
      string = "";
      return;
    }
    listOfStrings.push(string);
    string = "";
    return;
  });
  console.log(listOfStrings);
  return listOfStrings;
};
