class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  set value(value) {
    this.value = value;
  }
  set nextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

export default Node;
