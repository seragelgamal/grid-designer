function randomDec(low, high) {
    return Math.random() * (high-low) + low;
}

function randomInt(low, high) {
    return Math.floor(randomDec(low, high));
}

function constrain(n, low, high) {
    if (n < low) {
        return low;
    } else if (n > high) {
        return high;
    } else {
        return n;
    }
}