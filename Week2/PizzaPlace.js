let pizzaPlace = "Neil's Za";
let numberOfToppings = 6;
console.log(pizzaPlace + ", " + typeof pizzaPlace + ", " +  numberOfToppings + ", " +  typeof numberOfToppings)
console.log(`Here at ${pizzaPlace}, we offer ${numberOfToppings} different toppings.`)

if (numberOfToppings < 10){
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
}

for (let i = 0; i <= numberOfToppings; i += 2) {
  console.log(i)
}
