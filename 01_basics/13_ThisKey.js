const user ={
    username:"hitesh",
    prices:99,
    welcomeMessage:function(){
       // console.log(`${this.username},welcome to websites`);
       // console.log(this);
    }//this current context ko refer krta hain
}
// user.welcomeMessage()//output hitesh,welcome to websites
// user.username="sam"
// user.welcomeMessage()//output sam,welcome to websites
//console.log(this);//output{}


// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()//output undefinded


// const chai=function(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()//output undefinded


//arrow function declaration
const chai=()=>{
    let username="hitesh"
    console.log(this.username);//agar bas this likhte hain to {}
}
chai()//undefinded output


// const addTwo =(num1,num2)=>{
// return num1+num2
// }
//implicit return me retun nahi used hota
//const addTwo =(num1,num2)=>  num1+num2 
//const addTwo =(num1,num2)=>(num1+num2)// return nahi liyana hain

//object return
const addTwo =(num1,num2)=>({username:"hitesh"})

console.log(addTwo(3,4))
