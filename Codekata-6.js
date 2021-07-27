
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
 a=data;
 let sum=0;
 let x;
 for(var i=0;i<a.length;i++){
     x=Math.pow(+(a[i]),a.length);
     sum+=x;
 }
 console.log(sum);

});
    
