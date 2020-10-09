// Create a funtion that reverses a string using the stack data structure
//'Hi my name is' should be:
//'si eman ym iH'

class StackR {
    constructor(){
      this.values=[];
    }
    push(value){
     this.values.ushift(value);
    }
    pop(){
      return this.values.pop();
    }
  }
  
  function reverseWithStack(str){
    console.log("****** Reverse a String Using the Stack DS ******")
    //split the characters and put them in the Stack DS above.
    let stack= new StackR();
    stack.values = str.split("");
    // console.log("stack values after split",stack.values); 
    let RString ="";
    let len = stack.values.length;
    for (let i =0;i<len ;i++)
    {
      RString+=stack.pop(); 
    }
   console.log("Reversed String of "+ str + " is "+ RString);
  }
reverseWithStack("Robot");
reverseWithStack("Hi my name is");
  