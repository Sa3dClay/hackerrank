'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    let share = "NO";

    s1 = Array.from(new Set(s1.split(','))).toString();
    s2 = Array.from(new Set(s2.split(','))).toString();

    const maxLength = Math.max(s1.length, s2.length),
        s1Map = new Map(),
        s2Map = new Map();

    Array.from({ length: maxLength }, (_, i) => [s1[i], s2[i]])
        .forEach(([s1Element, s2Element]) => {
            if (s1Element) {
                if (s2Map.has(s1Element)) {
                    share = "YES";
                    return;
                }

                s1Map.set(s1Element, 1);
            }

            if (s2Element) {
                if (s1Map.has(s2Element)) {
                    share = "YES";
                    return;
                }

                s2Map.set(s2Element, 1);
            }
        });

    return share;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        const result = twoStrings(s1, s2);

        ws.write(result + '\n');
    }

    ws.end();
}
