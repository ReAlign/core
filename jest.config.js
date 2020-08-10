module.exports = {
  roots: [
    '<rootDir>/__test__'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testRegex: '__test__/(.+)\\.(test|spec|specs)\\.(ts)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.ts',
  ]
};