const {
    PATH
} = require('./app.config.js');

module.exports = {
    entry: {
        app: `${PATH.DEVELOPMENT}/app.js`
    },
    output: {
        filename: 'app.js',
        path: `${PATH.BUILD}/js`
    }
};
