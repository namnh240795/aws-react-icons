import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

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
    const newFileName = file
      .replace(
        /^arch-|^res-|^amazon-|^category-|^aws-|^-32|^-48|-32|-48|^Workspace|^Backup|^-|^Aws/i,
        ""
      )
      .replace(/simple-storage-service/i, "s3")
      .replace(/simple-queue-service/i, "sqs")
      .replace(/simple-notification-service/i, "sns")
      .replace(/identity-access-management/i, "iam")
      .replace(/elastic-container-service/i, "ecs")
      .replace(/database-migration-service/i, "dms")
      .replace(/elastic-kubernetes-service/i, "eks")
      .replace(/elastic-block-store/i, "ebs")
      .replace(/elastic-file-system/i, "efs")
      .replace(/elastic-load-balancing/i, "elb")
      .replace(/elastic-container-registry/i, "ecr")
      .replace(/elasticache-elasticache/i, "elasticache")
      .replace(/eks-eks/i, "eks")
      .replace(/s3-s3/g, "s3")
      .replace(/efs-efs/g, "efs");
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
