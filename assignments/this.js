/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When in the global scope, the value of the "this" keyword will be the window/console object.
* 2. Implicit Binding: It is implied that if you are using a method on an object, "this" gets bound to the object left of the dot.
* 3. New Binding: Whenever a constructor function is used, "this" refers to the specific object that is created and returned by the constructor function.
* 4. Explicit Binding: "this" is explicitly defined whenever the call or apply method is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function nameLocation(location) {
    console.log(this);
    return location;
}

nameLocation("Santa Cruz");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Greetings',
    sayHello: function(planet) {
        console.log(`${this.greeting} we come in peace on ${this.planet}`);
        console.log(this);
    }
};

myObj.sayHello('Earth');

// Principle 3

// code example for New Binding

function Cat(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.speak = function() {
        console.log(this);
        return `Hello, my name is ${this.name} and I am ${this.type} years old!`
    };
}

const sagwa = new Cat({name: 'Sagwa', type: 'siamese'});

sagwa.speak();

// Principle 4

// code example for Explicit Binding
function greet (one, two, three) {
    alert(
        `Hello, my name is ${this.name} and I love ${one}, ${two}, and ${three}!`
    )
}

const person = {
    name: 'Taylor',
    age: 21,
}

const food = ['spaghetti', 'sandwiches', 'ribs']

greet.apply(person, food);