"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// types in functions
function add(num1, num2) {
    return num1 + num2;
}
console.log("add fn", add(2, 3));
// passing optional parameter
function optionalParameter(op1, op2) {
    if (op2) {
        return op1 * op2;
    }
    else
        return op1;
}
console.log("op fn", optionalParameter(2));
// passing default parameter
function defaultParameter(dp1, dp2) {
    if (dp2 === void 0) { dp2 = 10; }
    if (dp2) {
        return dp1 * dp2;
    }
    else
        return dp1;
}
console.log("dp fn", defaultParameter(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne",
};
fullName(p);
var myDog = {
    name: "Buddy",
    breed: "Lab",
    makeSound: function () {
        console.log("Woof!");
    },
};
var myCat = {
    name: "Miui",
    breed: "something",
    makeSound: function () {
        console.log("Meewww!");
    },
};
var user = {
    name: "Jhon",
    age: 30,
};
var interfaceDemoAdd = function (x, y) { return x + y; };
var typeDemoAdd = function (x, y) { return x + y; };
// class & access modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Raktim");
console.log("emp1", emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Bruce");
console.log("manager1", manager1.employeeName);
manager1.delegateWork();
manager1.greet();
