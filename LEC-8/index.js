// there is no return type;

function function_Name(){
    console.log("some work");
    return 5;


} 
function_Name();





// how to pass parameter 
function add(a,b){

  return a+b;


}
let out=add("5",2);
console.log(out);

// default parameter 
function add(a=2, b=3){
    console.log(a,b);

    return a+b;

}
 let out2 = add(); 
//  if you  do not pass the argument , the function will are default value 
console.log(out2);