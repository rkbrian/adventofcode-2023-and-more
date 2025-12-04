const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/1
 * run code: node ./001.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        var pointerNum = 50;
        var zeroCounter = 0;
        var adder = 0;
        var direction = 1;
        lines.forEach(line => {
                direction = (line[0] == 'L' ? -1 : (line[0] == 'R' ? 1 : 0));
                adder = +(line.match(/\d+/)?.[0] ?? 0); //convert the first number string to number (int), "+" sign the fastest way
                pointerNum = (direction * adder + pointerNum + 100) % 100;
                zeroCounter += (pointerNum == 0 ? 1 : 0);
        });
        console.log(zeroCounter);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
