'use strict';
//Create an object named pet.
const pet = {
name: 'Fido',
species: 'cat',
happiness: 50,
play: function() {
this.happiness += 10;
return `You played with ${this.name}! Happiness is now ${this.happiness}`;
},
feed: function() {
this.happiness += 20;
return `You fed ${this.name}! Happiness is now ${this.happiness}`;
}
};
//Implement the pet object and its methods in your code. Log the following to the console:
//The initial status of the pet using the status method.
//The message returned by the play method.
//The updated status after calling the feed method.
console.log(`Pet Name: ${pet.name}`);
console.log(`Species: ${pet.species}`);
console.log(`Happiness Level: ${pet.happiness}`);
console.log(pet.play());
console.log(pet.feed());
console.log(`Updated Happiness Level: ${pet.happiness}`);

