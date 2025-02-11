import { defineConfig } from "@rslib/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  lib: [
    {
      format: "esm",
      dts: true,
      output: {
        distPath: {
          root: "./dist/esm",
        },
      },
    },
    {
      format: "cjs",
      dts: true,
      output: {
        distPath: {
          root: "./dist/cjs",
        },
      },
    },
  ],
  output: {
    target: "web",
    assetPrefix: "auto", // TODO: move this line to packages/core/src/asset/assetConfig.ts
  },
  plugins: [pluginReact()],
});
