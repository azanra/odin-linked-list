import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("first");
linkedList.append("second");
linkedList.append("third");
linkedList.prepend("owo");
console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList);
