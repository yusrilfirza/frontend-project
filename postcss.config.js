/* eslint-disable global-require */
// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-import'),
        // eslint-disable-next-line import/no-extraneous-dependencies
        require('tailwindcss'),
    ],
};
