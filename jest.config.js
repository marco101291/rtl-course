module.exports = {
    testEnvironment: 'jest-environment-jsdom-sixteen',
    verbose: true,
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
    "preset": "ts-jest",
    "testEnvironment": "node",
    "transform": {
        "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!variables/.*)"
    ]
}
