const path = require('path');

const BUILD = path.resolve(__dirname, '../dist');
const DEVELOPMENT = './src';

module.exports = {
    PORT: 3300,

    /* Paths */
    PATH: {
        BUILD,
        DEVELOPMENT,
        JS: {
            BUILD: `${BUILD}/js`
        }
    }
};
