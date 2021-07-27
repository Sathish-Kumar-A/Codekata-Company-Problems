
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];
inp.on("line", (data) => {
 a.push(data);
 data1=a[0].split(" ");
 let str=data1[0];
 let str1=data1[1];
 let min;
 let max;
 if(str.length<str1.length){
     min=str;
     max=str1;
 }
 else{
     min=str1;
     max=str;
 }
 let count1=0;
 for(var i=0;i<min.length;i++){
     let count=0;
     for(var j=0;j<max.length;j++){
         if(min[i]==max[j]){
             count+=1;
         }
     }
     if(count>0){
         count1+=1;
     }
 }

 let count2=0;
 for(var u=0;u<max.length;u++){
     let count3=0;
     for(var g=0;g<min.length;g++){
         if(min[g]==max[u]){
             count3+=1;
             break;
         }
     }
     if(count3>0){
         count2+=1;
     }
 }
 if(count1===min.length && count2===max.length){
     console.log("true");
 }
 else{
     console.log("false");
 }
});
