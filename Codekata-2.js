const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
})
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
    });
inp.on("close",()=>{
    var a=+(userinput[0]);
    data1=userinput[1].split(" ");
    data2=userinput[2].split(" ");
    var tmp=[];
    var count;
    if(data2.length==data1.length){
        for(var i=0;i<a;i++){
            count=0;
            for(var j=a-1;j>=0;j--){
                if (data1[i]==data2[j]){
                    count+=1;
                }
                else{
                    break;
                }
            }
            tmp.push(count);
        }
        for (var k=0;k<a;k++){
            if(tmp[k]<=0){
                console.log("no");
                break;
            }
            else{
                console.log("yes");
                break;
            }
        }
    }
    else{
        console.log("no");
    }



});
