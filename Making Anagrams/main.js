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
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    const aMap = new Map();
    const bMap = new Map();

    a.split("").forEach((el) => aMap.set(el, aMap.get(el) + 1 || 1));
    b.split("").forEach((el) => bMap.set(el, bMap.get(el) + 1 || 1));

    a.split("").forEach((el) => {
        if (bMap.has(el)) {
            bMap.set(el, bMap.get(el) - 1);

            if (bMap.get(el) === 0) bMap.delete(el);
        }
    });
    b.split("").forEach((el) => {
        if (aMap.has(el)) {
            aMap.set(el, aMap.get(el) - 1);

            if (aMap.get(el) === 0) aMap.delete(el);
        }
    });

    let counter = 0;
    for (let [key, value] of aMap) {
        counter += value;
    }
    for (let [key, value] of bMap) {
        counter += value;
    }

    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + "\n");

    ws.end();
}
