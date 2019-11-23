function breakfast(dessert = 'cake', drink = 'coffee') {
    return `breakfast = ${dessert} and ${drink}`;
}
console.log(breakfast('bread', 'milk'));
console.log(breakfast('bread'));


function breakfast2(dessert, drink = 'coffee') {
    return `breakfast = ${dessert} and ${drink}`;
}
console.log(breakfast2('bread', 'milk'));
console.log(breakfast2('bread'));


function breakfast3(dessert = 'cake', drink) {
    return `breakfast = ${dessert} and ${drink}`;
}
console.log(breakfast3('bread', 'milk'));
console.log(breakfast3('bread')); // bread and undefined