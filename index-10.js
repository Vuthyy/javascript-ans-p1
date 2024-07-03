let numbers = [3, 5, 7, 2, 8, 9, 4];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(`Largest number is: ${largest}`);
