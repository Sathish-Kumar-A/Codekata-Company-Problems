// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    data1=a[1].split(" ");
    let min=Math.abs(data1[0]+data1[1]);
    let pair1;
    let pair2;
//Nested loop to compare every element to find absolute minimum pair

    for(var i=0;i<data1.length;i++){
        for(var j=0;j<data1.length;j++){
          // excluding the same number from two arrays
            if(data1[i]!=data1[j]){
                let diff=Math.abs(+data1[i]+Number(data1[j]));
                // comapring with the minimum value
                if(min>diff){
                min=diff;
                pair1=data1[i]+data1[j];
            }
            }
        }
    }
    console.log(pair1);
});
