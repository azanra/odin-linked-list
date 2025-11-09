import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("first");
linkedList.append("second");
linkedList.append("third");
linkedList.prepend("owo");
// console.log(linkedList);
// console.log("size ", linkedList.size());
// console.log("head ", linkedList.getHead());
// console.log("tail ", linkedList.tail());
// console.log("at ", linkedList.at(5));
console.log("pop ", linkedList.pop());
