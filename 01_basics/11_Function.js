


//declration of function
function sayMyName(){
console.log("h");
console.log("i");
console.log("s");
}
//sayMyName()
// function addTwoNumbers(number1,number2){
// console.log(number1+number2);
// }
// const result= addTwoNumbers(3,4)
// console.log("Result: " ,result);//undefinde aa rha tha output
// function addTwoNumbers(number1,number2){
//     let result =number1+number2;
//     return result;
// }
// const result =addTwoNumbers(3,4);
// //console.log("Result: ", result);//an output undefine nahi aa rha an 7 aa rha hain
//function loginUserMessage(username){
   // if(!username){
      //  console.log("Please enter a username");
//return
 //   }
//return `${username} just logged in`
//}
//console.log(loginUserMessage())

function calculateCartPrice(...num1){//(...num1)rest oprater
return num1
}
console.log(calculateCartPrice(200,400,500))
//object ko faction me kaise pass kiya jata hain
const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"saym",
    price:399

})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray));