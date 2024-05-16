class Stack {
  constructor() {
    {
      this.top = null;
    }
  }
  push(el) {
    const node = { el: el, next: this.top };
    this.top = node;
  }
  pop() {
    if (this.top) {
      const ret = this.top.el;
      this.top = this.top.next;
      return ret;
    } else {
      console.log("error: tried to pop from empty stack");
      return null;
    }
  }
  peek() {
    if (this.top) {
      return this.top.el;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.top == null;
  }
}
