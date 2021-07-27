
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=+data;
  let tmp=[];
  for(var i=2;i<a+1;i++){
      let count=0;
      for(var j=1;j<(i/2)+1;j++){
          if(i%j===0){
              count+=1;
          }
      }
      if(count===1){
          tmp.push(i);
      }
  }
  console.log(...tmp);
  });
