// Create a funtion that reverses a string
//'Hi my name is' should be:
//'si eman ym iH'

function checkMutability(str)
{
    /* for (let i=0;i<(str.length)/2;i++)
    {
        const last=str[str.length-1-i];
        str[str.length-1-i]= str[i];
        str[i]=last;
    } */
    str[0]='H';
    return str;
}

function reverse(str){
    console.log("str is",str);
    let rstr="";
 for (let i=0;i<(str.length);i++)
 {
     rstr+=str[str.length-1-i];
 }
 return rstr; 
}
const s1="Hi my name is";
const s="four";
console.log(`Reverese of ${s}--> ${reverse(s)}`);
console.log(`Reverese of ${s1}--> ${reverse(s1)}`);
console.log(`Mutated of ${s}--> ${checkMutability(s)}`);