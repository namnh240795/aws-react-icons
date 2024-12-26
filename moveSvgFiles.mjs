import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDirectory = path.join(
  __dirname,
  "Asset-Package_06072024.b5d9f0b1179c4a995a3f1e42042defabb0ba0fd2"
);

const targetDirectory = path.join(__dirname, "assets");

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDirectory)) {
  fs.mkdirSync(targetDirectory);
}

function moveSvgFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.error("Unable to scan directory: " + err);
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          return console.error("Error stating file: " + err);
        }

        if (stat.isDirectory()) {
          moveSvgFiles(filePath); // Recursively search in nested folders
        } else if (path.extname(file) === ".svg") {
          const targetPath = path.join(targetDirectory, file);
          fs.rename(filePath, targetPath, (err) => {
            if (err) {
              console.error("Error moving file: " + err);
            } else {
              console.log("Moved: " + filePath + " to " + targetPath);
            }
          });
        }
      });
    });
  });
}

moveSvgFiles(sourceDirectory);
