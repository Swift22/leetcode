/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = Array(nums.length)
    let left = 0
    let right = nums.length - 1

    for (let i = result.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left]
            left++
        } else {
            result[i] = nums[right] * nums[right]
            right--
        }
    }
    return result
};