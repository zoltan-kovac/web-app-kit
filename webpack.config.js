const {
    PATH
} = require('./config.js');

module.exports = {
    entry: {
        app: `${PATH.DEVELOPMENT}/app.js`
    },
    output: {
        filename: 'app.js',
        path: PATH.BUILD
    }
};
