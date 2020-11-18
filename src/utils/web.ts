/* eslint-disable no-unused-vars */

import {} from '../api'
import qs from 'qs'
declare global {
    interface Window {
        WebViewJavascriptBridge: any
        WVJBCallbacks: any
        JSInterface: any
        resetCity: Function
    }
}
/**
 * The Web is used everywhere
 */
export default class Web {
    /**
     * H5与原生交互: 页面跳转、跳转甲方H5、下载APK(Android)
     * @param {number} type : 
     *                      - `type == 1`, 跳转甲方H5 
     *                      - `type == 2`, 下载APK(Android)
     *                              --- 当`type === 1 || type === 2`
     *                              --- params.url 必传，跳转甲方H5的url或者下载APK的url（下载仅Android）
     *                              --- params.title 必传， 产品标题
     *                              --- params.position 必传， 产品类型枚举（目前后端还没有给我， 我先传一个默认值0）
     *                              --- params.productNumber 必传， 产品列表index（默认值0）
     *                              --- params.productId 必传， 产品ID
     *                              --- params.logo 必传， 产品logo
     *                      - `type == 3`, 首页         =>   城市页       (首页点击城市定位)
     *                      - `type == 4`, 首页         =>   贷款大全     (首页点击更多产品)
     *                      - `type == 5`, 首页         =>   详情页面     (首页点击产品详情)
     *                      - `type == 6`, 贷款大全     =>   搜索页       (贷款大全点击搜索)
     *                      - `type == 7`, 贷款大全     =>   详情页面     (贷款大全点击产品详情)
     *                      - `type == 8`, 搜索页       =>   详情页面     (搜索页点击产品详情)
     *                      - `type == 9`, 消息中心     =>   详情页面     (消息中心点击产品详情)
     *                              --- 当`type === 3-9`,也就是跳转页面的时候
     *                              --- 注意：跳转详情页面的时候
     *                              --- params.productId 必传, 你们要拼接到URL后面（&productId=1）
     *                              --- 当`type === 5 || type === 7 || type === 8 || type === 9`
     *                              --- params.source 必传, 你们要拼接到URL后面（&productId=1&source=xxx）这个source就原封不动的传给我
     *                              --- params.source = 0   初始化，无效值（不需要关心）
     *                              --- params.source = 1   来源：首页-放贷排行榜
     *                              --- params.source = 2   来源：首页-今日推荐列表
     *                              --- params.source = 3   来源：贷款大全-产品列表
     *                              --- params.source = 4   来源：搜索-搜索结果列表
     *                              --- params.source = 5   来源：消息中心-消息列表
     *                              --- params.source = 6   来源（原生）：我的收藏-产品列表
     *                              --- params.source = 7   来源（原生）：我的浏览-产品列表
     * 
     *                      - `type === 10000`  单纯的点击事件
     * 
     * @param {CallNativeParam} params 字段有就给，原生需要的参数[甲方H5的url,下载APK的url,标题,产品类型枚举,产品列表index,产品ID,产品logo]
     * @param {ActionStatisticsVO} actionStatisticsVO 行为统计需要参数(原生不需要使用)
     */
    static callNative(
        type: number,
        params: null,
        actionStatisticsVO: null
    ) {
        console.info('click call native:', type, params, actionStatisticsVO)
        /// 页面跳转, 原生交互
        if (type !== 10000) {
            if (Web.isAndroid()) {
                try {
                    window.JSInterface.jump2Page(JSON.stringify({type, params}))
                } catch (error) {
                    console.error(error)
                }
            }
            if (Web.isIOS()) {
                Web.setupWebViewJavascriptBridge(function(bridge: any) {
                    bridge.callHandler('jump2Page', {type, params})
                })
            }
        }
        // 行为点击
        if (Web.isAndroid()) {
            try {
                window.JSInterface.actionAccounting(JSON.stringify(actionStatisticsVO))
            } catch (error) {
                console.error(error)
            }
        }
        if (Web.isIOS()) {
            Web.setupWebViewJavascriptBridge(function(bridge: any) {
                bridge.callHandler('actionAccounting', actionStatisticsVO)
            })
        }
    }

    /**
     * 原生call H5, 用于城市选择
     * @param callback 回调函数
     */
    static resetCity(callback: Function) {
        if (Web.isAndroid()) {
            window.resetCity = (city: any) => {
                callback(city)
            }
        }
        if (Web.isIOS()) {
            Web.setupWebViewJavascriptBridge(function(bridge: any) {
                bridge.registerHandler('resetCity', function(city: any, responseCallback: Function) {
                    callback(city)
                    // responseCallback('hello world.')
                })
            })
        }
    }

    /**
     * 原生返回
     */
    static goback() {
        if (Web.isAndroid()) {
            try {
                window.JSInterface.goback()
            } catch (error) {
                console.error(error)
            }
        }
        if (Web.isIOS()) {
            Web.setupWebViewJavascriptBridge(function(bridge: any) {
                bridge.callHandler('goback')
            })
        }
    }

    /**
     * 登录失效返回登录页面
     */
    static relogin() {
        if (Web.isAndroid()) {
            try {
                window.JSInterface.relogin()
            } catch (error) {
                console.error(error)
            }
        }
        if (Web.isIOS()) {
            Web.setupWebViewJavascriptBridge(function(bridge: any) {
                bridge.callHandler('relogin')
            })
        }
    }

    /**
     * 消息中心未读数量与原生交互
     * @param count 未读数量
     */
    static messageCount(count: number) {
        if (Web.isAndroid()) {
            try {
                window.JSInterface.messageCount(JSON.stringify({count}))
            } catch (error) {
                console.error(error)
            }
        }
        if (Web.isIOS()) {
            Web.setupWebViewJavascriptBridge(function(bridge: any) {
                bridge.callHandler('messageCount', {count})
            })
        }
    }

    /**
     * 获取URL对象
     */
    static getObjectFromURL(): any {
        let search = window.location.href.substr(window.location.href.indexOf('?'))
        let v = qs.parse(search.substr(1))
        return v
    }

    static isAndroid() {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
    }

    static isIOS() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }

    /**
     * jsBridge
     * @callback callback ios callback
     */
    static setupWebViewJavascriptBridge(callback: Function) {
        if (window.WebViewJavascriptBridge) {
            return callback(window.WebViewJavascriptBridge)
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback)
        }
        window.WVJBCallbacks = [callback]
        var WVJBIframe = document.createElement('iframe')
        WVJBIframe.style.display = 'none'
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
        document.documentElement.appendChild(WVJBIframe)
        setTimeout(function() {
            document.documentElement.removeChild(WVJBIframe)
        }, 0)
    }

}