
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];
inp.on("line", (data) => {
  a.push(data);
  });
inp.on("close",()=>{
    let x=+a[0];
    let count=0;
    data1=a[1].split(" ");
    for(var i=1;i<=data1.length;i++){
        let r=x*i;
        for(var j=0;j<data1.length;j++){
            if(r==data1[j]){
                count+=1;
            }
        }
    }
    console.log(count);
});
