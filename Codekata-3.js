const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
    userinput1=userinput[0].split(" ")
    var a=+(userinput1[0]);
    var b=+(userinput1[1]);
    console.log((1/2)*a*b)
});
