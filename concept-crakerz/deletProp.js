const deleteProperty = (arr) => {
    // Write your code here.

    function deleteProp(arr) {
        let y = 'Yes';
        let n = 'No';
        if (arr.fname == true) {
            delete arr.fname;
            return y;
        }
        else {
            return n;
        }
    }
}