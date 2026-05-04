let num=123
let ans=0;
while(num){
    ans=ans*10+num%10;
    num=Math.floor(num/10);
}
console.log(ans);