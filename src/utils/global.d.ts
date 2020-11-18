
/**
 * 平台类型
 * 注意：不排除后面会加IOS平板
 * @param {PlatformType} PlatformType.ipad      Android平板电脑
 * @param {PlatformType} PlatformType.terminal  Android终端机
 */
declare export type PlatformType = 'ipad' | 'terminal'

/**
 * 结果展示组件
 * @param {ResultType} ResultType.success               提交申请审核成功模块
 * @param {ResultType} ResultType.match_none            智能匹配没有产品模块
 * @param {ResultType} ResultType.search_none           产品搜索没有产品模块
 * @param {ResultType} ResultType.hot_products_none     产品详情热门产品没有产品
 */
declare export type ResultType = 'success' | 'match_none' | 'search_none' | 'hot_products_none'

/**
 * Tag object
 * @param {number} id
 * @param {string} name
 */
declare export interface TagVO {
    id: number
    name: string
}

/**
 * Product object
 */
declare export interface ProductVO {
    id: number
    productId: number
    logo: string
    name: string
    title: string
    link: string
    moneyMax: number
    moneyMin: number
    termMax: number
    termMin: number
    maxApplyMoney: number
    timeLimit: string
    rateDay: string
    androidApk: string
    applyUrl: string
    type: string // 1 外部链接 2内部链接 3甲方H5
    applyMoneyLimit: string
    applySpeed: string
    yearRate: number // 产品年利率
    surplusNumber?: number
    label?: Array<string>
    collect?: boolean
    picUrl: string
    fastLoanTimes?: string // 放款时间 
    fireLabel?: '新' | '热' | 0
    onlyQuota?: string // 仅剩名额
    apkAndroid: string // apk产品下载链接
    productShape: number // 产品形式，1：H5 2：APK"
}