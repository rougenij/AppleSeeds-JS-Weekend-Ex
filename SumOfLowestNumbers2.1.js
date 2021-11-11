// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    let min = numbers[0];
    let secondMin = numbers[1];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        secondMin = min;
        min = numbers[i];
      } else if (numbers[i] < secondMin) {
        secondMin = numbers[i];
      }
    }
    return min + secondMin;
  }
