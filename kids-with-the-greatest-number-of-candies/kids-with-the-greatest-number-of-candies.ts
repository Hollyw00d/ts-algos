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
  - Because the array is spread out with the spread operator and iterated over once
- Space complexity: O(n)
  - Because the array is spread out with the spread operator and iterated over once
*/
function kidsWithCandies1(candies: number[], extraCandies: number): boolean[] {
 const maxNumber: number = Math.max(...candies);
 return candies.map(num => num + extraCandies >= maxNumber );
}

console.log(kidsWithCandies1(arr, extraCandies));

/**
## Big O Notion for Algo Below
- Time complexity: O(n^2)
  - Details: Nested array loops (`every` inside of `map` and both loop are run on every array element)
- Space complexity: O(n)
  - For the result array
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

/**
## Big O Notion for Algo Below
- Time complexity: O(n)
  - Details: Array loops run on every item and NOT nested
- Space complexity: O(n)
  - Details: Array loops run on every item and NOT nested
*/
function kidsWithCandies3(candies: number[], extraCandies: number): boolean[] {
 let highestNum: number = -Infinity;
 const res: boolean[] = [];
 for(let i=0; i<candies.length; i++){
  if(candies[i] > highestNum){
   highestNum = candies[i];   
  }
 }
 for(let j=0; j<candies.length; j++){
  if(candies[j]+extraCandies >= highestNum){
   res.push(true);
  }
  else{
   res.push(false);
  }
 }
 return res;
}

console.log(kidsWithCandies3(arr, extraCandies));