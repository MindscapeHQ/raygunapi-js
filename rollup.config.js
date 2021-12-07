/** @format */
import typescript from 'rollup-plugin-typescript2';
import {
  nodeResolve
} from "@rollup/plugin-node-resolve";
import autoNamedExports from 'rollup-plugin-auto-named-exports';
import {
  terser
} from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';

import pkg from "./package.json";

const input = ["lib/index.ts"];

const umdBuildConfig = {
  input,
  plugins: [
    json(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: "bundled"
    }),
    autoNamedExports(),
    terser()
  ],
  output: {
    file: pkg.browser,
    format: "umd",
    name: `${pkg.displayName}`, // this is the name of the global object
    esModule: false,
    exports: "named",
    sourcemap: true,
  }
};

const esmCommonJsConfigLatest = {
  input,
  output: [{
      file: pkg.main,
      name: pkg.displayName,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ['jwt-decode', 'jwtDecode'],
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    nodeResolve(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Resolve source maps to the original source
    sourceMaps(),
  ],
}

export default [umdBuildConfig, esmCommonJsConfigLatest];