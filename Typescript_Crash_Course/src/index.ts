// Basic Types

let id: number = 5;
let company: string = "Muwaffaq Elbadawi";
let isPublished: boolean = true;
let x: any = "anything";

x = 4;

let arr: number[] = [1, 2, 3, 4]; //like C#

// arr.push("")  throw an error

let annonArr: any[] = ["A", 1, true, 5.5];

let person: [number, string, boolean] = [1, "oo", false];

let personArr: [string, number][];

personArr = [
  ["muwaffaq", 1],
  ["moazzar", 2],
  ["moyassar", 3],
];

// Union
let Obama: number | string;
Obama = 1;
Obama = "1";

// Enum
enum Direction1 {
  UP,
  Down,
  Left,
  Right,
}

enum Direction2 {
  UP = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2.Right)

// Objects
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Jack",
  email: "jack@twt.twiter",
};

// Type Assertion
let cid: any;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, 2))

// Void
function log(message: string | number): void {
  console.log(message);
}

// log("your message!");

// Interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Jack",
  email: "jack@twt.twiter",
};

// user1.id = 6   it's a readonly property

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// Sub class
class Emplyee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const Muwaffag = new Person(1, "Muwaffaq");
const Moazzar = new Person(2, "Moazzar");
const emp = new Emplyee(5, "moyasser", "Doc");






// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}




let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["brad", "moazzar", "moyassar", "Muwaffaq"]);

strArr.push();


