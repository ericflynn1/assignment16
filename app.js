function longx(words) {
    let string = words.split("");
    let count = 0;
    let biggun = 0;

    for (let i = 0; i < string.length; i++) {
        if ("x" === string[i]) {
            count = count + 1;
        }
        else {
            if (count > biggun) {
                biggun = count;
            }
            count = 0;
        }
    }
    return biggun;
}

console.log(longx('xxrcxxxxh'));
console.log('--------------------------------------------------');
function longest(word) {
    let x = word.split("");
    let biggun = {};
    for (let i = 0; i < x.length; i++) {
        if (biggun.hasOwnProperty(x[i]) === false) {
            biggun[x[i]] = 1
        }
        else {
            biggun[x[i]] = biggun[x[i]] + 1;
        }
    }
console.log(biggun);
    let count = 0;
    for (let thing in biggun) {
        if (biggun[thing] > count) {
            count = biggun[thing];
        }
    }
    return count;
}
console.log(longest('xxxcxcxx'));

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

function celebrity(arrayOfCelebrities) {
    let tally = [];
    for (let i = 0; i < arrayOfCelebrities.length; i++) {
        for (let j = arrayOfCelebrities[i].birth; j <= arrayOfCelebrities[i].death; j++ ) {
            tally.push(j);
        }        
        
    }
    tally.sort();
    console.log(tally);
    let biggun = 0;
    let current = 0;
    let currentYear = tally[0];
    for (let i = 0; i < tally.length; i++){
        if (tally[i] === currentYear) {
            current++;
        } else { 
            if (current > biggun) {
                biggun = current;
            }
            current = 1;
        }
        currentYear = tally[i];
    }
    return biggun;
}