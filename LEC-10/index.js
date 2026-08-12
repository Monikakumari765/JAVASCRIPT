function outer(){
    let a = 10;
    // block scope variable a is created and initialized to 10
    function inner (){
        a++;
        console.log(a);
    }
    // inner(); // This line is commented out, so inner() is not called here
     return inner;
}

// closure  har baar naya banta hai 
let f1 = outer(); 
f1()
f1()
let f2 = outer();
console.log(f1); // This will log the inner function definition
f1(); 
f2(); 
f2();// This will call the inner function, which increments 'a' and logs it