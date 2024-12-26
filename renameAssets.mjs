import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, "assets");

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const newFileName = file.replace(/^arch-|^res-/i, "");
    const newFilePath = path.join(directory, newFileName);

    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error renaming file: ${err.message}`);
      } else {
        console.log(`Renamed ${filePath} to ${newFilePath}`);
      }
    });
  });
});
