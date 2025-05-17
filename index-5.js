// index-5.js
// Day 5: Managing pet energy and happiness with loops and conditionals

/**
 * Factory function to create a pet object with random starting energy (0-50) and custom happiness.
 * @param {string} name - The name of the pet.
 * @param {string} species - The species of the pet.
 * @param {number} happiness - The starting happiness of the pet.
 * @param {number} [maxEnergy=100] - The maximum energy for this pet.
 * @returns {object} The pet object.
 */
function createPet(name, species, happiness, maxEnergy = 100) {
    // Bonus: random starting energy between 0 and 50
    const energy = Math.floor(Math.random() * 51);
    return {
        name,
        species,
        energy,
        happiness,
        maxEnergy,
        play() {
            if (this.energy >= 15) {
                this.energy -= 15;
                this.happiness += 10;
                if (this.happiness > 100) this.happiness = 100;
                return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
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
            return `Feeding ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
        },
        status() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        }
    };
}

// Create kennels with 5 pets each
const dogKennel = [
    createPet('Rover', 'Dog', 60, 120),
    createPet('Buddy', 'Dog', 70, 110),
    createPet('Max', 'Dog', 50, 100),
    createPet('Daisy', 'Dog', 65, 115),
    createPet('Bella', 'Dog', 80, 105)
];

const catKennel = [
    createPet('Whiskers', 'Cat', 75, 100),
    createPet('Mittens', 'Cat', 60, 95),
    createPet('Shadow', 'Cat', 70, 90),
    createPet('Luna', 'Cat', 85, 100),
    createPet('Simba', 'Cat', 65, 105)
];

const fishTank = [
    createPet('Goldie', 'Fish', 80, 80),
    createPet('Bubbles', 'Fish', 75, 85),
    createPet('Splash', 'Fish', 70, 90),
    createPet('Finley', 'Fish', 60, 95),
    createPet('Blue', 'Fish', 85, 100)
];

// Play with pets: first pet 3x, second pet 1x, rest 2x
function playWithKennel(kennel) {
    if (kennel.length > 0) {
        for (let i = 0; i < kennel.length; i++) {
            let plays = 2; // default
            if (i === 0) plays = 3;
            if (i === 1) plays = 1;
            for (let j = 0; j < plays; j++) {
                console.log(kennel[i].play());
            }
            kennel[i].status();
        }
    }
}

console.log('--- Playing with Dogs ---');
playWithKennel(dogKennel);
console.log('--- Playing with Cats ---');
playWithKennel(catKennel);
console.log('--- Playing with Fish ---');
playWithKennel(fishTank);

// Feed pets conditionally if energy < 30
function feedIfLowEnergy(kennel) {
    for (let i = 0; i < kennel.length; i++) {
        if (kennel[i].energy < 30) {
            console.log(kennel[i].feed());
        }
        kennel[i].status();
    }
}

console.log('--- Feeding Dogs if Energy < 30 ---');
feedIfLowEnergy(dogKennel);
console.log('--- Feeding Cats if Energy < 30 ---');
feedIfLowEnergy(catKennel);
console.log('--- Feeding Fish if Energy < 30 ---');
feedIfLowEnergy(fishTank);
