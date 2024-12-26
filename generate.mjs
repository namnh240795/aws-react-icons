import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, "assets");
const outputDirectory = path.join(__dirname, "aws-icons/src/aws-react-icons");

// Remove the aws-react-icons directory if it exists
if (fs.existsSync(outputDirectory)) {
  fs.rmdirSync(outputDirectory, { recursive: true });
  console.log(`Removed directory: ${outputDirectory}`);
}

// Generate React icons
exec(
  `npx @svgr/cli --out-dir ${outputDirectory} ${directory}`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    console.log(`Output: ${stdout}`);

    // Convert all generated .js files to .tsx with TypeScript props and rename files
    fs.readdir(outputDirectory, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err.message}`);
        return;
      }

      const exports = [];

      files.forEach((file) => {
        const filePath = path.join(outputDirectory, file);
        if (path.extname(file) === ".js") {
          const newFileName = file.replace(/32|48/g, "").replace(".js", ".tsx");
          const newFilePath = path.join(outputDirectory, newFileName);
          const jsContent = fs.readFileSync(filePath, "utf8");
          let componentName = path
            .basename(newFileName, ".tsx")
            .replace(/32|48/g, "");

          const tsContent = jsContent
            .replace(
              /const (\w+)/,
              `interface SvgProps extends React.SVGProps<SVGSVGElement> {}\n\nconst ${componentName}`
            )
            .replace(" = (props) => (", ": React.FC<SvgProps> = (props) => (")
            .replace(
              /export default (\w+);/,
              `export default ${componentName};`
            );

          fs.writeFileSync(newFilePath, tsContent);
          fs.unlinkSync(filePath);
          console.log(
            `Converted ${filePath} to TypeScript and renamed to ${newFilePath}`
          );

          exports.push(
            `export { default as ${componentName} } from './${componentName}';`
          );
        }
      });

      // Write index.ts file
      const indexPath = path.join(outputDirectory, "index.ts");
      fs.writeFileSync(indexPath, exports.join("\n"));
      console.log(`Generated index.ts with exports for all icons`);

      // Modify each .tsx file to remove 32, 48, Arch, and Res from export default
      files.forEach((file) => {
        const filePath = path.join(outputDirectory, file);
        if (path.extname(file) === ".tsx") {
          let content = fs.readFileSync(filePath, "utf8");
          let componentName = path.basename(file, ".tsx").replace(/32|48/g, "");
          componentName = componentName.replace(/^Arch|^Res/, "");
          content = content.replace(
            /export default (\w+);/,
            `export default ${componentName};`
          );
          fs.writeFileSync(filePath, content);
          console.log(`Modified export default in ${filePath}`);

          // Rename the file to remove Arch and Res
          const newFileName = file.replace(/^Arch|^Res/g, "");
          const newFilePath = path.join(outputDirectory, newFileName);
          fs.renameSync(filePath, newFilePath);
          console.log(`Renamed file to ${newFilePath}`);
        }
      });
    });
  }
);
