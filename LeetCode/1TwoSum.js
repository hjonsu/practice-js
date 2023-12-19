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
