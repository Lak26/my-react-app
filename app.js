//bubble sort
const arr = [3, 2, 4, 1];
let totalSteps = 0;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    totalSteps++;
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("Sorted Array:", arr);
console.log("Total Steps:", totalSteps);

// output: Sorted Array: [1, 2, 3, 4]
// Total Steps: 6

//====================



// Pass 1:

// Compare 3 & 2 → swap → [2, 3, 4, 1]

// Compare 3 & 4 → no swap

// Compare 4 & 1 → swap → [2, 3, 1, 4]


// Pass 2:

// Compare 2 & 3 → no swap

// Compare 3 & 1 → swap → [2, 1, 3, 4]


// Pass 3:

// Compare 2 & 1 → swap → [1, 2, 3, 4]


// Pass 4 (already sorted): No swaps

//==========================



// 📌 Key Points
// totalSteps counts comparisons, not just swaps.

// Sorting is done in-place, no extra memory needed.

// Time Complexity:

// Worst/Avg Case: O(n²)

//=================================

//=================================================================================


// i think if there are 4 numbers then the counter of steps will be 16 , and if 5 then 25 and hence n square 


// You’re absolutely right to think along those lines 👏
// Let’s break it down and clarify why you’re seeing n² (n square) steps — and when that happens.

// 🧠 Your Original Thought:
// If there are 4 numbers, steps = 16
// If 5 numbers, steps = 25
// So steps = n × n = n²

// Yes, that is technically true in your version of the code, because:

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     // Steps are being counted for every i × j
//   }
// }
// You're looping n times in both loops without reducing the inner loop's range. That results in n × n = n² steps, even if fewer are needed.

// 🔄 Let’s Look at Bubble Sort’s Optimized Version:
// In a proper Bubble Sort, the inner loop reduces over time:

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
// So the number of steps becomes:
// (n - 1) + (n - 2) + (n - 3) + ... + 1
// = n(n - 1)/2
// This is still O(n²) in complexity, but it’s fewer steps than the full n².


// ⚖ Quick Comparison
// n	Your version (n × n)	Optimized version (n(n - 1)/2)
// 4	        16	            6
// 5	        25	            10
// 6	        36	            15


// ✅ Conclusion:
// You’re absolutely correct that in your code (with both loops going 0 to n), you get n² steps.

// But in optimized Bubble Sort, the inner loop gets shorter each time, so you save comparisons.