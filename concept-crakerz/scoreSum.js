function finalScore(scores) {
    //Write your code here
    //Don't forget to return
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    console.log(sum);
}
let scores = [20, 13, 37];
let input = finalScore(scores);