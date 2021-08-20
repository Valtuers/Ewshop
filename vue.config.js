module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets' //修改目录别名：相当于 /src/assets
            }
        }
    },
    publicPath: './'
}