function tallestFriend(height) {
    //Write your code here
    //Don't forget to return
    let tallest = height[0];
    for (let i = 0; i < height.length; i++) {
        if (height[i] > tallest) {
            tallest = height[i];
        }
    }
    console.log(tallest);
}
let arr = [157, 135, 188];
let input = tallestFriend(arr);