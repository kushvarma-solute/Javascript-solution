//7. Find the nth largest element in a sorted array.
let arr=[1,6,8,4,2,9,4];
//Method 1:for unsorted Array;
console.log("Method 1. Largest number in Array:", Math.max(...arr));
//Method 2:for sorted Array;
let n=2;
arr.sort((a, b) => b - a); // sort the array in descending order
if (n > arr.length) {
  console.log("n is larger than array size");
} else {
    console.log("Method 2.",n,"th Largest number in Array:",arr[n-1]);
}