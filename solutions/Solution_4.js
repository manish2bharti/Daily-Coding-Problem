// Problem 4
//
// This problem was asked by Stripe.
//
// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
//
// You can modify the input array in-place.
function firstMissingPositiveInteger(nums) {
  if (nums.length === 0) return 1;
  const k = partition(nums, 0, nums.length - 1, 0) + 1;

  let result = k;
  for (let i = 0; i < k; i++) {
    const indexValue = Math.abs(nums[i]);
    if (indexValue <= k) {
      if (nums[indexValue - 1] > 0)
        nums[indexValue - 1] = 0 - nums[indexValue - 1];
    }
  }

  for (let i = 0; i < k; i++) {
    if (nums[i] > 0) {
      result = i;
      break;
    }
  }
  console.log(result + 1)
  return result + 1; // plus 1 because arrays are zero indexed
}

function partition(nums, left, right, pivotValue) {
  while (left <= right) {
    while (nums[left] > pivotValue) left++;
    while (nums[right] < pivotValue) right--;

    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  return right;
}

function swap(arr, i, j) {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


firstMissingPositiveInteger([3, 4, -1, 1])
