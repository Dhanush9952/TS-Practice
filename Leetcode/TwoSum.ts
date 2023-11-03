// Function Definition
function twoSum(nums: number[], target: number): number[] | undefined {
    const numIndicesMap: Record<number, number> = {}; // Stores numbers and their indices
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numIndicesMap) {
        return [numIndicesMap[complement], i]; // Found a pair that adds up to the target
      }
      numIndicesMap[nums[i]] = i; // Store the current number and its index
    }
    
    return undefined; // If no solution is found
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  // Function Call
  const result = twoSum(nums, target);
  
  if (result) {
    console.log(`Indices of two numbers that add up to ${target}: [${result}]`);
  } else {
    console.log("No solution found.");
  }
  
  export{}