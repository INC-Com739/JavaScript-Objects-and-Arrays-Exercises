// index-2.js
// Factory function to create pet objects with properties and methods

/**
 * Creates a new pet object with the given name and species.
 * @param {string} name - The name of the pet.
 * @param {string} species - The species of the pet (e.g., 'Dog', 'Cat').
 * @returns {object} The pet object with properties and methods.
 */
function createPet(name, species) {
    return {
        name: name,
        species: species,
        happiness: 50,
        energy: 100,
        play: function() {
            this.energy -= 20;
            this.happiness += 10;
            return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },
        feed: function() {
            this.happiness += 20;
            this.energy += 20;
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },
        status: function() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        },
        // Bonus: Rest method to fully restore energy
        rest: function() {
            this.energy = 100;
            return `${this.name} has rested. Energy is now fully restored to 100.`;
        }
    };
}

// Create multiple pets
let pet1 = createPet('Fluffy', 'Dog');
let pet2 = createPet('Rex', 'Dog');
let pet3 = createPet('Frisky', 'Cat');

// Test pet1
pet1.status(); // Initial status
console.log(pet1.play()); // Play with pet1
pet1.status(); // Status after play
console.log(pet1.feed()); // Feed pet1
pet1.status(); // Status after feed
console.log(pet1.rest()); // Rest pet1 (bonus)
pet1.status(); // Status after rest

// Test pet2 and pet3
pet2.status();
pet3.status();
