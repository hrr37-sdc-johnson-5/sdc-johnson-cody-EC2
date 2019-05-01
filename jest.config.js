module.exports = {
  "testEnvironment": "enzyme",
  "setupTestFrameworkScriptFile": "jest-enzyme",
  "transformIgnorePatterns": ['<rootDir>/node_modules/'],
  "automock": false,
  "setupFiles": [
    "./fetchMock.js"
  ]
}
