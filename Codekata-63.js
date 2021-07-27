// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userinput=[];
inp.on("line", (data) => {
  userinput.push(data);
});
inp.on("close",()=>{
    let arr=[];
    let sum=0;
    let sum1=0;
   for(var i=0;i<userinput.length;i++){
       arr.push(userinput[i].split(" "));
   }
   for(var j=0;j<arr.length;j++){
       sum+=+arr[j][0];
       sum1+=+arr[j][1];
   }
   if((sum-sum1)===0){
       console.log("yes");
   }
   else{
       console.log("no");
   }
});
