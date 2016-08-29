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