// [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]].
class PriorityQueue {
    constructor(){
        this.collection = [];
    }
    printCollection() {
      console.log("Priority Queue ",this.collection);
    };
    
  enqueue(value){
  let foundIndex=-1;
  for (let i=0;i<this.collection.length;i++)
  {//find the index at which this value has to be inserted in.
    //if value[1] is greater than the ith element[1] then go the next i
    //if value[1] is less then thats where you want to insert this element at. 
    if (value[1]<this.collection[i][1])
    {
        foundIndex=i;
        break;
    }
  }
  console.log("This is the place for insertion",foundIndex);
  if (foundIndex == -1)//add it to the last
  {
      this.collection.push(value);
  }
  else{
      this.collection.splice(foundIndex,0,value);
  }
  }

  dequeue(){
    let item =this.collection.pop();
    return item[0];
  }
  }
  let pq= new PriorityQueue();
  pq.collection =[['kitten', 2], ['dog', 2], ['rabbit', 2],['asd',4],['asd',5]];
  pq.enqueue(['human', 5]);
  pq.printCollection();
  pq.enqueue(['one',1]);
  pq.printCollection();
  pq.enqueue(['item',3]);
  pq.printCollection();
  pq.enqueue(['secondfour',4]);
  pq.printCollection();

