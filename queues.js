class Queue {
  constructor() {
    {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  }
  enqueue(val) {
    if (this.first) {
      this.last.next = { val: val, next: null };
      this.last = this.last.next;
    } else {
      const node = { val: val, next: null };
      this.first = node;
      this.last = node;
    }
    this.size++;
    return undefined;
  }
  dequeue() {
    if (this.first) {
      const ret = this.first.val;
      if (this.first == this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return ret;
    } else {
      throw new Error("error: tried to dequeue from empty queue");
    }
  }
  peek() {
    if (this.first) {
      return this.first.val;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.first == null;
  }
}

module.exports = Queue;

// const q = new Queue();

// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// console.log(q.dequeue());
// q.enqueue("d");
// console.log(q.dequeue());
// q.enqueue("e");
// q.enqueue("f");
// console.log(q.dequeue());
// q.enqueue("g");
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
