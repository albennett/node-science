'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }

  enqueue (node) {
    if (this.head) {
      this.tail.next = node
    } else {
      this.head = node
    }

    this.tail = node
  }

  dequeue () {
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }
  }
}
