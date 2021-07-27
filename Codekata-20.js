const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
let a;
inp.on("line",(data)=>{
    a=data;
    let n=0;
    function remove(a){
        let s=[];
        for(var t=0;t<a.length;t++){
            s.push(a[t]);
        }
        s.pop();
        return s.join("");
    }
    while(n===0){
        let str="";
        for(var i=a.length-1;i>=0;i--){
            str+=a[i];
        }
        if(a==str){
            a=remove(a)
        }
        else{
             console.log(a);
            n+=1;
        }
    }
    });
