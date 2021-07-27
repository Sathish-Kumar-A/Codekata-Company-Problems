const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
   a=+(data);
   var tmp;
   var k=1;
   for(var i=1;i<a+1;i++){
       tmp=[];
        for(var j=1;j<k+1;j++){
               tmp.push(1);
           }
        k=k+2;

        console.log(...tmp);


       }
});
