const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/6
 * run code: node ./006.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        var separateIndex = lines.findIndex(line => line.trim().startsWith("+") || line.trim().startsWith("*"));
        if (separateIndex == -1) {
            console.log("Separator not found.");
            return;
        }
        var numSum = 0;
        var arrOfArr = [];
        var operators = [];
        for (var i = 0; i <= separateIndex; i++) {
            if (i == separateIndex) {
                operators = lines[i].trim().split(/\s+/);
                break;
            }
            arrOfArr.push(lines[i].trim().split(/\s+/));
        }
        var longestlen = operators.length;
        for (var i = 0; i < longestlen; i++) {
            var localCalc = operators[i] == "+" ? 0 : 1;
            for (var j = 0; j < separateIndex; j++) {
                if (operators[i] == "+") {
                    localCalc += +(arrOfArr[j][i].match(/\d+/)?.[0] ?? 0);
                } else if (operators[i] == "*") {
                    localCalc *= +(arrOfArr[j][i].match(/\d+/)?.[0] ?? 0);
                }
            }
            numSum += localCalc;
        }
        console.log(numSum);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
