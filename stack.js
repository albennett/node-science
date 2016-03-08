'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor (size) {
    this.head = null
    this.maxSize = size
  }

  push (item) {
    if (this.length >= this.maxSize){
      throw new Error()
    }
    let node

    if (item instanceof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    node.next = this.head
    this.head = node
  }

  pop () {
    const toRemove = this.head

    this.head = toRemove.next
    return toRemove
  }

  isEmpty () {}

  isFull(){
    return false
  }

  getSize(){}

}
