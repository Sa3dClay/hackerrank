"use strict";

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0,
        negativeCount = 0,
        zeroCount = 0,
        arrLength = arr.length;

    arr.forEach((value) => {
        switch (true) {
            case value > 0:
                positiveCount++;
                break;
            case value < 0:
                negativeCount++;
                break;
            default:
                zeroCount++;
        }
    });

    console.log(positiveCount / arrLength);
    console.log(negativeCount / arrLength);
    console.log(zeroCount / arrLength);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    plusMinus(arr);
}
