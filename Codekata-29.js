
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
  for(var i=1;i<a.length;i++){
      if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90){
          console.log("yes");
          break;
      }
  }
  });
