function outer(){
    let a = 10;
    function inner (){
        a++;
        console.log(a);
    }
    inner();
}
outer();
