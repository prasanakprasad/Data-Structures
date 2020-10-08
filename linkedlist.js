// Create the following linked list: 10-->5-->16

class Node {
    constructor(value){
  this.value = value;
  this.next = null;}
};
class LinkedList 
{
    constructor(){
        this.length = 0;
        this.head = null;
    } 
    head() { 
      return this.head;
    }

    size() {
      return this.length;
    }

    add(value) {
      let node= new Node(value);
        if (this.head == null)
        {
         this.head=node;
        }
        else
        {
            let ptr = this.head;
            while(ptr.next!==null)
            {
                ptr =ptr.next;
            }   
            ptr.next = node;
        }
        this.length+=1;
    }

    remove(value)
    {
        let node = new Node(value);
        //if element being removed is the head element-reassign head
        let current = this.head;
        let prev = current;

        while(current !==null){
            console.log("Its inside current not null",current);
          if (current.value === node.value){
            //go ahead and change the previous's next pointer to point to the current's next
            prev.next = current.next;
            console.log('its the node so deleting it');
            // current=current.next
            if (current == this.head){
                this.head=current.next;
            }
            this.length--;
            break;
          }else{
              console.log("Its making the cuurrent go to the next node");
          prev = current;
          current = current.next;
        }
        }
    }

traverse()
{
     let current= this.head;
     while(current!== null)
    {
        console.log("element is ",current);
        current=current.next;
    }
}
}

let ll= new LinkedList();

ll.add("One");
ll.add("Two");
ll.add("Three");
ll.traverse();


  