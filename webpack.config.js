const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader']
            },
            {
                test:/\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        /*options:{
                            publicPath:"./"
                        }*/
                    },
                    'css-loader',
                    'sass-loader',
                    
                ]
            },
           
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
    ]
}