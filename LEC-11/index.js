function outer(){
    let a = 10;
    function inner (){
        a++;
        console.log(a);
    }
    // inner(); // This line is commented out, so inner() is not called here
     return inner;
}
let f1 = outer();
console.log(f1); // This will log the inner function definition
f1(); // This will call the inner function, which increments 'a' and logs it