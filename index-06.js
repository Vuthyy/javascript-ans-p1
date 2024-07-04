let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers count: ${oddCount}`);
console.log(`Odd numbers count: ${evenCount}`);
