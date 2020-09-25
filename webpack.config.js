const path = require('path');

//导入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

//导入clean-webpack-plugin,CleanWebpackPlugin是对象直接解构
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    //打包入口文件
    entry:'./src/main.js',
    devServer:{
        //服务器目录
        contentBase:'./dist',
        //自动打开浏览器
        open:true
    },
    //打包出口
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    //打包规则
    module:{
        rules:[{
            test: /\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.(jpg|png|jpeg|svg)/,
            loader:'url-loader',
            options:{
                name:'[name].[ext]',
                limit:2048
            }
        },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.styl(us)?$/,
            use:[
                'vue-style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }]
    },
    //插件
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    }
}