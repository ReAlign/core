// https://typedoc.org/guides/options/

module.exports = {
  inputFiles: './src',
  mode: 'modules',
  out: 'docs',
  exclude: [
    '**/index.ts',
    '**/_.ts',
    '**/helper/*.ts',
    '**/*+(._).ts',
  ],
};