//control flow
//if statament
// const isUserloggedIn=true
// const temp=41
// if(temp===40){
// console.log("les than 50");
// }else{
// console.log("temp is greater than 50");
// }

//scope related
// const score=200
// if(score>100){
//     let power ="fly"//let ki place var used kr liya to erro nahi hoga output //fly 2 time
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)

//short hand notation aise nahi krna hain
const balance =1000
//if(balance>500) console.log("test");


// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750 ")
// }else if(balance<900){
// console.log("less than 750");
// }else{
//     console.log("less 1200")
// }


const userLoggedIn =true
const debitCard =true
const loggedIngoogle=false
const loggedInemail=true
if(userLoggedIn && debitCard){//dono true hona chaye
    console.log("allow to buy course")
}
if(loggedIngoogle||loggedInemail){
    console.log("user logged")
}



//<,>,<=,>=,!=,===,!=