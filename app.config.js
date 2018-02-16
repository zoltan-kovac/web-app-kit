const path = require('path');

const BUILD = path.resolve(__dirname, 'dist');
const DEVELOPMENT = './src';

module.exports = {

    /* Paths */
    PATH: {
        BUILD,
        DEVELOPMENT,
        JS: {
            BUILD: `${BUILD}/js`
        }
    }
};
