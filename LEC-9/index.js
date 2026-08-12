//  function are first class citizens 
    // function are treated as value 
    //  1 can store in variable 
    // 2 pass an argument in another 
    // 3 can return from function 
// function foo(){

// }
// console.log(fun);
// fun(); 
// // error: fun is not a function  
// // function expression 
// var fun = function(){
//   console.log("hello")
// }

// fun();


// function fun(a,b){
//     console.log(a+b);
// }
// function foo(a){
//     console.log(a);
//     return fun;
    // a(2,3);

// fool(function(){})

// foo(fun());
// let result = foo(10);
// console.log(result);
// result(2,3);


function foo(cb){
    return cb;

}
function fun(){
    console.log("hello world");
}
let result=foo(fun);
console.log(result());

