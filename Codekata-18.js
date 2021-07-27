const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
    });
inp.on("close",()=>{
    data1=a[1].split(" ");
    let tmp=[];
    for(var i=0;i<data1.length;i++){
        let count=0;
        for(var j=0;j<data1.length;j++){
            if(data1[i]==data1[j]){
                count+=1;
            }
        }
        if(count>1){
            tmp.push(data1[i]);
        }
    }
    let tmp1=[...new Set(tmp)];
    for(var h=0;h<tmp1.length;h++){
        for(var u=0;u<h-1;u++){
            if(tmp1[u]>tmp1[u+1]){
                let tmp2=tmp1[u];
                tmp1[u]=tmp1[u+1];
                tmp1[u+1]=tmp2;
            }
        }
    }
    if(tmp1.length>0){
        console.log(...tmp1);
    }
    else{
        console.log("unique");
    }
});
