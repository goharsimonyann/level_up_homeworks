function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (right - left >= 1) {
    mid = Math.floor((right + left) / 2);

    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }

  if (nums[left] === target) return left;
  else if (nums[right] === target) return right;
  else return -1;
}
