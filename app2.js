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