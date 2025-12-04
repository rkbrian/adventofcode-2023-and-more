const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/4
 * run code: node ./004.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        var neighborCount = 0;
        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < lines[i].length; j++) {
                if (lines[i][j] == "@") {
                    neighborCount += neighborCounter(lines, i, j);
                }
            }
        };
        console.log(neighborCount);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

function neighborCounter(table, i, j) {
    var counter = 0;
    for (var neighborI = -1; neighborI <= 1; neighborI++) {
        for (var neighborJ = -1; neighborJ <= 1; neighborJ++) {
            if (neighborI == 0 && neighborJ == 0) continue; //skip center item
            var nI = i + neighborI;
            var nJ = j + neighborJ;
            if (nI < 0 || nJ < 0 || nI >= table.length || nJ >= table[i].length) continue; //out of border
            if (table[nI][nJ] == "@") {
                counter++;
            }
            if (counter >= 4) return 0;
        }
    }
    return (counter >= 4 ? 0 : 1);
}

main();
