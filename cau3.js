
let N = +prompt();
let arr= [];
let a =0;
let b=1;
for (let i = 0;i < N ; i++) {
    b = a + b;
    a = b - a;
    arr[i] = a;
}
console.log(arr);
function isFibonacci(Num){
    if(N<1)
        return false;
    if(N==1 || N == 2 || N ==3)
        return true;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == Num){
            return true
        }
        else {
            return false
        }
    }
}
