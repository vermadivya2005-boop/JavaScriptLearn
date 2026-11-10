const name = "divya"
const repoCount =50
//console.log(name+repoCount+"value")//is not more good way syntax
//console(`hello my name is ${name} and my repo is &{repoCount}`);


//syntax string
const gameName = new String('divya verma');
//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt('2'));//2 ki position pr kon sa letter hain
//console.log(gameName.indexOf('v'))
const game = new String('hitesh-hc-com')
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne ="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="https://divya.com/divya%20verma"
console.log(url.replace('%20','-'));
console.log(game.split('-'));
