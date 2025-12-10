const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/2
 * run code: node ./002.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(",");
        var numSum = 0n;
        var startId = 0n;
        var endId = 0n;
        lines.forEach(line => {
            var ids = line.split("-");
            startId = BigInt(ids[0].match(/\d+/)?.[0] ?? 0); //convert the number string to bigint
            endId = BigInt(ids[1].match(/\d+/)?.[0] ?? 0);
            for (var i = startId; i <= endId; i++) {
                var iString = i.toString();
                var iLen = iString.length;
                var j = 0;
                var digitMatch = 0;
                while (iLen % 2 == 0 && j < iLen / 2) {
                    //count matching digits to find if the id is dup sequence all the way
                    digitMatch += (iString[j] == iString[j + (iLen / 2)] ? 1 : 0);
                    j++;
                }
                if (digitMatch > 0 && digitMatch == iLen / 2) {
                    numSum += i;
                }
            }
        });
        console.log(numSum.toString());
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
