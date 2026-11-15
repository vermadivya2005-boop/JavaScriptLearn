// const coding=["js","ruby","java"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return
// })
// console.log(values);


//filter
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=>num>4)
// console.log(newNums)
//
 //const myNumbers=[1,2,3,4,5]
// const newNums=myNumbers.map((num)=>num+10)
// console.log(newNums);
//chaning
// const newNums=myNumbers
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>=40)
// console.log(newNums)


//reduce funcation method se
const myNums=[1,2,3]
//  const myTotal=myNums.reduce(function(acc,currval){
//     return acc+currval
//  },0)
//  console.log(myTotal);
 //arrow method se
 const myTotal =myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);