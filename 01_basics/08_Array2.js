const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);it is not good way of marged
//concat
//const allheros=marvel_heros.concat(dc_heros)
//console.log(allheros);//dono array merge hoge
//spread
const all_new_heros=[...marvel_heros,...dc_heros]
//console.log(all_new_heros);//same dono array merge hoge it is good way to merge
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("hitesh"))//flase
console.log(Array.from("hitesh"))//array me conver kr diga hitesh ko
console.log(Array.from({name:"hitesh"}))//empty dige
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
