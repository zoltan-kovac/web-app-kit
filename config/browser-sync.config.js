const {
    PATH,
    PORT
} = require('./app.config.js');

module.exports = {
    port: PORT,
    server: PATH.BUILD,
    files: [
        `${PATH.BUILD}/css/**/*.css`
    ]
};