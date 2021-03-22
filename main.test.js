const { generateListOfStrings } = require("./main");

// Test fails because generateListOfStrings function implementation not complete

test("takes in input an object and returns a list of strings", () => {
  let input = {
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
  let output = [
    "nodeOne_nodeOneLeafOne",
    "leafOne",
    "nodeTwo_nodeTwoNodeOne_nodeTwoNodeOneLeafOne",
    "nodeTwo_nodeTwoLeafOne",
    "nodeTwo_nodeTwoNodeTwo_nodeTwoNodeTwoLeafOne",
  ];
  expect(generateListOfStrings(input)).toEqual(output);
});
