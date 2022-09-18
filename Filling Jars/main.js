'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY operations
 */

function solve(n, m, operations) {
    let sum = 0;
    
    for(let i=0; i<m; i++) {
        sum += ((operations[i][1] - operations[i][0]) + 1) * operations[i][2];
    }
    
    return Math.floor(sum / n);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let operations = Array(m);

    for (let i = 0; i < m; i++) {
        operations[i] = readLine().replace(/\s+$/g, '').split(' ').map(operationsTemp => parseInt(operationsTemp, 10));
    }

    const result = solve(n, m, operations);

    ws.write(result + '\n');

    ws.end();
}
