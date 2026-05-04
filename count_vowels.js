const vowels=function(str){
    let count=0;
    const vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count=count+1;
        }
    }
    return count;
}
let str="Manish Kumar";
console.log(vowels(str));