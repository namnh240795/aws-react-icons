import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(
  __dirname,
  "Asset-Package_06072024.b5d9f0b1179c4a995a3f1e42042defabb0ba0fd2"
);

function deletePngFiles(dir) {
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
          if (
            file.includes("16") ||
            file.includes("48") ||
            file.includes("64")
          ) {
            fs.rmdir(filePath, { recursive: true }, (err) => {
              if (err) {
                console.error("Error deleting directory: " + err);
              } else {
                console.log("Deleted directory: " + filePath);
              }
            });
          } else {
            deletePngFiles(filePath); // Recursively search in nested folders
          }
        } else if (path.extname(file) === ".png") {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting file: " + err);
            } else {
              console.log("Deleted: " + filePath);
            }
          });
        }
      });
    });
  });
}

deletePngFiles(directory);
