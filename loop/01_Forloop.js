//for loop



//break and continue

for(let index=1;index<=20;index++){
    if(index==5){
        //console.log(`1dected 5`);
        break//continue
    }
   // console.log(`value of i is ${index}`);
}

// while loop
let index =0
while(index<=10){
   // console.log(`value of index is ${index}`);
    index =index+2
}
let myArray =["graps","banana","ornage"]
let arr=0;
while(arr<myArray.length){
   // console.log(`value is${myArray[arr]}`);
    arr=arr+1
}

//do while loop
let score =1
do{
//.log(`score is ${score}`);
score++
}while(score<=10);

//for of

const array =[1,2,3,4,5]
for(const num of array){
   // console.log(num);
}
//map
const map=new Map()
map.set('USA',"united states of America")
map.set('Fr',"France")
console.log(map);
for(const key of map){
    //console.log(key);
}
//for of me key aate hain
//for in me value aate hain

//for each loop
const coding=["js","ruby","java","python","ccc"]
//coding.forEach(function (item) {
    //console.log(item);
//} )
// arrow function
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})
//function
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// array ki andar object ka aaces
const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
mycoding.forEach((item)=>{

    console.log(item.languageName);
})