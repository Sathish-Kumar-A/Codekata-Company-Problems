
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close",()=>{
    let data1=[];
    for(var i=0;i<userInput[0].length;i++){
        if(userInput[0].charCodeAt(i)>64 && userInput[0].charCodeAt(i)<91){
            data1.push(userInput[0][i]);
        }
    }
    let data2=[];
    for(var j=0;j<userInput[1].length;j++){
        if(userInput[1].charCodeAt(j)>64 && userInput[1].charCodeAt(j)<91){
            data2.push(userInput[1][j]);
        }
    }
    let f=[...new Set(data1)];
    let d=[...new Set(data2)];
    if(f.length+d.length===26){
        console.log("yes");
    }
    else{
        console.log("no");
    }
});
