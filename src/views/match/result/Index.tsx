/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react'
import './Index.scss'
import { Pagination } from 'antd'
import { ProductVO } from 'utils/global'
import IconMore2x from './icons/icon_more@2x.png'
import IconMore3x from './icons/icon_more@3x.png'
import OrangeTable from 'components/orange-table/Index'
import Product from 'components/product/Index'
interface Props {
    products: Array<Partial<ProductVO>>
    total: number
}

export default function Index(props: Props): ReactElement {

    const ICON_MORE = window.devicePixelRatio >= 3 ? IconMore3x : IconMore2x

    return (
        <div className="app-match-product-result-container">
            {/* top match result */}
            <div className="match-products-top">
                <div className="match-top-left">
                    目前有<span className="total">{props.total}</span>款产品满足您的贷款需求
                </div>
                <div className="match-top-right">
                    <span className="match-top-right-text">产品不满意？点击更换产品类型</span>
                    <img className="match-top-right-img" src={ICON_MORE} alt=""/>
                </div>
            </div>
            {/* center product lists */}
            <div className="match-products-center">
                <OrangeTable>
                    <div className="match-products-body">
                        {
                            props.products.map((val, index) => (
                                <Product key={index} product={val}/>
                            ))
                        }
                    </div>
                </OrangeTable>
            </div>
            {/* footer paging */}
            <div className="match-products-footer">
                <Pagination defaultCurrent={1} total={50} hideOnSinglePage={true} />
            </div>
        </div>
    )
}
