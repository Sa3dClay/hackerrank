'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const getMinSwapsWithBackCalling = (arr) => {
    let result = 0,
        temp, x, y;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) continue;

        x = arr[i];
        y = arr[arr[i] - 1];

        temp = x;
        arr[i] = y;
        arr[temp - 1] = temp;

        result++;
        i--;
    }

    return result;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let minSwaps = 0;

    minSwaps = getMinSwapsWithBackCalling(arr);

    return minSwaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
