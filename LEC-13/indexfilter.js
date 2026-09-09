let arr=[1,2,3,4,5];
arr.forEach((ele,idx)=>{

    arr[idx]=ele*2;
    
;})
console.log(arr);


// let sum=0;
// for (let i=0; i<arr.length;i++){
//     sum = sum + arr[i];
// }

// console.log("Sum =", sum);

//  let sum2=arr.reduce(function(acc, curr){
//     return acc+curr;
// },0)
// console.log(sum2);

let product=1;
for (let i=0;i<arr.length;i++){
    product*=arr[i];
}
console.log(product);
//acc=arr ka first