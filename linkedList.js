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
  getHead() {
    return this.head;
  }
  tail() {
    let temp = this.head;
    while (temp !== null) {
      if (temp._nextNode === null) {
        break;
      }
      temp = temp._nextNode;
    }
    return temp;
  }
  at(index) {
    let pointer = 0;
    let temp = this.head;
    while (temp !== null && pointer !== index) {
      pointer++;
      temp = temp._nextNode;
    }
    if (index > pointer) {
      return `index exceed the length of the list, list is only having ${pointer} nodes`;
    }
    return temp;
  }
  pop() {
    let temp = this.head;
    let previous = null;
    while (temp !== null) {
      if (temp._nextNode === null) {
        previous.nextNode = null;
        break;
      }
      previous = temp;
      temp = temp._nextNode;
    }
    return this.head;
  }
  contains(value) {
    let isContain = false;
    let temp = this.head;
    while (temp !== null) {
      if (temp._value === value) {
        isContain = true;
        break;
      }
      temp = temp._nextNode;
    }
    return isContain;
  }
}

export default LinkedList;
