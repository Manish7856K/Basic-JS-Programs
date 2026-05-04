let num=123
let ans=0
while(num){
    ans+=num%10
    num=Math.floor(num/10)
}
console.log(ans)