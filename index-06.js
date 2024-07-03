let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddCount = 0;
let evenCount = 0;

numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});

console.log(`Odd numbers: ${oddCount}, Even numbers: ${evenCount}`);
