// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function solution(num1, num2) {
//     var answer = num1 / num2;
//     answer2 = parseInt(answer)
//     console.log(answer)
//     return answer2;
// }
// solution(7, 2)


function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) {
        answer = 1;
    }
    else {
        answer = -1;
    }
    console.log(answer)
    return answer;
}
solution(2, 3)