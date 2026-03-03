Qs. 1. Print pattern star
* * * *
* * *
* * 
*

function isPattern(n) {
    for (let i = n; i >= 1; i--) {
        let res = "";

        for (let j = 1; j <= i; j++) {
            res += "* "
        }
        console.log(res)
    } 
}
isPattern(4);





Qs. 2. Print Pattern Number
1
2 2
3 3 3 
4 4 4 4 

function isPattern(n) {
    for (let i = 1; i <= n; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += i + " "
        }
        console.log(res)
    }
}
isPattern(4);





Qs. 3. Print Pattern Number
1
1 2
1 2 3 
1 2 3 4 
1 2 3 4 5 

function isPattern(n) {
    for (let i = 1; i <= n; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += j + " "
        }
        console.log(res)
    }
}
isPattern(5);





Qs. 4. Print this pattern
1
2 3
4 5 6
7 8 9 10

function isPattern(n) {
    let num = 1

    for(let i = 1; i <= n; i++) {
        let res = " "
        for(let j = 1; j <= i; j++) {
            res += num + " ";
            num++;
        }
        console.log(res);
    } 
}
isPattern(5);