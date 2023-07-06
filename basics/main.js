"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var digit = 10;
console.log(digit);
// variable declaration & types
var sum;
var title = "learning-ts";
sum = 10;
console.log(sum, title);
/**
 * let declaration can be reinitialized, but
 * const declarations much be initialized with value.
 */
var isBeginner = true;
console.log(isBeginner);
var sentence = "Hello is ".concat(isBeginner, " world");
console.log(sentence);
var n = null;
var u = undefined;
console.log(n, u);
var numArr = [1, 2, 3];
var numArr1 = [1, 2, 3];
console.log(numArr, numArr1);
var stringArr = ["w", "q", "t"];
var stringArr1 = ["w", "q", "t"];
console.log(stringArr, stringArr1);
var tupleArr = [10, "hello", true];
var a = tupleArr[0], b = tupleArr[1], c = tupleArr[2];
console.log(a, b, c);
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
    Direction[Direction["left"] = 4] = "left";
    Direction[Direction["right"] = 5] = "right";
})(Direction || (Direction = {}));
var enumDirection = Direction.down;
console.log("enumDirection", enumDirection);
var randomValue = 10;
randomValue = true;
randomValue = "ts";
randomValue.name; // possible with any
randomValue.toUpperCase(); // with any as a type we can do this
console.log(randomValue);
var newVariable = 20;
// newVariable.toUpperCase(); // with unknown we can't perform this
var newString = "hello";
var changeNewString = newString.toUpperCase(); // this can be done by adding a type assertion
// type convertion is not allowed with type assertion
console.log(changeNewString);
// newVariable.name; // not allowed with unknown
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(newVariable)) {
    // to perform this check we can make function like this
    console.log("check", newVariable.name);
}
var multiTypes;
multiTypes = 10;
multiTypes = "multi";
multiTypes = true;
console.log(multiTypes);
