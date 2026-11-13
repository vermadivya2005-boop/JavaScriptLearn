// IIFE FULL FORM immeditely Invoked Function Expression(IIFE)
//global scope ki pollution se problem hote hain kibar es pollution ko hattne ki liya iife ka used hot 

//SYNTAX OF IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();

(()=>{
    console.log(`DB CONNECTED TWO`)
})()