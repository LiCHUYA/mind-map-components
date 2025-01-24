const esbuild = require("esbuild");
const vue = require("esbuild-plugin-vue3");
const stylePlugin = require('esbuild-style-plugin');
const fs = require("fs-extra");

async function build() {
  await esbuild.build({
    entryPoints: ["src/vue/MyComponent.vue"],
    bundle: true,
    outfile: "dist/vue.js",
    format: "esm",
    plugins: [
      vue(),
      stylePlugin({
        inject: true // 这会将 CSS 注入到 JS 中
      })
    ],
    external: ["vue"],
    minify: true,
  });

  // Build React component
  await esbuild.build({
    entryPoints: ["src/react/MyComponent.jsx"],
    bundle: true,
    outfile: "dist/react.js",
    format: "esm",
    external: ["react", "react-dom"],
    minify: true,
    plugins: [
      stylePlugin({
        inject: true
      })
    ],
  });

  // Build CJS bundle
  await esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/index.js",
    format: "cjs",
    platform: "node",
    plugins: [
      vue(),
      stylePlugin({
        inject: true
      })
    ],
  });

  // Build ESM bundle
  await esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/index.esm.js",
    format: "esm",
    platform: "node",
    plugins: [
      vue(),
      stylePlugin({
        inject: true
      })
    ],
  });
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
