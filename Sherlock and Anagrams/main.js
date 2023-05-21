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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    let count = 0;
    // hash table
    const substrings = {};

    // Generate all possible substrings
    for (let i = 0; i < s.length; i++) {
        let substring = '';

        for (let j = i; j < s.length; j++) {
            substring = substring + s[j];

            // Sort the substring and store its frequency
            const sortedSubstring = substring.split('').sort().join('');
            substrings[sortedSubstring] = substrings[sortedSubstring] || 0;
            count += substrings[sortedSubstring];
            substrings[sortedSubstring]++;
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
