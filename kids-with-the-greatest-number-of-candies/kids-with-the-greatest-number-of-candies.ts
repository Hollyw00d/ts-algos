/*
# Kids With the Greatest Number of Candies
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

## Starting array and extra candies
*/
const arr: number[] = [2, 3, 5, 1, 3];
// Alternative:
// const arr: Array<number> = [2, 3, 5, 1, 3];
const extraCandies: number = 3;

/**
## Big O Notion for Algo Below
- Time complexity: O(n)
- Space complexity: O(n)

## Runtime per leetcode.com
67 ms 
 */
function kidsWithCandies1(candies: number[], extraCandies: number): boolean[] {
 /*
 ## Complexity for line below:
 - Time: O(n)
 - Space: O(1)
 */
 const maxNumber: number = Math.max(...candies);
 /*
 ## Complexity for line below:
 - Time: O(n)
 - Space: O(n)
 */ 
 return candies.map(num => num + extraCandies >= maxNumber );
}

console.log(kidsWithCandies1(arr, extraCandies));

/**
## Big O Notion for Algo Below
- Time complexity: O(n^2)
  - Details: For the nested `map` and `every` loops
- Space complexity: O(n)
  - For the result array

## Runtime per leetcode.com
67 ms 
 */
function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
 return candies.map((candy, i) => {
  return candies.every((childCandies, j) => {
   if (i === j) return true;

   return candy + extraCandies >= childCandies;
  })
 });
}

console.log(kidsWithCandies2(arr, extraCandies));

