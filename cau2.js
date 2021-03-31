let N = +prompt('nhập số lượng phần tử')
let arr=[];
for (let i = 0; i < N; i++) {
   arr[i]=Math.floor(Math.random()*N)
} console.log(arr);
function tryRemoveFromArray(num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == num){
            arr.splice(i,1)
        }
    }console.log(arr);
}