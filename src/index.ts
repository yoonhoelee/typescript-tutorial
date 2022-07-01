let id:number = 5;
let company:string = 'Adam';
let isPublished: boolean = true;
let x: any = 'Hello'

let ids:number[] = [1,2,3,4];
let arr: any[] =[1, true, 'cool'];

let person: [number, string, boolean] = [1, 'Adam', false];
let employee:[number, string][]
employee=[
  [1,'Adam'],
  [2,'Brad'],
  [3,'Charlie'],
  [4,'Dan'],
]

let idx:String | number  = 22;

type User={
  id:number,
  name:string
}

const user:User={
  id:1,
  name:'Adam'
}

function addNum(x:number, y:number): number{
  return x+y
}

interface UserInterface{
  id: number,
  readonly name: string,
  age?: number
}
const user1: UserInterface={
  id: 1,
  name: 'John'
}
user1.id=5

function getArray<T>(items:T[]):T[]{
  return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4]);
