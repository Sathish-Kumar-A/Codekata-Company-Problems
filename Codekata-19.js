const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
    data1=a[0].split(" ");
    console.log((data1[0]*data1[2])+(+data1[1]));
    });
