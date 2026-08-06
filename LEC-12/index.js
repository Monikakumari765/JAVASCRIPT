// let roll=null;
// function changeRoll(roll_Num){
//     roll=roll_Num;
// }

// console.log(roll); // This will log the inner function definition
// changeRoll(25);
// roll=65;
// console.log(roll);



function incrementAttendence(){
    let attendence=0;
    function change(){
        attendence++;
        console.log(attendence);
    }
    return change;
}
let Studentoneincrement=incrementAttendence();
Studentoneincrement();
Studentoneincrement();
let Studenttwoincrement=incrementAttendence();
Studenttwoincrement();


