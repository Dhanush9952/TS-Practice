"use strict";
//functions
Object.defineProperty(exports, "__esModule", { value: true });
var Hero;
function getHero() {
    return "Hulk";
}
function addTwo(number1) {
    return number1 + 2;
    //return "Hello"
}
function getUpper(character) {
    character.toUpperCase();
    return character;
}
function signUpUser(username, email, isPaid) {
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Gateway!!";
}
var getHello = function (s) {
    return "";
};
var heroes = ["Hulk", "Thor", "Spiderman"];
//const heroes = [1,2,3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
    //return 1
});
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
//variables, types
Hero = getHero();
//let number2: number; 
var number2 = addTwo(5);
var converted;
converted = getUpper("dhanush");
signUpUser("dhanush", "dhanush@gmail.com", true);
loginUser("d", "d@gmail.com");
//output
console.log(Hero);
console.log(number2);
console.log(converted);
console.log(heroes);
