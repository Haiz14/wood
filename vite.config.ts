import { sync } from "glob";
import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: "./src",
  base: "./",
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
		rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
});
