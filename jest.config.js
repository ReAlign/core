module.exports = {
  roots: [
    "<rootDir>/__test__"
  ],
  testRegex: '__test__/(.+)\\.test\\.(js?|ts?)$',
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};