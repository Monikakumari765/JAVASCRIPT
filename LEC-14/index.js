// set time out  is function h jo dusre function ko time out k baad call krta h
console.log("start"); 

 let id1 =setTimeout(function(){
    console.log("work to be done");
}, 1000);

 let id2 = setTimeout(function(){
    console.log("timeout 2");
}, 500);
console.log("end ");

let id3 = setTimeout(function(){
    console.log("timeout 3");
}, 200);

 let id4 = setTimeout(function(){
    console.log("timeout 4");
 }, 1500); 

 let id5 = setTimeout(function(){
    console.log("interval 1");
 }, 1000); 

 console.log(id1,id2,id3,id4,id5);
  // 1 2 3 4 5 - setTimeout returns a unique identifier for each timeout, 
  // which can be used to cancel the timeout if needed.


 clearTimeout(id2); 
setTimeout(function(){
 clearInterval(id5); 
}, 5000)

 

// set interval is function h jo dusre function ko har ek time interval k baad call krta h
// settimeout = executes a function after a specified delay,
//  while setInterval executes a function repeatedly at specified intervals.
 
// setInterval(function(){
//     console.log("Mona");
// }, 1000);

// synchronous code is executed sequentially, 
// blocking the execution of subsequent code until the current operation is complete.

// asynchronous code allows other operations to continue while waiting for a task to complete,


// javascript is single-threaded language , meaning it can only execute one piece of code at a time.
// by deafault javascript is synchronous in nature .
// dsadvantage of synchronous code is that it can block the execution of other code.

// event loop is a mechanism that allows JavaScript to perform non-blocking
//  operations by offloading tasks to the system kernel whenever possible.
// use of queue in event loop is to manage the execution of asynchronous code.
// 