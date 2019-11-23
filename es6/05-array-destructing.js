function breakfast() {
    return ['cake', 'coffee', 'apple'];
}

let temp = breakfast();

let dessert = temp[0];
let drink = temp[1];
let fruit = temp[2];

console.log(dessert, drink, fruit);

let [dessert1, drink1, fruit1] = breakfast();

console.log(dessert1, drink1, fruit1);

