function breakfast(dessert, drink, ...fruits) {
    console.log(dessert, drink, fruits);
    console.log(dessert, drink, ...fruits);
}

breakfast('cake', 'coffee', 'apple');
breakfast('cake', 'coffee', 'apple', 'banana', 'orange');