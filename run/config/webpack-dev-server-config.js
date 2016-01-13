/**
 * Created by Spencer on 16/1/12.
 */
'use strict';
const path = require('path');
console.log(__dirname);

module.exports = {
    contentBase: path.resolve(__dirname, '../../develop/app'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'

};