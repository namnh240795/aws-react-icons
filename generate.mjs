import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "node-html-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, "assets");
const outputDirectory = path.join(__dirname, "aws-icons/src/aws-react-icons");
const packageDirectory = path.join(__dirname, "icons-aws");

console.log(outputDirectory, packageDirectory);

// Remove the aws-react-icons directory if it exists
if (fs.existsSync(outputDirectory)) {
  fs.rmdirSync(outputDirectory, { recursive: true });
  console.log(`Removed directory: ${outputDirectory}`);
}

// Generate React icons
exec(
  `npx @svgr/cli --typescript --icon 32 --expand-props end --out-dir ${outputDirectory} ${directory}`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    exec(
      `cp -R ${outputDirectory}/* ${packageDirectory}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(`Error copying files: ${err.message}`);
          return;
        }

        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }

        console.log(
          `Copied files from ${outputDirectory} to ${packageDirectory}`
        );
      }
    );
  }
);
