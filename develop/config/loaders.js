/**
 * Created by Spencer on 16/1/12.
 */
module.exports = [
    {
        test: /\.css$/, loader: "style-loader!css-loader", include: require('path').resolve(__dirname, '../')
    },
    {
        test: /\.jsx?$/, loader: "babel-loader", include: require('path').resolve(__dirname, '../')
    }
];