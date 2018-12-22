// Block scoping for FOR loop
for(var i=0; i<=10;i++){

}
console.log(i); // 11

//Block scoping for if Block
var dept1 = 'Engineering';
if(dept1 === 'Engineering'){
    var job1 = 'Software';
}
console.log(dept1); // Engineering
console.log(job1); // Software

// Function Scoping
var dept2 = 'Medical';
function allocateJob() {
    if(dept2 === 'Medical'){
        var job2 =  'Doctor';
    }
}
allocateJob();
console.log(dept2); // Medical
// console.log(job2); // cannot Access

// Scopes Examples
var b = 10;
function outerFn(){
    var b = 20;
    function innerFn(){
        var b = 30;
        console.log(b); // 30
    }
    console.log(b); // 20
    innerFn();
}
console.log(b); // 10
outerFn();

// IIFE example
var name = 'John';
(function(name) {
    var desg = 'Manager';
    console.log('Hello ' + name + ' You Are a ' + desg);
})(name);


// Read and Write Operations for variables

// Implications of Read and Write Operations


