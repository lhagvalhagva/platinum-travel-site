// // const path = require("path");

// module.exports = {
//     entry: "./app/assets/script/App.js",
//     // output: {
//     //     filename: "bundled.js",
//     //     path: path.resolve(__dirname, "app"),
//     // },
//     // mode: "development",
//     // watch: true
// };

const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./app/assets/script/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    },
    mode: "development",
    watch: true,
    plugins: [new BundleAnalyzerPlugin()],
};
