/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import { Pagination } from 'antd'
import OrangeSearch from 'components/orange-search/Index'
import OrangeTable from 'components/orange-table/Index'
import Product from 'components/product/Index'
import Result from 'components/result/Index'

import { ProductVO } from 'utils/global'
interface Props {
    
}

export default function Index(props: Props): ReactElement {
    /// 产品列表
    const [products, setProducts] = useState<Array<Partial<ProductVO>>>([])

    useEffect(() => {
        let productsList: Array<Partial<ProductVO>> = [
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'},
            {id: 1, name: '中信银行-薪资贷'}
        ]
        setProducts(productsList)
    }, [])

    return (
        <div className="app-module-search">
            {/* header search box */}
            <div className="search-box">
                <div className="search-box-container">
                    <OrangeSearch placeholder="搜产品 关键词"/>
                </div>
            </div>
            {/* table */}
            {
                products.length > 0 ? (
                    <OrangeTable>
                        <div className="list-products-body">
                            {
                                products.map((val, index) => (
                                    <Product key={index} product={val}/>
                                ))
                            }
                        </div>
                    </OrangeTable>
                ) : (
                    <div className="list-search-none-box">
                        <Result type="search_none"/>
                    </div>
                )
            }
            {/* footer paging */}
            <div className="list-products-footer">
                <Pagination defaultCurrent={1} total={50} hideOnSinglePage={true} />
            </div>
        </div>
    )
}
