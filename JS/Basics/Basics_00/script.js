// ----------------------------------------- VARIABLE DECLARATION

var globalVar = "Random Name";
let scopedVar = 23;
const CONSTANT = 3.1416; //use all uppercase for constants

// ----------------------------------------- DATA TYPES

//boolean
let isEverythingOk = true;
let areWeGonnaFail = false;

//number
let wholeNumber = 42;
let withDecimals = 9.81;

//string
let usingDoubleQuotes = "I'm  a string" + wholeNumber;
let usingSingleQuotes = "I'm another string";
let usingBackticks = `I'm third string and I can use "double quotes" and 'single quotes' as well as variables: ${areWeGonnaFail}`; //most flexible

//null
let emptyValue = null;

//undefined
let nonExistent = undefined;

//array - list
let emptyArray = [];
let numbersArray = [1, 2, 3, 4, 5, 6, 7];
let weirdArray = [true, 1, "String", null, undefined, [], {}, () => {}];

//object - dictionary
let emptyObject = {};
let randomData = {
  userId: 19231203,
  name: "Julia",
  username: "cheeseloudmouth",
  admin: false,
  permissions: ["create", "delete", "update"],
  whatAmI: () => {
    console.log(`I'm a property`);
  },
};

randomData.whatAmI();

// ----------------------------------------- FUNCTIONS

//named
function namedFunction() {
  console.log("Executed via named function");
}

//anonymous
let anonymousFunction = function () {
  console.log("Executed via anonymouys function");
};

//arrow
let arrowFunction = () => {
  console.log("Executed via arrow function");
};

// execute or call
namedFunction();
anonymousFunction();
arrowFunction();

//---reference
// namedFunction
// anonymousFunction
// arrowFunction
