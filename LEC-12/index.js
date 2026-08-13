let arr=[2,20,30];
arr[0] = 10;
arr[10] = 100;


// System.out.println(arr[0]);  
// [10,20,30]
// int arr[5];
// arr=[1,2,3,4,5];
// cout<<arr
// cout <<arr

console.log(arr);

// how to access any value  from array
// using index
let val = arr[10];
console.log(val);



// how to access any value in javascript 
// using index
// get

let val=arr[7];
console.log(val);

// 2. Push and pop
//push als elements at last
arr.push(12);//[ 1, 2, 3, <2 empty items>, 10, 12 ]
console.log(arr);


//get element from length
let len = arr.length;
console.log(len - 1);//6
//To remove element from last
arr.pop();
console.log(arr);//[ 1, 2, 3, <2 empty items>, 10 ]
//remove from first  and add at first


//shift - remove at first
//  and unshift - add at first
arr.unshift(0);
console.log(arr);//[ 0, 1, 2, 3, <2 empty items>, 10 ]
arr.shift();
console.log(arr);//[ 1, 2, 3, <2 empty items>, 10 ]

//how to remove element from anywhere of array
//splice - remove and add element from anywhere of array
//splice(startIndex, deleteCount, item1, item2, itemN)
arr.splice(2, 1);//remove 1 element from index 2
console.log(arr);



//slice - get elements from anywhere of array
//slice(startIndex, endIndex)
let newArr = arr.slice(1, 3);//get elements from index 1 to 2
console.log(newArr);//[ 2, 3 ]