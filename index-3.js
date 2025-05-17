// index-3.js
// Day 3: Managing a collection of pet objects using arrays

/**
 * Factory function to create a pet object with custom energy, happiness, and maxEnergy.
 * @param {string} name - The name of the pet.
 * @param {string} species - The species of the pet.
 * @param {number} energy - The starting energy of the pet.
 * @param {number} happiness - The starting happiness of the pet.
 * @param {number} [maxEnergy=100] - The maximum energy for this pet.
 * @returns {object} The pet object.
 */
function createPet(name, species, energy, happiness, maxEnergy = 100) {
    return {
        name,
        species,
        energy,
        happiness,
        maxEnergy,
        play() {
            if (this.energy >= 20) {
                this.energy -= 20;
                this.happiness += 10;
                // Game mechanic: happiness can decrease randomly
                if (Math.random() < 0.3) {
                    this.happiness -= 5;
                    return `You played with ${this.name}! Happiness is now ${this.happiness} (lost some fun), and energy is now ${this.energy}.`;
                }
                return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
            } else {
                return `${this.name} is too tired to play!`;
            }
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
            if (this.happiness > 100) this.happiness = 100;
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },
        rest() {
            this.energy = this.maxEnergy;
            return `${this.name} has rested. Energy is now fully restored to ${this.maxEnergy}.`;
        },
        status() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        }
    };
}

// Create multiple pets
const pet1 = createPet('Fluffy', 'Dog', 80, 60, 120);
const pet2 = createPet('Rex', 'Dog', 100, 50, 110);
const pet3 = createPet('Frisky', 'Cat', 90, 70, 100);
const pet4 = createPet('Goldie', 'Fish', 60, 80, 80);
const pet5 = createPet('Spike', 'Lizard', 70, 55, 90);
const pet6 = createPet('Chirpy', 'Bird', 85, 65, 95);

// Initialize kennel array
const kennel = [];

// Add pets using push
kennel.push(pet1, pet2, pet3, pet4, pet5);
// Add remaining pet(s) using bracket notation
kennel[kennel.length] = pet6;

// Log kennel contents using console.table (bonus)
console.table(kennel, ['name', 'species', 'happiness', 'energy', 'maxEnergy']);

// Use forEach to make each pet rest (bonus)
kennel.forEach(pet => {
    pet.rest();
});

// Log kennel contents after all pets have rested
console.table(kennel, ['name', 'species', 'happiness', 'energy', 'maxEnergy']);

// Demonstrate play and feed with if-statements for boundaries
kennel.forEach(pet => {
    console.log(pet.play());
    console.log(pet.feed());
    pet.status();
});
