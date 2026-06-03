const user = {
    fame : "MAheen",
    id : 124,
    address :{
        city : "KArachi"
    }
}
// shallow copy deep copy
let user2 = structuredClone(user)
console.log(user,user2);

user2.fame = "Hania"
user2.address.city = "islamabad"
console.log(user);
console.log(user2);



// ternarry opretor

let age = 12

let drink = (age > 10)? "coffee" : (age === 10)? "chcoclate": "milk"

console.log(drink);
