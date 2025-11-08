class Node {
  constructor() {
    this._value = null;
    this._nextNode = null;
  }
  set value(value) {
    this._value = value;
  }
  set nextNode(nextNode) {
    this._nextNode = nextNode;
  }
}

export default Node;
