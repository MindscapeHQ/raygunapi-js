import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

const input = ["src/index.ts"];

const umdBuildConfig = {
  input,
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }), 
    nodeResolve(), 
    babel({ babelHelpers: "bundled" }), 
    terser()
  ],
  output: {
    file: `dist/umd/${pkg.name}.min.js`,
    format: "umd",
    name: `${pkg.displayName}`, // this is the name of the global object
    esModule: false,
    exports: "named",
    sourcemap: true,
  }
};

const esmCommonJsConfig = {
  input,
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }), 
    nodeResolve()
  ],
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "dist/commonjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
}

export default [umdBuildConfig, esmCommonJsConfig];