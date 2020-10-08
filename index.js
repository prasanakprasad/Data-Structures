const num =[1,6,4,4];
//write a logic to find the numbers that gives a sum of 8 in this array num.
function brutefind()
{
    for(let i =0;i<num.length;i++){
    for (j= i+1;j<num.length;j++){
        if (num[i]+num[j] ==8)
        console.log('printing the numbers as the sum is equal to 8',num[i],num[j]);
    }
    }
}
brutefind();

function usingHashSet()
{
    let comp=new Set();
    for(let i=0;i<num.length;i++){
        const temp = 8-num[i];
        if(comp.has(num[i]))
        {
        console.log("Compliment value found");
        console.log("values are",num[i],temp);
        return true;
        }
        else{
            comp.add(temp);
        }
        console.log("comp set is",comp);
    }
    return false;
}
usingHashSet();