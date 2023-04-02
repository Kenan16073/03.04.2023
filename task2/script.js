
let arr =[2,4,5,6,7];
let n = 2;
let end= arrayLastElementThree(arr,n)
function arrayLastElementThree (arr,n) {
    for(let i=0;i<n;i++){
        let endTheree=arr.slice(-3);
        let fromThree=endTheree.reduce((a,b) => a+b,0)
        arr.push(fromThree)
    }
    return arr;
}
console.log(end);