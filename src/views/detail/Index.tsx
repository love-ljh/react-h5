/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import OrangeTitle from 'components/orange-title/Index'
import Logo from './icons/logo@3x.png'
import { Button } from 'antd'
import icon_compute_2x from './icons/icon_compute@2x.png'
import icon_compute_3x from './icons/icon_compute@3x.png'
import icon_pk_2x from './icons/icon_pk@2x.png'
import icon_pk_3x from './icons/icon_pk@3x.png'
import PIC_1_2x from './icons/icon_cheliangfangwu@2x.png'
import PIC_1_3x from './icons/icon_cheliangfangwu@3x.png'
// import PIC_2_2X from './icons/icon_xiunyongqita@2x.png'
// import PIC_2_3X from './icons/icon_xiunyongqita@3x.png'
import PIC_AD_UP_2X from './icons/pic_up@2x.png'
import PIC_AD_UP_3X from './icons/pic_up@3x.png'
import PIC_AD_DOWN_2X from './icons/pic_down@2x.png'
import PIC_AD_DOWN_3X from './icons/pic_down@3x.png'
import ProductMini from 'components/product-mini/Index'
import Result from 'components/result/Index'
import { ProductVO } from 'utils/global'
interface Props {}

export default function Index(props: Props): ReactElement {
    const ICON_COMPUTE = window.devicePixelRatio >= 3 ? icon_compute_3x : icon_compute_2x
    const ICON_PK = window.devicePixelRatio >= 3 ? icon_pk_3x : icon_pk_2x
    const ICON_TYPE_1 = window.devicePixelRatio >= 3 ? PIC_1_3x : PIC_1_2x
    // const ICON_TYPE_2 = window.devicePixelRatio >= 3 ? PIC_2_3X : PIC_2_2X
    const PIC_AD_UP = window.devicePixelRatio >= 3 ? PIC_AD_UP_3X : PIC_AD_UP_2X
    const PIC_AD_DOWN = window.devicePixelRatio >= 3 ? PIC_AD_DOWN_3X : PIC_AD_DOWN_2X
    /// 热门产品列表
    const [products, setProducts] = useState<Array<Partial<ProductVO>>>([])

    useEffect(() => {
        let productsList: Array<Partial<ProductVO>> = [
            {id: 1, name: '中信银行-薪资贷'},
            {id: 2, name: '中信银行-薪资贷'},
            {id: 3, name: '中信银行-薪资贷'},
            {id: 4, name: '中信银行-薪资贷'},
            {id: 5, name: '中信银行-薪资贷'}
        ]
        setProducts(productsList)
    }, [])

    const apply = () => {
        console.info('apply')
    }
    return (
        <div className="app-detail">
            {/* header */}
            <div className="detail-header">
                <div className="product-info-up-box">
                    <img className="logo" src={Logo} alt=""/>
                    <div className="content">
                        <div className="box-1">
                            <span className="product-name">中信银行-薪资贷</span>
                            <span className="product-tag">信用贷款</span>
                        </div>
                        <div className="box-2">
                            <span className="tag">无违约金</span>
                            <span className="tag">不考察</span>
                            <span className="tag">可单签</span>
                        </div>
                        <div className="box-3">
                            <span className="text">同一单位社保连续缴纳9个月即可</span>
                        </div>
                        <div className="box-4">
                            <img className="icon1" src={ICON_COMPUTE} alt=""/>
                            <img className="icon2" src={ICON_PK} alt=""/>
                        </div>
                    </div>
                    <Button className="btn" type="primary" shape="round" onClick={() => apply()}>马上申请</Button>
                </div>
                <div className="product-info-down-box">
                    <div className="item">
                        <span className="label">额度：</span>
                        <span className="value">1-100万</span>
                    </div>
                    <div className="item">
                        <span className="label">年利率：</span>
                        <span className="value">0.4%</span>
                    </div>
                    <div className="item">
                        <span className="label">贷款期限：</span>
                        <span className="value">12-38期</span>
                    </div>
                </div>
            </div>
            {/* notice block */}
            <div className="detail-notice-block">
                <div className="backgroud"></div>
                <div className="content">
                    <div className="block">
                        <span className="h1">信息透明</span>
                        <span className="h2">拒绝信息不对称，保障产品无猫腻</span>
                    </div>
                    <div className="block">
                        <span className="h1">收费透明</span>
                        <span className="h2">拒绝黑中介，收费标准公开、透明</span>
                    </div>
                    <div className="block">
                        <span className="h1">服务透明</span>
                        <span className="h2">标准化服务流程，用户看得见</span>
                    </div>
                    <div className="block">
                        <span className="h1">隐私保障</span>
                        <span className="h2">拒绝信息透漏，坚决保护用户个人隐私</span>
                    </div>
                </div>
            </div>
            {/* detail content */}
            <div className="detail-content">
                <div className="detail-content-left">
                    {/* product detail */}
                    <div className="product-detail">
                        <OrangeTitle title="产品详情"/>
                        {/* payment methods */}
                        <div className="payment-methods">
                            <span className="label">还款方式：</span>
                            <span className="value">等额本息</span>
                            <span className="btn">切换</span>
                        </div>
                        {/* payment methods description */}
                        <div className="payment-methods-description">
                            <div className="title">还款方式说明：</div>
                            <p className="p">借款人每月按相等的金额偿还贷款本息，其中每月贷款利息按月初剩余贷款本金计算 并逐月结清。</p>
                        </div>
                        {/* advantages and disadvantages */}
                        <div className="advantages-and-disadvantages">
                            <p className="p">
                                <strong>优劣势：</strong> 每月还款额相同，方便安排收支，适合经济条件不允许前期还款投入过大收入处于较稳定状态的借款人。
                                缺点是需要付出更多的利息。不过前期所还的金额大部分为利息，还款年限过半后本金的比例才增加，不合适提前还款。
                            </p>
                        </div>
                        {/* divider line */}
                        <div className="divider-line"></div>
                        {/* time limit of loan */}
                        <div className="time-limit">
                            <div className="title">放款时效：<span className="text">T1</span></div>
                            <p className="p">借款人每月按相等的金额偿还贷款本息，其中每月贷款利息按月初剩余贷款本金计算并逐月结清。
                            每月还款额相同，方便安排收支，适合经济条件不允许前期还款投入过大收入处于较稳定状态的借款人。
                            </p>
                        </div>
                    </div>
                    {/* apply progress */}
                    <div className="apply-progress">
                        <OrangeTitle title="产品流程"/>
                        <div className="icon-box">
                            <img src={ICON_TYPE_1} alt=""/>
                        </div>
                    </div>
                    {/* apply material */}
                    <div className="apply-material">
                        <OrangeTitle title="产品资料"/>
                        <div className="item">
                            <div className="title">身份证</div>
                            <div className="text">(有效期内的二代身份证原件）</div>
                        </div>
                        <div className="item">
                            <div className="title">结婚证</div>
                            <div className="text">（已婚人士需提供结婚证原件)</div>
                        </div>
                        <div className="item">
                            <div className="title">房产证</div>
                            <div className="text">（需提供红本房产证原件及证明）</div>
                        </div>
                    </div>
                </div>
                <div className="detail-content-right">
                    {/* ad */}
                    <div className="ad">
                        <img className="pic-1" src={PIC_AD_UP} alt=""/>
                        <img className="pic-2" src={PIC_AD_DOWN} alt=""/>
                    </div>
                    {/* hot products */}
                    <div className="hot-products">
                        <OrangeTitle title="热门产品"/>
                        <div className="content-box">
                            {
                                products.length > 0 ? (
                                    products.map((val, index) => (
                                        <ProductMini key={index} product={val}/>
                                    ))
                                ) : (
                                    <div className="list-search-none-box">
                                        <Result type="hot_products_none"/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* detail footer */}
            <div className="detail-footer">
                <Button className="btn" type="primary" shape="round" onClick={() => apply()}>马上申请</Button>
            </div>
        </div>
    )
}

