function binSearchIterative(arr, key) {
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) return mid;

    if (arr[mid] < key) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

function binSearchRecursive(arr, key, l, r) {
  let mid = Math.floor((l + r) / 2);

  if (arr[mid] === key) return mid;
  if (l > r) return -1;

  return arr[mid] < key
    ? binSearch(arr, key, mid + 1, r)
    : binSearch(arr, key, l, mid - 1);
}
