import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      const node = new Node();
      node.value = value;
      this.head = node;
    } else {
      let temp = this.head;
      while (temp !== null) {
        if (temp._nextNode === null) {
          const node = new Node();
          node.value = value;
          temp._nextNode = node;
          break;
        }
        temp = temp._nextNode;
      }
    }
  }
  prepend(value) {
    const temp = this.head;
    const node = new Node();
    node.value = value;
    this.head = node;
    this.head.nextNode = temp;
  }
  size() {
    let counter = 0;
    let temp = this.head;
    while (temp !== null) {
      counter++;
      temp = temp._nextNode;
    }
    return counter;
  }
}

export default LinkedList;
