/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import { Pagination } from 'antd'
import OrangeSearch from 'components/orange-search/Index'
import OrangeTable from 'components/orange-table/Index'
import Product from 'components/product/Index'
import Result from 'components/result/Index'
import Filter from './filter/Index'
import { TagVO, ProductVO } from 'utils/global'
interface Props {
    
}

enum FilterEnum {
    LOAN_TYPE,
    LOAN_MONEY,
    SELECT_LIMIT,
    USE_OBJECT
}

export default function Index(props: Props): ReactElement {
    /// 产品列表
    const [products, setProducts] = useState<Array<Partial<ProductVO>>>([])

    /// 贷款类型、贷款金额、期限选择、针对人群 
    const [loanTypeFilter, setLoanTypeFilter] = useState<Array<TagVO>>([])
    const [loanMoneyFilter, setLoanMoneyFilter] = useState<Array<TagVO>>([])
    const [selectLimitFilter, setSelectLimitFilter] = useState<Array<TagVO>>([])
    const [useObjectFilter, setUseObjectFilter] = useState<Array<TagVO>>([])

    useEffect(() => {
        let tagsLoanType: Array<TagVO> = [
            {id: 1, name: '全部'}, {id: 2, name: '信用贷款'}, {id: 3, name: '房屋抵押'}, {id: 4, name: '车辆抵押'}, {id: 5, name: '其他'}
        ]
        let tagsLoanMoney: Array<TagVO> = [
            {id: 1, name: '全部'}, {id: 2, name: '20万以内'}, {id: 3, name: '20-50万'}, {id: 4, name: '100-500万'}, {id: 5, name: '500-1000万'}, {id: 6, name: '1000万以上'}
        ]
        let tagsSelectLimit: Array<TagVO> = [
            {id: 1, name: '全部'}, {id: 2, name: '12期以内'}, {id: 3, name: '24期'}, {id: 4, name: '26期'}, {id: 5, name: '48期'}, {id: 6, name: '60期'}, {id: 7, name: '60期以上'}
        ]
        let tagsUseObject: Array<TagVO> = [
            {id: 1, name: '全部'}, {id: 2, name: '上班族'}, {id: 3, name: '私企老板'}, {id: 4, name: '其他'}
        ]
        setLoanTypeFilter(tagsLoanType)
        setLoanMoneyFilter(tagsLoanMoney)
        setSelectLimitFilter(tagsSelectLimit)
        setUseObjectFilter(tagsUseObject)
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

    const [filterLoanType, setFilterLoanType] = useState<string>()
    const [filterLoanMoney, setFilterLoanMoney] = useState<string>()
    const [filterSelectLimit, setFilterSelectLimit] = useState<string>()
    const [filterUseObject, setFilterUseObject] = useState<string>()
    const onchange = (type: FilterEnum, val: TagVO) => {
        console.info(val)
        switch (type) {
        case FilterEnum.LOAN_TYPE:
            setFilterLoanType(val.id.toString())
            break
        case FilterEnum.LOAN_MONEY:
            setFilterLoanMoney(val.id.toString())
            break
        case FilterEnum.SELECT_LIMIT:
            setFilterSelectLimit(val.id.toString())
            break
        case FilterEnum.USE_OBJECT:
            setFilterUseObject(val.id.toString())
            break
        default:
            break
        }
    }

    useEffect(() => {
        console.info(filterLoanType, filterLoanMoney, filterSelectLimit, filterUseObject)
    }, [filterLoanType, filterLoanMoney, filterSelectLimit, filterUseObject])

    const readonlyCallback = () => {
        console.info('readonlyCallback')
    }

    return (
        <div className="app-module-list">
            {/* header search box */}
            <div className="search-box">
                <div className="search-box-container">
                    <OrangeSearch readonly placeholder="搜产品 关键词" readonlyCallback={() => readonlyCallback()}/>
                </div>
            </div>
            {/* filters of product list */}
            <div className="filter-box">
                <Filter title="贷款类型：" source={loanTypeFilter} onChange={(val) => onchange(FilterEnum.LOAN_TYPE, val)}/>
                <Filter title="贷款金额：" source={loanMoneyFilter} onChange={(val) => onchange(FilterEnum.LOAN_MONEY, val)}/>
                <Filter title="期限选择：" source={selectLimitFilter} onChange={(val) => onchange(FilterEnum.SELECT_LIMIT, val)}/>
                <Filter title="针对人群：" source={useObjectFilter} onChange={(val) => onchange(FilterEnum.USE_OBJECT, val)}/>
            </div>
            {/* table */}
            <OrangeTable>
                <div className="list-products-body">
                    {
                        products.length > 0 ? (
                            products.map((val, index) => (
                                <Product key={index} product={val}/>
                            ))
                        ) : (
                            <div className="list-search-none-box">
                                <Result type="search_none"/>
                            </div>
                        )
                    }
                </div>
            </OrangeTable>
            {/* footer paging */}
            <div className="list-products-footer">
                <Pagination defaultCurrent={1} total={50} hideOnSinglePage={true} />
            </div>
        </div>
    )
}
