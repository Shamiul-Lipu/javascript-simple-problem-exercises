function findGrade(marks) {
    //write your code here
    //don't forget to write return
    let gradeA = 'A';
    let gradeB = 'B';
    let gradeC = 'C';
    let gradeD = 'D';
    let gradeF = 'F';

    if (marks >= 80) {
        return gradeA;
    }
    else if (marks >= 60 && marks < 80) {
        return gradeB;
    }
    else if (marks >= 50 && marks < 60) {
        return gradeC;
    }
    else if (marks >= 40 && marks < 50) {
        return gradeD;
    }
    else if (marks <= 39) {
        return gradeF;
    }

}

let input = findGrade(79);