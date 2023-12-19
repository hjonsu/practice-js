// https://leetcode.com/problems/two-sum/submissions/1123558682
/**
 * Attempt 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];
    if (nums.includes(number)) {
      const isIndex = (element) => element === number;
      const k = nums.findIndex(isIndex);
      if (k !== i) {
        return [i, k];
      }
    }
  }
};

// much faster solution
// https://leetcode.com/problems/two-sum/submissions/1123577059

/**
 * Attempt 2
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];
    if (obj[number]) {
      return [obj[number] - 1, i];
    }
    obj[nums[i]] = i + 1;
  }
};
