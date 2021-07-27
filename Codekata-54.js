// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
  let i=0;
  let str="";
while(i<a.length){
      //counting the number of variables
      let count=0;
      for(var j=i;j<a.length;j++){
          // If encounters same variable add count
          if(a[i]==a[j]){
              count+=1;
          }
          else{
              break;
          }
  } //adding the count to the letter
       str+=a[i]+count;
       // incrementing to the next variable
       i+=count;
}
console.log(str);
});
