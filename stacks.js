class Stack {
  constructor() {
    {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  }
  push(val) {
    const node = { val: val, next: this.first };
    if (!this.first) {
      this.last = { val: val };
    }
    this.first = node;
    this.size++;
    return undefined;
  }
  pop() {
    if (this.first) {
      const ret = this.first.val;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }
      this.size--;
      return ret;
    } else {
      throw new Error("error: tried to pop from empty stack");
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

module.exports = Stack;
