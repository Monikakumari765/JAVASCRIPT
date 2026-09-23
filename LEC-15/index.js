function starter(cb){
    setTimeout(function(){
        console.log("starter served")
        cb() 
    } , 1000)
}
function maincourse(){
    setTimeout(function(){
        console.log("maincourse served")
    } , 2000)
}

function drinks(){
    setTimeout(function(){
        console.log("drinks  served")
    } , 500)
}
function sweets(){
    setTimeout(function(){
        console.log("sweets served")
    } , 200)
}
function bill(){
    setTimeout(function(){
        console.log("bill payed")
    } , 100)
}

// group
// starter -- drinks -- maincouse -- sweets -- bill

// starter();
// drinks();
// maincourse();
// sweets();
// bill();

starter(function () {

    drinks(function () {

        maincourse(function () {

            sweets(function () {

                bill(function () {

                    console.log("ghar jana h");

                });

            });

        });

    });

});

console.log("hi");

// function should only responsible for their task 
// disadvantages of call back --> callback hell -- nesting of multiple call back creates pyramid 
//                                                 like structure which is hard to read and manage.
