Qs. 1. Find Second Largest Num in an array.
function secondLargest(arr) {

    let Largest = -Infinity;
    let secLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Largest) {
            secLargest = Largest;
            Largest = arr[i];
        } else if (arr[i] > secLargest && arr[i] !== Largest) {
            secLargest = arr[i];
        }
    }
    return `SecondLargest Number is: ${secLargest}`;
}
console.log(secondLargest([10, 43, 33, 56, 22, 7]));






Qs. 2. Find Largest Num in an array.
function isLargest(arr) {
    let Largest = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > Largest) {
            Largest = arr[i]
        }
    }
    return `Largest Number is: ${Largest}`;
}
console.log(isLargest([24, 86, 200, 90, 20, 30, 18]))





Qs. 3. Print reversedString in DSA Problem.
function reversedString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
console.log(reversedString("Aneesh"));





Qs. 4. Check the string is Palindrome.
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    if (reversed == str) {
        return "Str is Palindrome"
    } else {
        return "Str doesn't Palindrome"
    }

}
console.log(isPalindrome("madam"));
console.log(isPalindrome("ratan"));






Qs. 5. Check Even or Odd Number.  
function isEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd"
    }
}
console.log(isEvenOdd(45));
console.log(isEvenOdd(46));






Qs. 6. Find Factorial number.
function isFact(num) {
    let result = 1;

    for(let i = 1; i <= num; i++) {
        result = result * i
    }
    return result;
}
console.log(isFact(4));
console.log(isFact(6));