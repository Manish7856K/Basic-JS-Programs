function prime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
let num=17;
if(prime(num)){
    console.log("Prime Number")
}
else{
    console.log("Not Prime Number")
}