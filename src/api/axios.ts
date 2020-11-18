/* eslint-disable no-unused-vars */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'
import Web from 'utils/web'
import qs from 'qs'
console.info(process.env)
const HTTP = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: +(process.env.REACT_APP_AXIOS_TIMEOUT ?? 10000)
})

// a request interceptor
HTTP.interceptors.request.use((config: AxiosRequestConfig) => {
    // Do something before request is sent
    if (config.url !== '/product/incrProductShow') {
        message.loading('加载中...', +(process.env.REACT_APP_AXIOS_TIMEOUT ?? 10000))
    }
    return config
}, (error) => {
    // Do something with request error
    message.destroy()
    return Promise.reject(error)
})

// a response interceptor
HTTP.interceptors.response.use((response: Partial<AxiosResponse>) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    message.destroy()
    const {data} = response
    if (data.status === -1) {
        message.info(data.msg)
        return null
    }
    if (data.status === 999) {
        message.info(data.msg, 3, () => {
            Web.relogin()
        })
        return null
    }
    return data.data || data.datas
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    message.destroy()
    message.info(JSON.stringify(error))
    return Promise.reject(error)
})

const POST = (url: string, params: any) => {
    let search = window.location.href.substr(window.location.href.indexOf('?'))
    let v = qs.parse(search.substr(1), {decoder: (str: string) => {
        return str
    }})
    let os = Web.isAndroid() ? 'Android' : 'IOS'
    let data = {
        appKey: v.appKey || '1',
        os: v.os || os,
        channel: v.channel || '1',
        longitude: v.longitude,
        latitude: v.latitude,
        version: v.version || '1.0.1',
        idfa: v.idfa,
        imei: v.imei,
        oaid: v.oaid,
        deviceType: v.deviceType,
        token: v.token || 'aBQBWd9lp6oYAlFX5fzeTw==',
        data: params
    }
    return HTTP({
        method: 'POST',
        url,
        data,
        headers: { 'content-type': 'application/json' }
    })
}

export {
    HTTP,
    POST
}