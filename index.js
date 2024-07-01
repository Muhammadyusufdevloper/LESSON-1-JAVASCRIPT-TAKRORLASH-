// 1. palindrome son 1231 -> false 12521 -> true 3 -> true
// function palindrome(number) {
//     let reversNumber = +number.toString().split("").reverse().join('')
//     if (number < 10) {
//         return true
//     }

//     else if (number === reversNumber) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(palindrome(1));


// function NextNumber(...number) {
//     if (number.length === 0) return 0
//     return number[number.length - 1] + number[1] - number[0]
// }
// console.log(NextNumber(10, 20, 30, 40));


// // 3. Object ichidagi sonlar yig'indisini toping foo({a:5, b:6}) -> 11 foo({a:5, b:"6", c: true}) -> 11
// function ObjSum(obj) {
//     return Object.values(obj).filter(item => +item && item !== true).reduce((sum, item) => sum + +item, 0)
// }
// console.log(ObjSum({ a: 5, b: "6", c: false }));




// // 4. Dublicate number foo(1231) -> 123 foo(112233344444) -> 1234
// function removeDuplicates(number) {
//     return Number(Array.from(new Set(number.toString().split(''))).join(''));
// }

// console.log(removeDuplicates(1122333333335555544444444n));
// console.log(removeDuplicates(1231));  

// function removeTrailingQuestionMarks(str) {
//     return str.replace(/\?+$/, '');
// }
function removeTrailingQuestionMarks(str) {
    if (!str.endsWith("?")) return str
    let arr = str.split("")
    while (arr[arr.length - 1] === "?") {
        arr.pop()
    }
    return arr.join("")
}
console.log(removeTrailingQuestionMarks("salom??"));
console.log(removeTrailingQuestionMarks("sa?lom?"));
console.log(removeTrailingQuestionMarks("??salom????????????????"));