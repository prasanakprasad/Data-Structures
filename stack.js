//Convert this stack data structure into arrays

class Nodes {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      const newNode = new Nodes(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop(){
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  console.log(myStack.pop());
//   console.log(myStack.pop());
//   console.log(myStack.pop());
  
  //Discord
  //Udemy
  //google
  //Code below for your owns
  //LIFO
  class StackA{
      constructor(){
        this.values = [];
      }
      peek(){
          console.log(this.values);
      }
      push(value){
        this.values.unshift(value);
      }
      pop(){
          if(this.values.length>=1)
        return this.values.shift();
        else return "EMPTY";
      }
  }
  const myStackA = new StackA();
  myStackA.peek();
  myStackA.push('google');
  myStackA.push('udemy');
  myStackA.push('discord');
  myStackA.peek();
  console.log(myStackA.pop());
