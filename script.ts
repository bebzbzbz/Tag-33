// ======= ARRAYS =======
// ======= Lvl 1_1 =======
console.log("Lvl 1_1");

const bucketList : string[] = ["Arctic", "Iceland", "Medina-Sidonia"];
const luckyNumbers : number[] = [4, 7, 21]; 
const favoritePeople : string[] = ["Nora", "Misha", "Aleks"];
console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// ======= Lvl 1_2 =======
console.log("Lvl 1_2");

console.log(bucketList[1]);
console.log(luckyNumbers[0]);
console.log(favoritePeople[2]);

// ======= Lvl 1_3 =======
console.log("Lvl 1_3");

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// ======= Lvl 1_4 =======
console.log("Lvl 1_4");

const languages : string[] = ["German", "Russian", "English", "French", "Polish", "Spanish"];
console.log(languages);
languages.push("Farsi", "Arabic");
console.log(languages);

// ======= Lvl 1_5 =======
console.log("Lvl 1_5");

const lastLanguage = languages.pop();
console.log(lastLanguage);
console.log(languages);

// ======= Lvl 1_6 =======
console.log("Lvl 1_6");

console.log(favoritePeople);
const firstFav = favoritePeople.shift();
console.log(firstFav);
console.log(favoritePeople);

// ======= Lvl 1_7 =======
console.log("Lvl 1_7");

console.log(bucketList);
bucketList.unshift("Taschkent", "Osaka")
console.log(bucketList);

// ======= Lvl 1_8 =======
console.log("Lvl 1_8");

const freeFree : string[] = ["Palestine", "Sudan", "Kongo", "Rojava", "Syria", "Kashmir", "Lebanon", "Turtle Island"];
console.log(freeFree);

const demoToday = freeFree.slice(3, 5);
console.log(demoToday);
console.log(freeFree);

// ======= Lvl 1_9 =======
console.log("Lvl 1_9");

const numbers : number[] = [23, 54, 75];
console.log(numbers);

numbers.push(11, 32, 42, 5, 71);
console.log(numbers);

numbers.unshift(1, 3, 7, 8, 14);
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
numbers.shift();
console.log(numbers);

// ======= Lvl 1_14 =======
console.log("Lvl 1_14");

const oldHollywoodActors : string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

// const actorsReference = oldHollywoodActors;
// actorsReference.push("Marilyn Monroe");
// console.log(oldHollywoodActors);
// console.log(actorsReference);
// ! nur bei dieser methode wird der originalarray zusammen mit der kopie mitmutiert!

// const actorsReference = oldHollywoodActors.concat("Marilyn Monroe");
// console.log(oldHollywoodActors);
// console.log(actorsReference);

const actorsReference = oldHollywoodActors.slice() + "Marilyn Monroe";
console.log(oldHollywoodActors);
console.log(actorsReference);

// const actorsReference = [...oldHollywoodActors, "Marilyn Monroe"];
// console.log(oldHollywoodActors);
// console.log(actorsReference);