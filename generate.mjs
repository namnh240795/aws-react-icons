import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "node-html-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, "assets");
const outputDirectory = path.join(__dirname, "aws-react-icons");

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

    console.log(`Output: ${stdout}`);

    // Convert all generated .js files to .tsx with TypeScript props and rename files
    // fs.readdir(outputDirectory, (err, files) => {
    //   if (err) {
    //     console.error(`Error reading directory: ${err.message}`);
    //     return;
    //   }

    //   const exports = [];

    //   files.forEach((file) => {
    //     const filePath = path.join(outputDirectory, file);
    //     console.log(file);
    //     if (path.extname(file) === ".js") {
    //       const newFileName = file.replace(".js", ".tsx");
    //       const newFilePath = path.join(outputDirectory, newFileName);
    //       const jsContent = fs.readFileSync(filePath, "utf8");
    //       let componentName = path.basename(newFileName, ".tsx");

    //       // Get the original SVG file content
    //       // const originalSvgPath = path.join(
    //       //   directory,
    //       //   file.replace(".js", ".svg")
    //       // );

    //       // console.log(
    //       //   "originalSvgPath",
    //       //   originalSvgPath,
    //       //   file.replace(".js", ".svg").toLowerCase()
    //       // );
    //       // const originalSvgContent = fs.readFileSync(originalSvgPath, "utf8");
    //       // const root = parse(originalSvgContent);
    //       // const svgElement = root.querySelector("svg");
    //       // const viewBox = svgElement.getAttribute("viewBox");

    //       // const tsContent = jsContent
    //       //   .replace(
    //       //     /const (\w+)/,
    //       //     `interface SvgProps extends React.SVGProps<SVGSVGElement> {}\n\nconst ${componentName}`
    //       //   )
    //       //   .replace(" = (props) => (", `: React.FC<SvgProps> = (props) => (`)
    //       //   // .replace(
    //       //   //   /<svg([^>]*)>/,
    //       //   //   `<svg$1 viewBox="${viewBox}" width={${size}} height={${size}} {...props}>`
    //       //   // )
    //       //   .replace(
    //       //     /export default (\w+);/,
    //       //     `export default ${componentName};`
    //       //   );

    //       // fs.writeFileSync(newFilePath, tsContent);
    //       // fs.unlinkSync(filePath);
    //       // console.log(
    //       //   `Converted ${filePath} to TypeScript and renamed to ${newFilePath}`
    //       // );
    //       // if (componentName !== "index") {
    //       //   exports.push(
    //       //     `export { default as ${componentName} } from './${componentName}';`
    //       //   );
    //       // }
    //     }
    //   });

    //   // Write index.ts file
    //   const indexPath = path.join(outputDirectory, "index.ts");
    //   fs.writeFileSync(indexPath, exports.join("\n"));
    //   console.log(`Generated index.ts with exports for all icons`);
    // });
  }
);
