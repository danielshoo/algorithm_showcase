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

const entries = {
    'backend/server': "./backend/server.ts"
};

module.exports = {
    entry: entries,
    target: 'node',
    output: {
        filename: '[name].js',
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx|cjs|mjs)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                    },
                },
                exclude: /node_modules/,
            }
        ],
    }
}