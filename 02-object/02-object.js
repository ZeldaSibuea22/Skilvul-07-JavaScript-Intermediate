//--------------SOAL 01----------

console.log("-----SOAL 01-----")
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function(name) {
        return `Hello, ${name}`
    }
}

/// EDIT HERE
person.name = "Zelda Elma Sibuea"
person.favDrinks[1] = "tap water"
/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));


//------- SOAL 02 ---------------
console.log("-----SOAL 02-----")
function getObjectValue(obj, path) {
    let splitPath = path.split('.');
    let result = obj;
    for (let i = 0; i < splitPath.length; i++) {
        if (Object.keys(result).includes(splitPath[i])) {
            result = result[splitPath[i]];
        } else {
            result = null;
            break;
        }
    }
    return result;
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)


//----------SOAL 03-------------

// dibawah ini merupakan history transasksi yang telah kalian lakukan
console.log("-----SOAL 03-----")
const items = [{
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
},
{
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
},
{
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
},
];

const calculateIncome = (items) => {
/// EDIT DOWN HERE
let btc = 0;
let eth = 0;
let doge = 0;
for (let i = 0; i < 3; i++) {
    btc += items[i].btc.sell - items[i].btc.buy
    eth += items[i].eth.sell - items[i].eth.buy
    doge += items[i].doge.sell - items[i].doge.buy
}

let income = {
    btc: btc,
    doge: doge,
    eth: eth,
}
console.log(income)
}

console.log(calculateIncome(items))
