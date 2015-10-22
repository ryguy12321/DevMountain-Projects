# the-keyword-this
<!-- creating a method within a object model! -->

var OrderMethods  = {
  calculateTax: function (order, includeLocal, includeFlat) {
    var tax= order.total * 0.10;
    
    if (includeLocal) {
      tax += order.total * 0.01
    }
    if (includeFlat) {
      tax += 0.25
  } 
  return tax;
  }
};
var order1 = {
  total: 10
  calculateTax: orderMethods.calculateTax
};
var order2 = {
  total: 20
  calculateTax: orderMethods.calculateTax
};

var order1Tax = order1.calculateTax();
var order2Tax = orderMethods.calculateTax(order2);

console.log(orderTax1);
console.log(orderTax2);



//apply and call(Look up for better understanding)
---They imedieatley invoke the reseult.
//Bind creates a branad new function that we can call that 

function sayHello() {
  console.log('Hello' + this.name);
}
 var person = { name: 'Ryan'};
 var reallySayHello = sayHello.bind(person);