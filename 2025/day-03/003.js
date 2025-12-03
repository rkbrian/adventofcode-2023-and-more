const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/3
 * run code: node ./003.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        var numSum = 0;
        lines.forEach(line => {
            var numString = (line.match(/\d/g) ?? []).join("");
            var tenChar = "0";
            var tenI = 0;
            var oneChar = "0";
            for (var i = 0; i < numString.length - 1; i++) {
                if (numString[i] > tenChar) {
                    tenChar = numString[i];
                    tenI = i;
                }
            }
            for (var i = tenI + 1; i < numString.length; i++) {
                if (numString[i] > oneChar) {
                    oneChar = numString[i];
                }
            }
            numSum += ((tenChar - "0") * 10) + (oneChar - "0");
        });
        console.log(numSum);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
