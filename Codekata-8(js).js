
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a1=[];

inp.on("line", (data) => {
  a1.push(data);
});
inp.on("close",()=>{
    let tmp2=[];
    for(var i=1;i<a1.length;i++){
        for(var j=0;j<a1[i].length;j++){
            if(a1[i][j]=="a" || a1[i][j]=="e" || a1[i][j]=="i" || a1[i][j]=="o" || a1[i][j]=="U" || a1[i][j]=="u" || a1[i][j]=="A" || a1[i][j]=="E" || a1[i][j]=="I" || a1[i][j]=="O" ){
                tmp2.push(a1[i]);
                break;
            }
        }
    }
    if(tmp2.length===+(a1[0])){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
