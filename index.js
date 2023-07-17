import { LinkedList } from "./src/linkedList.js";

const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.prepend(5);
myList.append(12);

console.log("--------------");

console.log(myList.toString());
console.log(`Size? ${myList.size()}`);
console.log(`Head? ${myList.head()}`);
console.log(`Tail? ${myList.tail()}`);
console.log(`At index 2? ${myList.at(2)}`);

console.log("--------------");

console.log(`Pop: ${myList.pop(0)}`);
console.log(myList.toString());

console.log("--------------");

console.log(`Contains 5? ${myList.contains(5)}`);
console.log(`Contains 12? ${myList.contains(12)}`);

console.log("--------------");

console.log(`Index of 2? ${myList.find(2)}`);
console.log(`Index of 5? ${myList.find(5)}`);
console.log(`Index of 12? ${myList.find(12)}`);

console.log("--------------");

console.log("Insert 10 at index 1");
myList.insertAt(10, 1);
console.log(myList.toString());

console.log("--------------");

console.log(`Remove at index 1? ${myList.removeAt(1)}`);
console.log(myList.toString());
