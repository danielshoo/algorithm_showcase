const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Fs = require('fs');

const cssEntries = {};
const jsEntries = {};
const htmlEntries = {};

function recursiveReadSync(startingDirectory, files = {}) {
    
    Fs.readdirSync(Path.join(__dirname, 'frontend', startingDirectory)).forEach((file) => {
        
        if (file === 'lib') {
            return {};
        }
        
        if (Fs.lstatSync(Path.join(__dirname, 'frontend', startingDirectory, file)).isDirectory()) {
            files = Object.assign(files, recursiveReadSync(Path.join(startingDirectory, file), files));
        } else {
            files[startingDirectory + Path.sep + file] = Path.join(__dirname, 'frontend', startingDirectory, file);
        }
    });
    
    return files;
}

const jsJiles = recursiveReadSync('js');
const cssFiles = recursiveReadSync('css');
const htmlFiles = recursiveReadSync('html');

const entries = Object.assign(jsJiles, cssFiles);

htmlWebpackPlugins = Object.keys(htmlFiles).map((key) => {
    return new HtmlWebpackPlugin({
        filename: key,
        template: htmlFiles[key],
    });
});

module.exports = {
    entry: entries,
    target: 'web',
    output: {
        path: Path.resolve(__dirname, './assets'),
        filename: '[name].[contenthash].js',
    },
    plugins: [...htmlWebpackPlugins],
};
