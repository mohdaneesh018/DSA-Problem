Qs. 1. Print Pattern:
5 4 3 2 1 
4 3 2 1
3 2 1
2 1
1

function isPattern(n) {
    for (let i = n; i >= 1; i--) {
        let res = "";
        for (let j = i; j >= 1; j--) {
            res += j + " "
        }
        console.log(res);
    }
}
isPattern(5);






Qs. 2. Find secondLargest num in given arr:
let arr = [97, 67, 97, 76, 88, 23, 15, 36, 45];    // 88
let arr = [-20, -45, -56, -44, -1];                   // -20

function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest(arr));





Qs. 3. Find Largest num in given arr:
let arr = [97, 67, 99, 76, 88, 23, 15, 36, 45];    // 99
let arr = [-20, -45, -56, -44, -1];                // -1

function maxNumber(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber(arr));






Qs. 4. Find smallest num in given arr:
let arr = [97, 67, 99, 76, 88, 23, 15, 36, 45];     // 15
let arr = [-20, -45, -56, -44, -1];                 // -56

function minNumber(arr) {
    let min = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumber(arr));






Qs. 5. Reverse the given arr without using new var:
let arr = [1, 2, 3, 4];

function reversedArr(arr) {
    let start = 0;
    let end = arr.length - 1;

    for (let i = end; i >= start; i--) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }
    return arr;
}
console.log(reversedArr(arr));





Qs. 6. Reverse the string: 

function reversedStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed;
}
console.log(reversedStr("Mohit"));    // tihoM






Qs. 7. Reversed the number:

function reversedNum(num) {
    let reversed = 0;

    for (let i = num; i >= 0; i--) {
        if (num > 0) {
            let digit = num % 10;
            reversed = reversed * 10 + digit;
            num = Math.floor(num / 10);
        }
    }
    return reversed;
}
console.log(reversedNum(12345));       // 54321






Qs. 8. Write an program the string will be palindrome or not:
let str = "madam"     // Palindrome
let str = "abcd";     // Not Palindrome

function isPalindrome(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    if (str == reversed) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}
console.log(isPalindrome(str));






Qs. 9. Write an program the number will be palindrome or not:
let num = 12321;     // Palindrome
let num = 1245;         // Not Palindrome

function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (original == reversed) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}
console.log(isPalindrome(num));






Qs. 10 Write code the factorial:

function isFact(n) {
    let result = 1; 

    for(let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(isFact(5));        // 120

OR

function isFact(n) {
    for(let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
}
console.log(isFact(4));        // 24





Qs. 10. Write an code to remove special character or numbers only prints the alphabets:
let str = "mohit123&*^jk";

function isAlpha(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str[i];

        if (
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z")
        ) {
            result += ch;
        }
    }
    return result;
}
console.log(isAlpha(str));           // kjtihom






Qs. 11 check the arr is even or odd:
let arr = [2, 4, 6, 9, 10];

function isCheck(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i], "Even");
        } else {
            console.log(arr[i], "Odd");
        }
    }
}
isCheck(arr);

OR

function isCheck(arr) {
    let result = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(isCheck(arr));         // [2, 4, 6, 10]