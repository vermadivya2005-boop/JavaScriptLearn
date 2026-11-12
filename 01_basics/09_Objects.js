
//constructor se banga to singlton

//Object.create
//object literals
//declaration of object
const mySym = Symbol("key1")//symbol

const jsuser={
    name:"hitesh",
    age:18,
    [mySym]:"mykey1",//symoble ki liya ye syntax hota hain
    location:"jaipure",
    email:"verma.divya2005@.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsuser.email)//acces of object
// console.log(jsuser["email"])//acces of object dono way se acces kr skte hain
// console.log(jsuser[mySym])//symbol ko acces krne ki liya
jsuser.email="divya.verma@2005"//email change
//console.log(jsuser)
Object.freeze(jsuser)//email ko freeza krne ki bad eamil change krna chaiy ho nahi hoga

jsuser.email="hitesh@2005"
//console.log(jsuser);
//function
jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting);
