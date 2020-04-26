module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: {
        target: "ES6",
        strict: false,
        esModuleInterop: true
      }
    }
  }
};
