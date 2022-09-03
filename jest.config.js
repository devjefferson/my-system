module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
};
