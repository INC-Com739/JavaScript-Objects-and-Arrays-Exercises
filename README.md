# JavaScript-Objects-and-Arrays-Exercises

Assignment

Day 1

Create a pet object in JavaScript with properties and methods for playing, feeding, and checking status. Optionally, add a method to rename the pet and update its status.
Learning about objects, methods and this in JavaScript

Objective

This assignment aims to enhance your understanding of JavaScript objects and methods by creating a simple pet object. You'll learn how to define properties, implement methods to interact with the object, and practice manipulating data within an object, reinforcing foundational object-oriented programming concepts.

Instructions

Assignment: Create Your Own Pet Object in JavaScript

Objective:

This assignment will help you understand and reinforce the concepts of objects and methods in JavaScript by creating a simple object representing a pet with properties and methods.

Setup:

Create a repo for this week called Pet-Kennel-Shell

Each day, you will make one file. The first day, you will make index.js, the second index-2.js and so on.

Instructions:

Create a Pet Object:

Open index.js
Create an object named pet.
Add the following properties to the pet object:
name: a string representing the pet's name.
species: a string representing the type of pet (e.g., "Dog", "Cat").
happiness: a number representing the pet's happiness level (start with 50).
Add Methods:

Add a method named play to the pet object. This method should increase the happiness property by 10 and return a message like, "You played with Fluffy! Happiness is now 60."
Add a method named feed to the pet object. This method should increase the happiness property by 20 and return a message like, "You fed Fluffy! Happiness is now 70."
Add a method named status to the pet object. This method should print out a message like, "Pet Name: Fluffy, Species: Dog, Happiness: 70."
Implement and Test:

Implement the pet object and its methods in your code.
Log the following to the console:
The initial status of the pet using the status method.
The message returned by the play method.
The updated status after calling the feed method.
Bonus Task (Optional):

Add a method named rename to the pet object that accepts a parameter newName. This method should update the name property with the new value and return a message like, "Your pet's new name is Sparky!"
Test this method by renaming your pet and logging the new status using the status method.
Submission:

Use git to commit and push your code. Your code for day 1 will be in the file index.js. Ensure your code is well-commented to explain what each part does.

Example Output:

pet.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 50
console.log(pet.play()); // Output: You played with Fluffy! Happiness is now 60.
pet.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 60
console.log(pet.feed()); // Output: You fed Fluffy! Happiness is now 80.
pet.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 80

// If you did the bonus task:
pet.rename('Sparky');
pet.status(); // Output: Pet Name: Sparky, Species: Dog, Happiness: 80
Evaluation Criteria:

Correct implementation of the pet object with all required properties and methods. (5 points)
Proper use of JavaScript syntax and object-oriented principles. (5 points)
Clear and concise comments explaining the code. (3 points)
Successful completion of the bonus task (if attempted). (2 points)
Note: Completing required tasks will result in 13/15 score (an "A"). Completing the bonus will result in 15/15 (an "A+"). This is because Moodle doesn't allow for extra "bonus" points on assignments.

Day 2

Create a factory function in JavaScript to generate pet objects with properties and methods. Implement and test multiple pets, adding optional features like a rest method for extra credit.

Follow-Up Assignment: Exploring Factory Functions with a Pet Example

Objective:

This assignment will help you understand and implement factory functions in JavaScript by creating a function that generates pet objects. You'll learn how to encapsulate object creation logic within a function and practice using factory functions to create multiple instances of pet objects.

NOTE: The trick to this is to put object creation inside a function the, RETURN THAT OBJECT with a return statement.

Instructions:

Create a Pet Factory Function:

Create a new file called index-2.js.
Define a function named createPet that returns an object.
The object should have the following properties:
name: a string representing the pet's name.
species: a string representing the type of pet (e.g., "Dog", "Cat").
happiness: a number representing the pet's happiness level (start with 50).
energy: a number representing the pet's energy level (start with 100).
Add Methods:

Add a method named play to the pet object. This method should decrease the energy by 20, increase the happiness by 10, and return a message like, "You played with Fluffy! Happiness is now 60, and energy is now 80."
Add a method named feed to the pet object. This method should increase both the happiness and energy properties by 20 and print a message like, "You fed Fluffy! Happiness is now 80, and energy is now 100."
Add a method named status to the pet object. This method should print a message like, "Pet Name: Fluffy, Species: Dog, Happiness: 80, Energy: 100."
Implement and Test:

