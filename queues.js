class Queue {
  constructor() {
    {
      this.front = null;
      this.back = null;
    }
  }
  enqueue(el) {
    if (this.front) {
      this.back.next = { el: el, next: null };
      this.back = this.back.next;
    } else {
      const node = { el: el, next: null };
      this.front = node;
      this.back = node;
    }
  }
  dequeue() {
    if (this.front) {
      const ret = this.front.el;
      if (this.front == this.back) {
        this.back = null;
      }
      this.front = this.front.next;
      return ret;
    } else {
      console.log("error: tried to dequeue from empty queue");
      return null;
    }
  }
  peek() {
    if (this.front) {
      return this.front.el;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.front == null;
  }
}

const q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q.dequeue());
q.enqueue("d");
console.log(q.dequeue());
q.enqueue("e");
q.enqueue("f");
console.log(q.dequeue());
q.enqueue("g");
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
