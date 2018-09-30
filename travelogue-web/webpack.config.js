const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: 'development'
};