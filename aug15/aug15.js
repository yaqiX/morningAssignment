//findMax function
const findMax = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([1,11,2,4,1,4]));
console.log(findMax([]));

// Add function
const add = (num1, num2) => {
    return num1 + num2;
  };
  
  console.log(add(1,3)); 
  
// minus function
const minus = (num1, num2) => {
    return num1 - num2;
  };
  
  console.log(minus(1,3)); 
  
// Multiplication function  
const multiply = (num1, num2) => {
    return num1 * num2;
};
  
console.log(multiply(3,3)); 
  
// Division function
const divide = (num1, num2) => {
    if (num2 === 0) {
    return "Cannot divide by zero";
}
    return num1 / num2;
};
  
console.log(divide(10, 5)); 