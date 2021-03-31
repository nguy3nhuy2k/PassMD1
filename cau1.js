let arr=[1,7,5,6,3,9,4,2]
function findMax(){
    let max =arr[0];
    for (let i = 0; i <arr.length ; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
    }document.write(max);
    return max;
}
findMax()