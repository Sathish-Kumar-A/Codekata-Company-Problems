
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];
inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let x=[];
  for(var j=0;j<data1[0].length;j++){
      x.push(data1[0][j]);
  }
  let y=data1[1];
  for(var i=0;i<x.length;i++){
      if((i+1)%y===0){
          x[i]=x[i].toUpperCase();
      }
  }
  console.log(x.join(""));

});
