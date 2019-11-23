function breakfast() {
    return { dessert: 'cake', drink: 'coffee', fruit: 'apple'};
}

let { dessert: dessert1, drink: drink1, fruit: fruit1 } = breakfast();
console.log(dessert1, drink1, fruit1);

let { dessert: dessert, drink: drink, fruit: fruit } = breakfast();
console.log(dessert, drink, fruit);

// let { dessert, drink, fruit } = breakfast();
// console.log(dessert, drink, fruit);

