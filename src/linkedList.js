import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.nodeHead = null;
    this.nodesNumber = 0;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.nodesNumber === 0) {
      this.nodeHead = newNode;
    } else {
      let currentNode = this.nodeHead;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }

    this.nodesNumber += 1;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.nodeHead;
    this.nodeHead = newNode;
    this.nodesNumber += 1;
  }

  size() {
    return this.nodesNumber;
  }

  head() {
    return this.nodeHead.value;
  }

  tail() {
    let currentNode = this.nodeHead;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  at(index) {
    if (index < 0 || index >= this.nodesNumber) return null;

    let currentNode = this.nodeHead;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  pop() {
    let popNode = null;

    if (this.nodesNumber === 1) {
      popNode = this.nodeHead.value;
      this.nodeHead.value = null;
      this.nodeHead.nextNode = null;
    } else {
      let currentNode = this.nodeHead;
      let prevNode = null;

      while (currentNode.nextNode !== null) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }

      popNode = currentNode.value;
      currentNode.value = null;
      prevNode.nextNode = null;
    }

    this.nodesNumber -= 1;
    return popNode;
  }

  contains(value) {
    let currentNode = this.nodeHead;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.nodeHead;
    let index = 0;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index += 1;
    }

    if (currentNode.value === value) return index;

    return null;
  }

  toString() {
    let stringList = "";
    let currentNode = this.nodeHead;

    while (currentNode.nextNode !== null) {
      stringList += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    stringList += `( ${currentNode.value} ) -> null`;
    return stringList;
  }

  insertAt(value, index) {
    if (index < 0) return null;
    if (index > this.nodesNumber) index = this.nodesNumber;

    let newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.nodeHead;
      this.nodeHead = newNode;
    } else {
      let currentNode = this.nodeHead;
      let prevNode = null;

      for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }

      prevNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }

    this.nodesNumber += 1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.nodesNumber) return null;

    let popNode = null;

    if (index === 0) {
      popNode = this.nodeHead.value;
      let newHeadNode = this.nodeHead.nextNode;
      this.nodeHead.value = null;
      this.nodeHead.nextNode = null;
      this.nodeHead = newHeadNode;
    } else {
      let currentNode = this.nodeHead;
      let prevNode = null;

      for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }

      popNode = currentNode.value;
      prevNode.nextNode = currentNode.nextNode;
      currentNode.value = null;
      currentNode.nextNode = null;
    }

    this.nodesNumber -= 1;
    return popNode;
  }
}
