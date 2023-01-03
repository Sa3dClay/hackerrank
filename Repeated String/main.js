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

const getCharOccurrence = (string, char) => {
    let occurrence = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) occurrence++;
    }

    return occurrence;
};

function repeatedString(s, n) {
    // solution
    let exact = n,
        count = 0,
        occurrence,
        reminder = 0;

    occurrence = getCharOccurrence(s, "a");

    if (occurrence < 1) return 0;

    while (exact % s.length !== 0) {
        exact--;
        reminder++;
    }

    count += occurrence * (exact / s.length);

    if (reminder) {
        let sReminder = s.substring(0, reminder);

        occurrence = getCharOccurrence(sReminder, "a");

        count += occurrence;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
