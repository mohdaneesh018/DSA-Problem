function isSecond(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(isSecond([1, 2, 3, 4]));






reverse num:
function reversedNum(n) {
    let reversed = 0;

    for (let i = n; i >= 0; i--) {
        while (n > 0) {
            let digit = n % 10;
            reversed = reversed * 10 + digit;
            n = Math.floor(n / 10);
        }
    }
    return reversed;
}
console.log(reversedNum(12345));






reverse array:
function isArr(arr) {
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
console.log(isArr([2, 4, 6, 8]));





Palindrome:
function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while(num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (original == reversed) {
        return "Palindrome";
    } else {
        return "Not"
    }
}
console.log(isPalindrome(12321));





pattern:
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





Factorial:
function isFact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(isFact(6));





Write an code to remove special character or numbers only prints the alphabets:
let str = "mohit123&*^jk";

function isAlpha(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str[i];

        if (
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z")
        ) {
            reversed += ch;
        }
    }
    return reversed;
}
console.log(isAlpha(str));