Create multiple pets using the createPet factory function, each with different names and species.
Log the following to the console for each pet:
The initial status using the status method.
The message returned by the play method.
The updated status after calling the feed method.
Bonus Task (Optional):

Add a method named rest to the pet object that fully restores the energy to 100 and returns a message like, "Fluffy has rested. Energy is now fully restored to 100."
Test this method by resting one of your pets and logging the new status using the status method.
Submission:

Use git to commit and push your code. Your code for day 2 will be in the file index-2.js. Ensure your code is well-commented to explain what each part does.

Example Output:

let pet1 = createPet('Fluffy', 'Dog');
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 50, Energy: 100
console.log(pet1.play()); // Output: You played with Fluffy! Happiness is now 60, Energy is now 80.
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 60, Energy: 80
console.log(pet1.feed()); // Output: You fed Fluffy! Happiness is now 70, Energy is now 100.
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 70, Energy: 100

let pet2 = createPet('Rex', 'Dog');
let pet3 = createPet('Frisky', 'Cat');
pet2.status();
pet3.status();

// If you did the bonus task:
pet1.rest();
pet1.status(); // Output: Pet Name: Fluffy, Species: Dog, Happiness: 70, Energy: 100
Evaluation Criteria:

Correct implementation of the createPet factory function with all required properties and methods. (5 points)
Proper use of JavaScript syntax and object-oriented principles. (5 points)
Clear and concise comments explaining the code. (3 points)
Successful completion of the bonus task (if attempted). (2 points)
Note: Completing required tasks will result in 13/15 score (an "A"). Completing the bonus will result in 20/20 (an "A+").

Day 3

Objective:

This assignment will help you practice using arrays in JavaScript by creating and managing a collection of pet objects. You'll learn how to add items to an array using both the push method and bracket notation.

Instructions:

Create a Pet Factory Function:

Define a factory function named createPet that accepts three parameters: name, species, energy and happiness. The function should return an object with these properties. The object should also have the methods status, feed, and play as it did in previous assignments.
Create Multiple Pets:

Use the createPet function to create at least three different pets, each with unique names, species, and happiness levels.
Initialize the Kennel Array:

Create an empty array named kennel to store your pets.
Add Pets to the Kennel Using push:

Use the push method to add at least 5 of your pet objects to the kennel array.
Add Pets to the Kennel Using Bracket Notation:

Use bracket notation to add the remaining pet(s) to the kennel array.
Log the Kennel Contents:

Print the contents of the kennel array to the console, displaying all the pets.
Bonus Task (Optional):

Use console.table() instead of console.log()
Research and use the forEach array method to make each pet rest.
Try to use if-statements to prevent energy from going bellow 0 or above 100.
Have a max energy level specific to each pet determined in the factory function.
Think of a game mechanic to decrease happiness so happiness can fluctuate and make the game more fun.
Submission:

Use git to commit and push your code. Your code for day 3 will be in the file index-3.js. Ensure your code is well-commented to explain what each part does.

Day 4

Objective:

This assignment will help you practice organizing objects into different arrays and using a for loop to perform operations on each array.

Instructions:

Create Pet Factory Function:

Create a new file called index-4.js
You may copy/paste your work from day 3 or write it fresh for practice (recommended!)
Ensure your pet factory function can create pets with species like "Dog," "Cat," and "Fish," each with a feed method that increases the pet's happiness.
Create Three Kennels:

Create three arrays: dogKennel, catKennel, and fishTank.
Populate each array with at least five pets of the corresponding species using the pet factory function.
Feed All Pets:

Write separate for loops for each kennel (dogKennel, catKennel, fishTank).
Inside each loop, call the feed method for each pet in the kennel, logging a message like, "Feeding Rover! Happiness is now 80."
Output the Final Status:

After each loop, log the final status of every pet in the kennel using their status method.
Bonus Ideas:

Make your functions have some randomness involved to the degree they change the values of energy and happiness
Make some pets get "tired" faster than others.
Have a function that decreases happiness (like: badDog, or bored).
Try using the forEach method instead of for.
Submission:

Use git to commit and push your code. Your code for day 4 will be in the file index-4.js. Ensure your code is well-commented to explain what each part does.