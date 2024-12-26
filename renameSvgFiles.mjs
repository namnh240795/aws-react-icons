import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, "assets");

function renameSvgFiles(dir) {
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

        if (stat.isFile() && path.extname(file) === ".svg") {
          const newFileName = file.toLowerCase().replace(/_/g, "-");
          const newFilePath = path.join(dir, newFileName);
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error("Error renaming file: " + err);
            } else {
              console.log("Renamed: " + filePath + " to " + newFilePath);
            }
          });
        }
      });
    });
  });
}

renameSvgFiles(directory);
