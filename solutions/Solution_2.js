// Problem 1
//
// This problem was asked by Uber.
//
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

function productExceptSelf(nums) {
  if (nums.length === 0) {
    return [];
  }

  const productArr = Array(nums.length);
  productArr[0] = 1;
  for (let i = 1; i < productArr.length; i++) 
    productArr[i] = productArr[i - 1] * nums[i - 1];
  }

  let product = 1;
  for (let i = productArr.length - 1; i >= 0; i--) {
    productArr[i] *= product;
    product *= nums[i];
  }
	console.log(productArr)
  return productArr;
}

productExceptSelf([1, 2, 3, 4, 5])
