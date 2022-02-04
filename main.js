'use strict';

function func(a, b) {
    console.log(a);
    b(a);
}

let varA=60;
let varB= function(param){
    console.log('I am a function',param);
};
func(varA, varB);



function createObj(){
    return {
        name:"Joe",
        age:105
    };
}

let newob = createObj();
console.log(newob);



function createFunc(){
    let x =0
    return function(){
        x++;
        console.log('I am a created function',x)
    }
}

let newfunc =createFunc();
for(let i =0; i< 5; i++){
    newfunc();
}

let otherfunc = createFunc();
otherfunc();
otherfunc();