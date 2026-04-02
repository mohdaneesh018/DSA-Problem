1. Find Second Largest:

function secondLargest(arr) {
    let largest = -Infinity;
    let secondMax = -Infinity;

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] > largest) {
            secondMax = largest;
            largest = arr[i];
        } else if(arr[i] > secondMax && arr[i] !== largest) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest([15, 20, 44, 78, 12]));






2. Reversed array without new variable:

let arr = [1, 2, 3, 4];
function reversedArr(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
    return arr;
}
console.log(reversedArr(arr));






3. Print factorial:
 
function isFact(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(isFact(5));

OR

function isFact(n) {
    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
}
console.log(isFact(4));





4. Print Palindrome:

function isPalindrome(str) {
    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];

        if (str[i] == reversed) {
            return "Palindrome";
        } else {
            return "Not Palindrome";
        }
    }
    return reversed;
}
console.log(isPalindrome("madam"));






5. Reversed the number:
let num = 123;

function isReversed(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(isReversed(num));