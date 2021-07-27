// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  console.log(data1[1],data1[0])
});
