import node from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';

export default {
  input: [
    './src/index.js',
    './src/test.js',
    './src/harness.js',
    './src/env.js',
  ],
  output: [
    {
      dir: './dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: './dist',
      format: 'es',
    },
  ],
  external: ['zora-reporters'],
  treeshake: {
    moduleSideEffects: false, // otherwise package 'diff' from 'zora-reporters' gets included
  },
  plugins: [node(), cjs()],
};
