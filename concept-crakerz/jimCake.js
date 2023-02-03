function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
    //Write your code here
    //Don't forget to return
    let jimWon = 'Jim';
    let delaWon = 'Dela';
    let chinkuWon = 'Chinku';

    if (marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
        return delaWon;
    }
    else if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
        return jimWon;
    }
    else {
        return chinkuWon;
    }
}

let input = JimOrDelaOrChinku(84, 99, 77);

