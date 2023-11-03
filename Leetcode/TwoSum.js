// Function Definition
function twoSum(nums, target) {
    var numIndicesMap = {}; // Stores numbers and their indices
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (complement in numIndicesMap) {
            return [numIndicesMap[complement], i]; // Found a pair that adds up to the target
        }
        numIndicesMap[nums[i]] = i; // Store the current number and its index
    }
    return undefined; // If no solution is found
}
// Example usage:
var nums = [2, 7, 11, 15];
var target = 9;
// Function Call
var result = twoSum(nums, target);
if (result) {
    console.log("Indices of two numbers that add up to ".concat(target, ": [").concat(result, "]"));
}
else {
    console.log("No solution found.");
}
