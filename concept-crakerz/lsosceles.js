function checkTriangle(side1, side2, side3) {
    //write your code here
    //don't forget to write return
    let triangleYes = 'Yes';
    let triangleNo = 'No';

    if (side1 === side2 && side1 === side3) {
        return triangleNo;
    }
    else if (side1 === side2 || side1 === side3) {
        return triangleYes;
    }
    else if (side2 === side3) {
        return triangleYes;
    }
    else {
        return triangleNo;
    }
}

let input = checkTriangle(9, 9, 9);