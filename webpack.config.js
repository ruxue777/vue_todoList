const path = require('path');

//导入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    //打包入口文件
    entry:'./src/main.js',
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
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }]
    },
    //插件
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    }
}