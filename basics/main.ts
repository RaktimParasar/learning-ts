export {};
let digit = 10;
console.log(digit);

// variable declaration & types

let sum: number;
const title: string = "learning-ts";
sum = 10;
console.log(sum, title);

/**
 * let declaration can be reinitialized, but
 * const declarations much be initialized with value.
 */

let isBeginner: boolean = true;
console.log(isBeginner);

let sentence = `Hello is ${isBeginner} world`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
console.log(n, u);

let numArr: number[] = [1, 2, 3];
let numArr1: Array<number> = [1, 2, 3];
console.log(numArr, numArr1);

let stringArr: string[] = ["w", "q", "t"];
let stringArr1: Array<string> = ["w", "q", "t"];
console.log(stringArr, stringArr1);

let tupleArr: [number, string, boolean] = [10, "hello", true];
let [a, b, c] = tupleArr;
console.log(a, b, c);

enum Direction {
  up = 2,
  down,
  left,
  right,
}
let enumDirection: Direction = Direction.down;
console.log("enumDirection", enumDirection);

let randomValue: any = 10;
randomValue = true;
randomValue = "ts";
randomValue.name; // possible with any
randomValue.toUpperCase(); // with any as a type we can do this
console.log(randomValue);

let newVariable: unknown = 20;
// newVariable.toUpperCase(); // with unknown we can't perform this
let newString: unknown = "hello";
let changeNewString = (newString as string).toUpperCase(); // this can be done by adding a type assertion
// type convertion is not allowed with type assertion
console.log(changeNewString);

// newVariable.name; // not allowed with unknown
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(newVariable)) {
  // to perform this check we can make function like this
  console.log("check", newVariable.name);
}

let multiTypes: boolean | string | number;
multiTypes = 10;
multiTypes = "multi";
multiTypes = true;
console.log(multiTypes);
