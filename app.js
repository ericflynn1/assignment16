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
