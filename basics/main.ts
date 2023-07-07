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

// types in functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log("add fn", add(2, 3));

// passing optional parameter
function optionalParameter(op1: number, op2?: number) {
  if (op2) {
    return op1 * op2;
  } else return op1;
}
console.log("op fn", optionalParameter(2));

// passing default parameter
function defaultParameter(dp1: number, dp2: number = 10) {
  if (dp2) {
    return dp1 * dp2;
  } else return dp1;
}
console.log("dp fn", defaultParameter(5));

// interface & type
interface Person {
  firstName: string;
  lastName?: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};
fullName(p);

interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Lab",
  makeSound() {
    console.log("Woof!");
  },
};

type Pet = {
  name: string;
  makeSound(): void;
};

type Cat = Pet & {
  breed: string;
};

const myCat: Cat = {
  name: "Miui",
  breed: "something",
  makeSound() {
    console.log("Meewww!");
  },
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Jhon",
  age: 30,
};

interface MathOpsInterface {
  (x: number, y: number): number;
}
const interfaceDemoAdd: MathOpsInterface = (x, y) => x + y;

type MathOpstype = (x: number, y: number) => number;
const typeDemoAdd: MathOpstype = (x, y) => x + y;

// class & access modifiers
class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Hello ${this.employeeName}`);
  }
}

let emp1 = new Employee("Raktim");
console.log("emp1", emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let manager1 = new Manager("Bruce");
console.log("manager1", manager1.employeeName);
manager1.delegateWork();
manager1.greet();
