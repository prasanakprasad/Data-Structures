//Code the methods: peek, enqueue, and dequeue to create a waitlist app for the following people get in line and 
//then deque them one by one with first come first serve basis. 

//Joy
//Matt
//Pavel
//Samir

class Nodeq {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {

    }
    enqueue(value){
        const node = new Nodeq(value);
        //find the end by using the this.last
        // let current=this.first;
        //if there were no nodes, this.first will be null so check that.
        if (this.first){
            this.last.next =node;
            this.last =node;
            console.log("next node",node);
        }//if first is null this will be the first node to be pushed
        else{
            console.log("First node",node);
            this.first=node;
            this.last=node;
        }
        this.length++;
    }
    dequeue(){//take the first node and pop it. make the first point to first's next
        if(this.first)
        {
            const node = this.first;
            this.first= this.first.next;
            this.length--;
            return node;
        }
    }
    isEmpty(){
        return this.length ==0;
    };
    traverse()
    {
        let current=this.first;
        while(current)
        {
            console.log(current);
            current= current.next;
        }
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  
  myQueue.traverse();
  console.log(myQueue.dequeue());
  

  
  
  
  