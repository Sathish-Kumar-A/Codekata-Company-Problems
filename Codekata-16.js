
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];
inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let tmp=[];
  for(var i=0;i<data1.length;i++){
      let k=+data1[i];
      let num=1;
      while(k>0){
          num*=k;
          k-=1;
      }
      tmp.push(num);
  }
  let res;
  let d=Math.min(...tmp);
  if(tmp[0]===Infinity){
      console.log(tmp[1]);
  }
  else{
      for(var j=1;j<=d;j++){
      if((tmp[0]%j===0) && (tmp[1]%j===0)){
          res=j;
      }
  }
  console.log(res);
  }

});
