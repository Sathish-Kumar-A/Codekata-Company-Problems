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
   let data1=userinput[1].split(" ");
   let min=0;
   for(var i=0;i<data1.length;i++){
       for(var j=0;j<data1.length;j++){
           let diff=Math.abs(data1[i]-data1[j]);
           if(diff>min){
               min=diff;
           }
       }
   }
   console.log(min);

});
