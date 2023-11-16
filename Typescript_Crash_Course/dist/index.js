"use strict";
// Basic Types
let id = 5;
let company = "Muwaffaq Elbadawi";
let isPublished = true;
let x = "anything";
x = 4;
let arr = [1, 2, 3, 4]; //like C#
// arr.push("")  throw an error
let annonArr = ["A", 1, true, 5.5];
let person = [1, "oo", false];
let personArr;
personArr = [
    ["muwaffaq", 1],
    ["moazzar", 2],
    ["moyassar", 3],
];
// Union
let Obama;
Obama = 1;
Obama = "1";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Jack",
    email: "jack@twt.twiter",
};
// Type Assertion
let cid;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2))
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Jack",
    email: "jack@twt.twiter",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Sub class
class Emplyee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const Muwaffag = new Person(1, "Muwaffaq");
const Moazzar = new Person(2, "Moazzar");
const emp = new Emplyee(5, "moyasser", "Doc");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["brad", "moazzar", "moyassar", "Muwaffaq"]);
strArr.push();
