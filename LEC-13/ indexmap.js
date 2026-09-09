// map, filter , Reduce. // map return new array, it doesn't change the value of given array 
// map never change the length of array
let arr =[1,2,3,4,5];

// let doubleArray = arr.map(function(ele) {
//     let double= ele*2;
//     return double;

// })

// console.log(arr);
// console.log(doubleArray);

//find all the odd element from array using map
 let oddEle = arr.map(function(ele) {
    if(ele%2==1)
    return ele;

 });


console.log(oddEle);
let oddEle2= arr.filter(function(ele){
    if(ele%2==0) return true;

})
console.log(oddEle2);