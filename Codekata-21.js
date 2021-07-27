const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data)
    });
inp.on("close",()=>{
    let tmp=[];
    let tmp1=[];
    let tmp2=[];
   if(a.length>2){
       for(var i=1;i<a.length;i++){
       tmp.push(a[i].split(" "));
   }
   for(var j=0;j<tmp.length-1;j++){
       for(var k=0;k<tmp[j].length;k++){
           for(var t=0;t<tmp[j].length;t++){
               if(tmp[j][k]==tmp[j+1][t]){
               tmp1.push(tmp[j][k]);
           }
           }
       }
   }
   for(var d=0;d<tmp1.length;d++){
       let count=0;
       for(var h=0;h<tmp1.length;h++){
           if(tmp1[d]==tmp1[h]){
               count+=1;
           }
       }
       if(count==tmp.length-1){
           tmp2.push(tmp1[d]);
       }
   }
   tmp2=[...new Set(tmp2)];
   console.log(tmp2.join(" "));
   }
   else{
       f=a[1].split(" ");
       console.log(f.join(" "));
   }
});
