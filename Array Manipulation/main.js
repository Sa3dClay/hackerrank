"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

const directSolution = (n, queries) => {
    let arr = new Array(n).fill(0);

    queries.forEach((query) => {
        arr[query[0] - 1] += query[2];
        if (query[1] < n) arr[query[1]] -= query[2];
    });

    let max = 0,
        sum = 0;

    arr.forEach((value) => {
        sum += value;
        if (sum > max) max = sum;
    });

    return max;
};

function arrayManipulation(n, queries) {
    let maxNumber = 0;

    maxNumber = directSolution(n, queries);

    return maxNumber;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine()
            .replace(/\s+$/g, "")
            .split(" ")
            .map((queriesTemp) => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
