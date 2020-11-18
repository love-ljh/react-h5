const path = require('path')
function pathResolve(url) {
    return path.join(__dirname, url)
}
const {
    override, addWebpackAlias, fixBabelImports, addDecoratorsLegacy, addLessLoader, addWebpackPlugin, addPostcssPlugins
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
module.exports = override(
    addWebpackAlias({
        'components': pathResolve('./src/components'),
        'utils': pathResolve('./src/utils'),
        'views': pathResolve('./src/views')
    }),
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: true // 定制主题
    }),
    addDecoratorsLegacy(),
    addLessLoader({
        // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
        lessOptions: {
            javascriptEnabled: true,
            /// 定制主题（绿色）
            modifyVars: {
                '@primary-color': '#00B45B'
            }
        }
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    addPostcssPlugins([
        require('postcss-pxtorem')({
            rootValue: 102.4,
            propWhiteList: [],
            // exclude: /node_modules/,
            mediaQuery: false,
            minPixelValue: 3
        })
    ])
    
)