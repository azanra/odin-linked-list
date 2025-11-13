# odin-linked-list

This is solution for odin [linked-list](https://www.theodinproject.com/lessons/javascript-linked-lists) assignment. Linked list is a sequence of node, where each node contain value and reference to the next node. each list are having a head where it started, and tail where the value of it is null. there are multiple type of linked list, single linked list where each node only have next node, double linked list where each node having next and previous node, and singular where the tail reference back into the head or start of the list.

Based off those information the list should be in object, where it have head as property, and the node are inserted starting from the head. to access certain node, we need to traverse starting from the head.

```js
let temp = this.head;
while (temp !== null) {
  temp = temp._nextNode;
}
```

it will store the head and will keep looping through until is not null, and to move to next node, it will store the current temp next node into temp.

one of the example logic is to inserting node at certain index

```js
  insertAt(value, index) {
    let pointer = 0;
    let previous = null;
    let temp = this.head;
    if (temp === null) {
      this.append(value);
      return this.head;
    }
    while (temp !== null) {
      if (pointer === index) {
        const node = new Node();
        node.value = value;
        node.nextNode = temp;
        previous._nextNode = node;
        return this.toString();
      }
      if (temp._nextNode === null && index === pointer + 1) {
        this.append(value);
        return this.toString();
      }
      previous = temp;
      pointer++;
      temp = temp._nextNode;
    }
    if (index > pointer) return `list only have ${pointer} nodes!`;
  }
```

first we need to get a pointer for the current item, previous to store the previous node, and temp for the current node we are traversing. it will check first if the head is null otherwise it will loop through all the node and check if current pointer is equal to inputted index. if it true then it will create a new node with inputted value, with next node of the current node, and modified the previous next node into the newly created node.

or if the index inputted is located at the tail, which the previous node will have the next node set to null, it will use append which will input into the end of the list. and for each node it will increment the pointer by one. if the inputted index is greater than the amount of nodes in the list, it will warn the user. The rest of the logic is should be pretty similar by looping through each of the node first.
