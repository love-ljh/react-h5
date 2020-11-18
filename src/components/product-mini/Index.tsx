/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react'
import './Index.scss'
import { ProductVO } from 'utils/global'
import Logo from './icons/pic_logo@3x.png'
interface Props {
    product: Partial<ProductVO>    
}
export default function Index(props: Props): ReactElement {
    return (
        <div className="app-component-product-mini">
            <img className="logo" src={Logo} alt=""/>
            <div className="content">
                <div className="box-1">
                    <span className="product-name">{props.product.name}</span>
                    <span className="product-tag">信用贷款</span>
                </div>
                <div className="box-2">
                    <span className="tag">信用贷款</span>
                    <span className="tag">无违约金</span>
                    <span className="tag">不考察</span>
                    <span className="tag">可单签</span>
                </div>
                <div className="box-3">
                    <span className="text">同一单位社保连续缴纳9个月即可</span>
                </div>
                <div className="box-4">
                    <div className="item">
                        <span className="label">额度</span>
                        <span className="value">1-100万</span>
                    </div>
                    <div className="item">
                        <span className="label">年利率</span>
                        <span className="value">0.4%</span>
                    </div>
                    <div className="item">
                        <span className="label">贷款期限</span>
                        <span className="value">12-38期</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
