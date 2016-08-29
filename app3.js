//http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html

console.log('---------------------------------------------------------')
function reduce(num, den){
        var newNum = newNum || num;
        var newDen = newDen || den;
        var i = 2;
        while (i <= newNum && i <= newDen){
            if (newNum%i === 0 && newDen%i === 0){
            newNum = newNum/i;
            newDen = newDen/i;
        } else {
            i++;
        }
    };
    return newNum + ", " + newDen;
}

console.log(reduce(4,8));