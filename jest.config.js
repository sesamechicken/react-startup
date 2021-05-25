module.exports = {
  moduleNameMapper: {
    '\\.(css|sass|svg|png)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: ['./jest.setup.js'],
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!|react|airbnb-prop-types).*/'
  ]
};
