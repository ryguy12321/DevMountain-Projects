//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
The "this" keyword is used as a shortcut or referent. It referes to an object that is the subject in context, or the subject executing the code. The this keyword is similarly used to refer to an object that the function is bound to. The this keyword not only refers to the object but it also contains the value of the object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
In JavaScript, the thing called this, is the object that "owns" the JavaScript code.

The value of this, when used in a function, is the object that "owns" the function.

The value of this, when used in an object, is the object itself.

The this keyword in an object constructor does not have a value. It is only a substitute for the new object.

The value of this will become the new object when the constructor is used to create an object.

Note     Note that this is not a variable. It is a keyword. You cannot change the value of this.
  // 3) What is the difference between call and apply?

      //Answer
The main difference is the apply() takes arguments as an array and call() takes arguments as comma separated list.
  // 4) What does .bind do?

      //Answer
We use the Bind () method primarily to call a function with the this value set explicitly. It other words, bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = { userName: 'Rikki', email: 'ryguy12321@gmail.com', getUserName ()
}

}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var mixedArray = ['Dog', 0, undefined, "multiple words", NaN, 10, false, true, 1, null];

//Create a function called 'falsyFilter' that will remove all of the falsy values from the above array and return a new array that contains only the truthy values (in the same order). Expected: ['Dog', "multiple words", 10, true, 1];
var falsyFilter = function(dumb) {
  var newArr = [];
  for (var i =0; i < dumb.length; i++) {
    if (dumb[i]) {
    newArr.push(dumb[i]);
    }
  }
    console.log(newArr);
 
  };
  
falsyFilter(mixedArray);
//Check this stuff out again. review and study and practice.