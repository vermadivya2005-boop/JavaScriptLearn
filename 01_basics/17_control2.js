//switch case
//syntax
// switch (key){
//     case value:
//         break;
//         default:
//             break;
// }

// const month=3
// switch(month){
//     case 1:
//         console.log("jan");
//         break;
//         case 2:
//         console.log("feb");
//         break;
//          case 3:
//         console.log("march");
//         break;
//         case 4:
//         console.log("april");
//         break;
//         case 5:
//         console.log("may");
//         break;

//         default:
//             console.log("default case match");
//             break;
// }
const userEmail="hitesh@"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email")
}

//false value
//false,0,-0,BigInt,"",null,underline,NaN // ye sb me else wala condition print hoga
//true value
//"0",'false'," ",[],{},function(){}
//array me kaise check krte hain
//if(userEmail.length===0){
//console.log("Array is empty");
//}

//objct me kaise check krna
//if(Object.keys(emptyObj).length===0){
   // console.log("objecyt is empty");
//}

//nullish coalescing opertaor (??):null underline
let val1;
val1 = 5??10
console.log(val1);