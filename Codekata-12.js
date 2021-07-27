
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];
let tmp;

inp.on("line", (data) => {
 userInput.push(data);
 data1=userInput[0].split(" ");
 for(var i=0;i<data1.length-1;i++){
     if(data1[i]=="and" && i!==0){
         tmp=data1[i-1];
         data1[i-1]=data1[i+1];
         data1[i+1]=tmp;
     }
 }
 console.log(...data1);
});
