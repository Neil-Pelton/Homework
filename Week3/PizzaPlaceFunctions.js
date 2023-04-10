const pizzaToppings = ["cheese", "peperoni", "bacon", "sausage", "peppers"]

function greetCustomer(){
  let greeting = "Welcome to Neil's Za! The toppings we offer are: ";
  for (let topping of pizzaToppings){
   greeting += topping;
  }
console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings){
  console.log(`One ${size} ${crust} crust pizza with ${toppings}.`);
  console.log(size, crust, toppings);
}
getPizzaOrder("Large", "Thin", "cheese", "peperoni", "bacon", "sausage", "peppers");

function preparePizza(size, crust, ...toppings){
  console.log("We are working on your order.")
  size = "Large",
  crust = "Thin",
  toppings = ["cheese", "peperoni", "bacon", "sausage", "peppers"];
}
preparePizza();

function servePizza(preparePizza){
  size = "Large",
  crust = "Thin",
  toppings = ["cheese", "peperoni", "bacon", "sausage", "peppers"]
console.log(`Order up! One ${size} ${crust} crust pizza with ${toppings}.`)
}
servePizza();
