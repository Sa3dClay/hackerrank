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

function getMedianx2(countArr, days) {
    let sum = 0;

    for (let i = 0; i < countArr.length; i++) {
        sum += countArr[i];

        if (sum * 2 === days) return i * 2 + 1;
        if (sum * 2 > days) return i * 2;
    }
}

function activityNotifications(debits, days) {
    let notices = 0;
    const countArr = new Array(201).fill(0);

    for (let i = 0; i < days; i++) {
        countArr[debits[i]]++;
    }

    for (let i = days; i < debits.length; i++) {
        const medianx2 = getMedianx2(countArr, days);

        if (debits[i] >= medianx2) notices++;
        if (i === debits.length - 1) break;

        countArr[debits[i - days]]--;
        countArr[debits[i]]++;
    }

    return notices;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const expenditure = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((expenditureTemp) => parseInt(expenditureTemp, 10));

    const result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
