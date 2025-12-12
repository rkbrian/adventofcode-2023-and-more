const { readFileSync } = require("fs");
const { join } = require("path");

/*
 * main: instruction at https://adventofcode.com/2025/day/7
 * run code: node ./007.js
 */
function main() {
    const filePath = join(__dirname, "file.txt");

    try {
        const content = readFileSync(filePath, "utf8");
        const lines = content.split(/\r?\n/);
        const splitChar = "^";
        const beamChar = "|";
        const emptyChar = ".";
        var splitedCounter = 0;
        var beamPath = lines[0].split(""); //JS string immutable, convert to array
        var sI = beamPath.indexOf("S");
        beamPath[sI] = beamChar; //Init the path of beams that not yet reach the splitters.
        for (var i = 2; i < lines.length; i += 2) {
            var splitterPath = lines[i].split("");
            for (var j = 0; j < splitterPath.length; j++) {
                if ((splitterPath[j] == splitChar) && (beamPath[j] == beamChar)) {
                    splitedCounter++;
                    if ((j > 0) && (splitterPath[j - 1] == emptyChar)) {
                        splitterPath[j - 1] = beamChar;
                    }
                    if ((j < splitterPath.length - 1) && (splitterPath[j + 1] == emptyChar)) {
                        splitterPath[j + 1] = beamChar;
                    }
                } else if (beamPath[j] == beamChar) {
                    splitterPath[j] = beamChar;
                }
            }
            beamPath = lines[i + 1].split("");
            for (var j = 0; j < lines[i].length; j++) {
                if (splitterPath[j] == beamChar) {
                    beamPath[j] = beamChar;
                }
            }
        }
        console.log(splitedCounter);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
