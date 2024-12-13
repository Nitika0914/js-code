const name = "Nitika"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name.toUpperCase()} repo count is ${repoCount}`);

const gameName = new String("Nitika-B-acousticray")
// console.log(name[0]);
// console.log(gameName.__proto__);
// console.log(gameName);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const newwString = gameName.slice(2, 4);
// console.log(newwString);

const newString1 = "   niti    "
// console.log(newString1);
// console.log(newString1.trim());

// %20 is used instead of spaces
const url = "https://nitika.com/nitika%20bansal"

console.log(url.replace('%20', '-'));
console.log(url.includes('nitika'));
console.log(gameName.split('-'));



