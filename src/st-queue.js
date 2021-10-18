const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.enq = new ListNode()
}
  
  getUnderlyingList() {
    return this.enq
  }

  enqueue(value) {
    if (this.enq.value === undefined) this.enq.value = value
    else {
      let change = this.enq
        let list = new ListNode(value);
        while (change.next) {
          change = change.next
        }
        change.next = list
    }
  }

  dequeue() {
    let value = this.enq.value
    this.enq = this.enq.next
    return value
  }

}
