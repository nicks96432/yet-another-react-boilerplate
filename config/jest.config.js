module.exports = {
    moduleNameMapper: {
        "\\.(c|le|s[ac])ss$": "identity-obj-proxy"
    },
    preset: "ts-jest",
    rootDir: "..",
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    testEnvironment: "jsdom"
};
