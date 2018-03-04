const path = require('path');

module.exports = {
    PORT: 3300,

    /* Paths */
    PATH: {
        BUILD: path.resolve(__dirname, '../dist'),
        DEVELOPMENT: './src'
    }
};
