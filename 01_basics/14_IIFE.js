// IIFE FULL FORM immeditely Invoked Function Expression(IIFE)
//global scope ki pollution se problem hote hain kibar es pollution ko hattne ki liya iife ka used hot 

//SYNTAX OF IIFE
(function chai(){
    //name iife
    console.log(`DB CONNECTED`)
})();

(()=>{
    //simple iife
    console.log(`DB CONNECTED TWO`)
})()