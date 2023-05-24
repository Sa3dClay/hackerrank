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

// Complete the freqQuery function below.
function freqQuery(queries) {
    const output = [];
    const counter = new Map();
    const freqCounter = new Map();

    for (const [operation, number] of queries) {
        if (operation === 1) {
            counter.set(number, (counter.get(number) || 0) + 1);
            freqCounter.set(
                counter.get(number),
                (freqCounter.get(counter.get(number)) || 0) + 1
            );
            freqCounter.set(
                counter.get(number) - 1,
                Math.max(0, (freqCounter.get(counter.get(number) - 1) || 0) - 1)
            );
        } else if (operation === 2) {
            if (counter.has(number) && counter.get(number) > 0) {
                counter.set(number, counter.get(number) - 1);
                freqCounter.set(
                    counter.get(number),
                    (freqCounter.get(counter.get(number)) || 0) + 1
                );
                freqCounter.set(
                    counter.get(number) + 1,
                    (freqCounter.get(counter.get(number) + 1) || 0) - 1
                );
            }
        } else if (operation === 3) {
            output.push(
                freqCounter.has(number) && freqCounter.get(number) > 0 ? 1 : 0
            );
        }
    }

    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine()
            .replace(/\s+$/g, "")
            .split(" ")
            .map((queriesTemp) => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join("\n") + "\n");

    ws.end();
}
