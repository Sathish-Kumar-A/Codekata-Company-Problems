
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
  let str="";
  for(var i=0;i<a.length;i++){
      let s="";
      if(a[i]>=0 && a[i]<=9){
          s+=a[i];
          for(var j=i+1;j<a.length;j++){
              if(j==a.length){
                  break;
              }
              else if(a[j]>=0 && a[j]<=9){
                  s+=a[j];
              }
              else{
                  break;
              }
          }
          if(s%2===0){
              for(var k=0;k<(+s-1);k++){
              str+=a[i-1];
          }
          }
          else{
              str+=a[i];
          }
      }
      else{
          str+=a[i];
      }
  }
  console.log(str);
});
