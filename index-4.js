// index-4.js
// Day 4: Organizing pets into kennels and performing operations with loops

/**
 * Factory function to create a pet object with custom energy, happiness, and maxEnergy.
 * Includes randomness in feed/play, and a bored method to decrease happiness.
 * @param {string} name - The name of the pet.
 * @param {string} species - The species of the pet.
 * @param {number} energy - The starting energy of the pet.
 * @param {number} happiness - The starting happiness of the pet.
 * @param {number} [maxEnergy=100] - The maximum energy for this pet.
 * @param {number} [tiredRate=20] - How quickly this pet gets tired (energy lost per play).
 * @returns {object} The pet object.
 */
function createPet(name, species, energy, happiness, maxEnergy = 100, tiredRate = 20) {
    return {
        name,
        species,
        energy,
        happiness,
        maxEnergy,
        tiredRate,
        play() {
            if (this.energy >= this.tiredRate) {
                this.energy -= this.tiredRate;
                // Randomness: happiness increases 8-12
                const happyChange = 8 + Math.floor(Math.random() * 5);
                this.happiness += happyChange;
                if (this.happiness > 100) this.happiness = 100;
                return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
            } else {
                return `${this.name} is too tired to play!`;
            }
        },
        feed() {
            // Randomness: happiness increases 15-25, energy 15-25
            const happyChange = 15 + Math.floor(Math.random() * 11);
            const energyChange = 15 + Math.floor(Math.random() * 11);
            this.happiness += happyChange;
            this.energy += energyChange;
            if (this.happiness > 100) this.happiness = 100;
            if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
            return `Feeding ${this.name}! Happiness is now ${this.happiness}.`;
        },
        rest() {
            this.energy = this.maxEnergy;
            return `${this.name} has rested. Energy is now fully restored to ${this.maxEnergy}.`;
        },
        bored() {
            // Decrease happiness by 5-10
            const loss = 5 + Math.floor(Math.random() * 6);
            this.happiness -= loss;
            if (this.happiness < 0) this.happiness = 0;
            return `${this.name} is bored. Happiness is now ${this.happiness}.`;
        },
        status() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        }
    };
}

// Create kennels
const dogKennel = [
    createPet('Rover', 'Dog', 80, 60, 120, 25),
    createPet('Buddy', 'Dog', 90, 70, 110, 20),
    createPet('Max', 'Dog', 100, 50, 100, 18),
    createPet('Daisy', 'Dog', 85, 65, 115, 22),
    createPet('Bella', 'Dog', 95, 80, 105, 20)
];

const catKennel = [
    createPet('Whiskers', 'Cat', 90, 75, 100, 15),
    createPet('Mittens', 'Cat', 85, 60, 95, 12),
    createPet('Shadow', 'Cat', 80, 70, 90, 10),
    createPet('Luna', 'Cat', 95, 85, 100, 13),
    createPet('Simba', 'Cat', 100, 65, 105, 14)
];

const fishTank = [
    createPet('Goldie', 'Fish', 60, 80, 80, 8),
    createPet('Bubbles', 'Fish', 70, 75, 85, 7),
    createPet('Splash', 'Fish', 65, 70, 90, 6),
    createPet('Finley', 'Fish', 80, 60, 95, 9),
    createPet('Blue', 'Fish', 75, 85, 100, 10)
];

// Feed all dogs
for (let i = 0; i < dogKennel.length; i++) {
    console.log(dogKennel[i].feed());
}
// Output final status for all dogs
for (let i = 0; i < dogKennel.length; i++) {
    dogKennel[i].status();
}

// Feed all cats
for (let i = 0; i < catKennel.length; i++) {
    console.log(catKennel[i].feed());
}
// Output final status for all cats
for (let i = 0; i < catKennel.length; i++) {
    catKennel[i].status();
}

// Feed all fish
for (let i = 0; i < fishTank.length; i++) {
    console.log(fishTank[i].feed());
}
// Output final status for all fish
for (let i = 0; i < fishTank.length; i++) {
    fishTank[i].status();
}

// Bonus: Try forEach and bored mechanic
// dogKennel.forEach(dog => console.log(dog.bored()));
// catKennel.forEach(cat => console.log(cat.bored()));
// fishTank.forEach(fish => console.log(fish.bored()));
