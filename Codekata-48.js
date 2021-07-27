
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
    let s=+a[0];
    for(var i=0;i<s;i++){
        let count=0;
        for(var j=0;j<s;j++){
            if(data1[i]==data1[j]){
                count+=1;
            }
        }
        if(count==1){
            console.log(data1[i]);
            break;
        }
    }
    });
