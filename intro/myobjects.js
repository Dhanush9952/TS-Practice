"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "dhanush",
    email: "dhanush@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "dhanush", isPaid: false, email: "dhanush@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 599 };
}
var myUser = {
    _id: "123",
    name: "dhanush",
    email: "dhanush@gmail.com",
    isActive: false,
    //creditcardDetails: 654321
};
myUser.email = "dk16@gmail.com";
//myUser._id = "asa"
console.log(myUser);
