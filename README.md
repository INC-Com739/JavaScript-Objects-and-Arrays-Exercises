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

please