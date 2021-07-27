// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  function helper(left,right){
    //finding the palindromic string
      while(left>=0 && right<a.length && a[left]==a[right]){
          left-=1;
          right+=1;
      }
      return a.slice(left+1,right);
  }
  let res="";
  //comparing the length to get the greatest string
  for(var i=0;i<a.length;i++){
      test=helper(i,i);
      if(res.length<test.length){
          res=test;
      }
      test=helper(i,i+1);
      if(res.length<test.length){
          res=test;
      }
  }
  console.log(res);
});
