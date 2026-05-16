Qs. 1. Print Spiral Matrix:
let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
output = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
output = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];


function spiralMatrix(nums) {
    let result = [];

    let left = 0;
    let right = nums[0].length - 1;
    let top = 0;
    let bottom = nums.length - 1;

    while (left <= right && top <= bottom) {
        // left => right
        for (let i = left; i <= right; i++) {
            result.push(nums[top][i]);
        }
        top++;

        // top => bottom
        for (let i = top; i <= bottom; i++) {
            result.push(nums[i][right]);
        }
        right--;

        // right => left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(nums[bottom][i]);
            }
        }
        bottom--;

        // bottom <= top 
        for (let i = bottom; i >= top; i--) {
            result.push(nums[i][left]);
        }
        left++;
    }
    return result;
}
console.log(spiralMatrix(nums));





Qs. 2. Write a code for secondLargest of an array:
let arr = [55, 14, 98, 102, 45];    // 98

function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if(arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest(arr));





Qs. 3. Write a code for thirdLargest of an array:
let arr = [55, 14, 98, 102, 45];    // 55

function thirdLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            thirdMax = secondMax;
            secondMax = arr[i];
        } else if (arr[i] > thirdMax && arr[i] !== secondMax && arr[i] !== max) {
            thirdMax = arr[i];
        }
    }
    return thirdMax;
}
console.log(thirdLargest(arr));





Qs. 4. write a code find the largest number:
let arr = [14, 22, 25, 58, 78];        // 78

function isLargest(arr) {
    let max = arr[0];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(isLargest(arr));





Qs. 5. write a code find the smallest number:
let arr = [14, 22, 25, 58, 78];        // 14

function isSmallest(arr) {
    let min = arr[0];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(isSmallest(arr));





Qs. 6. write a code to Palindrome of a string:
let str = "madam"    // true
let str = "abcd"     // false

function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >=0; i--) {
        reversed = reversed + str[i];
    }

    if (reversed === str) {
        return true;
    } else {
        return false;
    } 
}
console.log(isPalindrome(str));