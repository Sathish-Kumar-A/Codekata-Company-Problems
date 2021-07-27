
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    data1=a[1].split(" ");
    let tmp=[];

    // Reversing String and adding the characters
    for(var i=data1.length-1;i>=0;i--){
        if(i!==0){
            let b=data1[i]+"->";
            tmp.push(b);
        }
        else{
            tmp.push(data1[i]);
        }
    }
    // concatenating list items to string
    let str="";
    for(var j=0;j<tmp.length;j++){
        str+=tmp[j];
    }
    console.log(str);
});
    
