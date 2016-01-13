/**
 * Created by Spencer on 16/1/12.
 */
module.exports = [
    {
        test: /\.css$/, loader: "style-loader!css-loader"
    },
    {
        test: /\.jsx$/, loader: "jsx-loader"
    }
];