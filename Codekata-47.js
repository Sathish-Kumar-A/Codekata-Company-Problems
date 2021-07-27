
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
    a.push(data);
});
inp.on("close",()=>{
    data1=a[1].split(" ");
    data2=a[2].split(" ");
    let s=+a[0];
    let count=0;
    var x;
    var y;
    let min=s;
    for(var i=0;i<s;i++){
        if(data1[i]==data2[0]){
             x=i;
        }
        else if(data1[i]==data2[1]){
            y=i;
        }
        if(Math.abs(x-y)<min){
            min=Math.abs(x-y);
        }
    }
    console.log(min);
    });
