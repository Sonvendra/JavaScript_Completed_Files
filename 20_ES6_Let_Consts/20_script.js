// If Condition using var & let
var dept = 'Engineering';
if(dept === 'Engineering'){
    var job1 = 'Software';
    let job2 = 'Government';
}
console.log(dept); // Engineering
console.log(job1); // Software
// console.log(job2); // Cannot Access this because its 'let'

// for Loop using var  , let
for(var i =0; i<=10; i++){

}
console.log(i); // 11
for(let j =0; j<=10; j++){

}
// console.log(j); // Cannot Access this because its 'let'

const APP_NAME = 'JavaScript App';

// APP_NAME = 'TEST'; // Cannot Re-assign to this variable