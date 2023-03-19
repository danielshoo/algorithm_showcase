const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ChunkListWebpackPlugin = require('chunk-list-webpack-plugin');
const webpack = require('webpack');
const Path = require('path');
const Fs = require('fs');

function recursiveReadSync(startingDirectory, files = {}) {
    
    Fs.readdirSync(Path.join(__dirname, 'frontend', startingDirectory)).forEach((file) => {
        
        if (file === 'lib') {
            return {};
        }
        
        if (Fs.lstatSync(Path.join(__dirname, 'frontend', startingDirectory, file)).isDirectory()) {
            files = Object.assign(files, recursiveReadSync(Path.join(startingDirectory, file), files));
        } else {
            files[startingDirectory + Path.sep + file.replace(/\..*$/, '')] = Path.join(__dirname, 'frontend', startingDirectory, file);
        }
    });
    
    return files;
}

const jsFiles = recursiveReadSync('js');
const cssFiles = recursiveReadSync('css');
const htmlFiles = recursiveReadSync('html');

const entries = Object.assign(jsFiles, cssFiles);
console.log(entries);
htmlWebpackPlugins = Object.keys(htmlFiles).map((key) => {
    return new HtmlWebpackPlugin({
        filename: key + '.html',
        template: htmlFiles[key],
    });
});

module.exports = {
    entry: jsFiles,
    target: 'web',
    output: {
        path: Path.resolve(__dirname, './assets'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            emit: true, esModule: false
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [...htmlWebpackPlugins, new MiniCssExtractPlugin({})],
};

