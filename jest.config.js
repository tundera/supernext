module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  preset: 'ts-jest/presets/js-with-babel',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@providers/(.*)$': '<rootDir>/src/providers/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', '.mdx'],
  testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.vercel/'],
}
