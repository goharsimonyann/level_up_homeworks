let sum = 0;

function recursiveSum(arr) {
  if (!arr) return 0;
  if (arr.length === 0) return sum;

  sum += arr[arr.length - 1];
  arr.pop();

  return recursiveSum(arr);
}

console.log(recursiveSum([1, 2, 3, 4]));
