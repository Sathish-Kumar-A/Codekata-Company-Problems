// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userinput;
inp.on("line", (data) => {
  userinput=+data;
  let sum=0;
  let p=[];
  for(var i=2;i<userinput+1;i++){
      let count=0;
      for(var j=2;j<(Math.floor(i/2)+1);j++){
          if(i%j===0){
              count+=1;
          }
      }
      if(count===0){
          let str=i.toString();
              if(str[str.length-1]==="3"){
                  sum+=+str;
              }
      }
  }
  console.log(sum);
});
