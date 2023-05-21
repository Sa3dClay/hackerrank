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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    const pairs = {},
        triplets = {};
    let count = 0;

    for (let el of arr) {
        count += triplets[el] || 0;
        triplets[el * r] = (triplets[el * r] || 0) + (pairs[el] || 0);
        pairs[el * r] = (pairs[el * r] || 0) + 1;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + "\n");

    ws.end();
}
