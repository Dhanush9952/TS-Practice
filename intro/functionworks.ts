//functions

let Hero;

function getHero(){
    return "Hulk";
}

function addTwo(number1: number): number{
    return number1 + 2;
    //return "Hello"
}

function getUpper(character: string){
    character.toUpperCase();
    return character;
}

function signUpUser(username: string, email: string, isPaid: boolean){

}

function getValue(myVal: number){
    if(myVal > 5){
        return true
    }
    return "200 Gateway!!"
}

const getHello = (s: string): string => {
    return ""
}

const heroes = ["Hulk","Thor","Spiderman"]
//const heroes = [1,2,3]

heroes.map((hero): string => {
    return `hero is ${hero}`
    //return 1
})

function consoleError(errorVal: string): void{
    console.log(errorVal);
}

function handleError(errorVal: string): never{
    throw new Error(errorVal);
}

let loginUser = (username: string, email: string, isPaid: boolean = true) => {}

//variables, types
Hero = getHero()
//let number2: number; 
let number2 = addTwo(5);
let converted: string 
converted = getUpper("dhanush");
signUpUser("dhanush","dhanush@gmail.com",true);
loginUser("d","d@gmail.com");

//output
console.log(Hero);
console.log(number2);
console.log(converted);
console.log(heroes);

export{}