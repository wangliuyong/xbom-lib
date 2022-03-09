import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: [
        "packages/**/*.ts",
        "packages/**/*.d.ts",
        "packages/**/*.tsx",
        "packages/**/*.vue",
      ],
    }),
  ],
  
  build: {
    lib: {
      // 设置入口文件
      entry: path.resolve(__dirname, "../packages/index.ts"),
      name: "xbom-lib",
      fileName: (format: string) => `xbom-lib.${format}.js`,
      formats: ['es', 'umd'],
  
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: Object.keys(require("../package.json").peerDependencies),
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
