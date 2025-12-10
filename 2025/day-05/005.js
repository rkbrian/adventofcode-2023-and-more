const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/5
 * run code: node ./005.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        var separateIndex = lines.findIndex(line => line.trim() === "");
        if (separateIndex == -1) {
            console.log("Separator not found.");
            return;
        }
        var rangeStrings = lines.slice(0, separateIndex);
        var numStrings = lines.slice(separateIndex + 1);
        var freshRanges = [];
        var freshCounter = 0;
        rangeStrings.forEach(rangeString => {
            var numpair = rangeString.split("-");
            freshRanges.push([BigInt(numpair[0].match(/\d+/)?.[0] ?? 0), BigInt(numpair[1].match(/\d+/)?.[0] ?? 0)]);
        });
        numStrings.forEach(numString => {
            var num = BigInt(numString.match(/\d+/)?.[0] ?? 0);
            var isFresh = false;
            for (var i = 0; i < freshRanges.length; i++) {
                if (num >= freshRanges[i][0] && num <= freshRanges[i][1]) {
                    isFresh = true;
                    break;
                }
            }
            if (isFresh == true) {
                freshCounter++;
            }
        });
        console.log(freshCounter);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
