const User = {
    name: "dhanush",
    email: "dhanush@gmail.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "dhanush", isPaid: false, email: "dhanush@gmail.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 599}
}

type user = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: user = {
    _id: "123",
    name: "dhanush",
    email: "dhanush@gmail.com",
    isActive: false,
    //creditcardDetails: 654321
}

myUser.email = "dk16@gmail.com"
//myUser._id = "asa"

console.log(myUser);

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    CVV: number
}

export{}