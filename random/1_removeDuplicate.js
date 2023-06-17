// remove duplicate from an array
const array = [1, 2, 3, 4, 5, 6, 2, 7, 8, 1, 9];

let uniqueArr = [...new Set(array)];
// In this approach, we create a Set object from the array arr, which automatically removes duplicates since Set only allows unique values. We then convert the Set back to an array using the spread operator ... to obtain the final unique array.

const uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// In this approach, we iterate over each element of the array using a for...of loop. We check if the element is already present in the uniqueArr using the includes() method. If it is not present, we push it into the uniqueArr. This way, we only keep the first occurrence of each element, effectively removing duplicates.

const uniqueArrayFor = [];
for (const value of array) {
    if (!uniqueArrayFor.includes(value)) {
        uniqueArray.push(value);
    }
}
console.log(uniqueArrayFor); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// In this approach, we iterate over each element of the array using a for...of loop. We check if the element is already present in the uniqueArrFor using the includes() method. If it is not present, we push it into the uniqueArr. This way, we only keep the first occurrence of each element, effectively removing duplicates.