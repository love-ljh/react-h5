/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect, Fragment } from 'react'
import './Index.scss'
import { Tabs, Button } from 'antd'
// import { TabsProps } from 'antd/lib/tabs'
import TabPaneUse from './tab-pane-use/Index'
import BaseInfo from 'components/base-info/Index'
import AssetsInfo from 'components/assets-info/Index'
import CreditInfo from 'components/credit-info/Index'
// import SubmitApply from 'components/submit-apply/Index'
import Result from 'components/result/Index'
import MatchResult from './result/Index'
import { PlatformType, ProductVO } from 'utils/global'
import { useCustomQuery } from 'src/generated/graphql'
import Crypto from 'utils/crypto'
const { TabPane } = Tabs
interface Props {}

export default function Index(props: Props): ReactElement {

    const { data } = useCustomQuery()
    useEffect(() => {
        if (data && data.custom) {
            Crypto.launch(data.custom.a)
        }
    }, [data])

    const [platform, setPlatform] = useState<PlatformType>('ipad')
    const [activeKey, setActiveKey] = useState<string>('0')

    useEffect(() => {
        let initPlatform: PlatformType = 'terminal'
        setPlatform(initPlatform)
    }, [])

    console.info(platform)

    const [type, setType] = useState<number>(2)
    const [selectClassify, setSelectClassify] = useState<String>('')
    const classifyChange = (index: number) => {
        switch (index) {
        case 0:
            setSelectClassify('信用贷款')
            setType(2)
            break
        case 1:
            setSelectClassify('房屋抵押')
            setType(3)
            break
        case 2:
            setSelectClassify('车辆抵押')
            setType(4)
            break
        case 3:
            setSelectClassify('其他类型')
            setType(2)
            break
        default:
            break
        }
        stepNext()
    }

    const defaultDescription = '选择需要的贷款类型'
    const [description, setDescription] = useState<String>(defaultDescription)

    useEffect(() => {
        switch (activeKey) {
        case '0':
            setDescription(defaultDescription)
            break
        case '1':
            setDescription(`${selectClassify}——填写基本信息`)
            break
        case '2':
            setDescription(`${selectClassify}——填写资产信息`)
            break
        case '3':
            setDescription(`${selectClassify}——填写信用信息`)
            break
        case '4':
            setDescription(`${selectClassify}——产品匹配结果`)
            break
        default:
            break
        }
    }, [activeKey, selectClassify])

    const stepPrevious = () => {
        let index = window.parseInt(activeKey)
        if (index > 0) {
            index--
            setActiveKey(index.toString())
        }
    }

    const stepNext = () => {
        let index = window.parseInt(activeKey)
        if (index < 4) {
            index++
            setActiveKey(index.toString())
        }
    }

    /// product list
    const [products, setProducts] = useState<Array<Partial<ProductVO>>>([])
    useEffect(() => {
        setProducts([
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
        ])
    }, [])

    // props: TabsProps, DefaultTabBar: React.ComponentClass<any, any>
    const renderTabBar = () => (
        <div></div>
    )
    return (
        <div className="app-match">
            {/* step */}
            <div className="match-step-box">
                <div className="title">产品智能匹配系统</div>
                <div className="down-box">
                    <div className="steps">{ window.parseInt(activeKey) + 1 }<span className="slash">/</span>5</div>
                    <div className="description">{description}</div>
                    {
                        window.parseInt(activeKey) > 0 && window.parseInt(activeKey) < 4 ? (
                            <div className="right-description">
                                <span className="text">此信息已通过算法加密 请放心填写</span>
                                <span className="dots"></span>
                            </div>
                        ) : ''
                    }
                </div>
            </div>
            {/* tabs */}
            <div className="custom-tabs-box">
                <Tabs activeKey={activeKey} renderTabBar={renderTabBar}>
                    <TabPane key="0">
                        {/* use */}
                        <TabPaneUse classifyChange={(index: number) => classifyChange(index)}></TabPaneUse>
                    </TabPane>
                    <TabPane key="1">
                        <Fragment>
                            <div className="slash-block"></div>
                            <div className="match-container">
                                <BaseInfo type={type} />
                            </div>
                            <div className="match-footer">
                                <Button type="primary" shape="round" onClick={() => stepPrevious()}>上一步</Button>
                                <Button type="primary" shape="round" onClick={() => stepNext()}>下一步</Button>
                            </div>
                        </Fragment>
                    </TabPane>
                    <TabPane key="2">
                        <Fragment>
                            <div className="slash-block"></div>
                            <div className="match-container">
                                <AssetsInfo type={type} />
                            </div>
                            <div className="match-footer">
                                <Button type="primary" shape="round" onClick={() => stepPrevious()}>上一步</Button>
                                <Button type="primary" shape="round" onClick={() => stepNext()}>下一步</Button>
                            </div>
                        </Fragment>
                    </TabPane>
                    <TabPane key="3">
                        <Fragment>
                            <div className="slash-block"></div>
                            <div className="match-container">
                                <CreditInfo type={type} />
                            </div>
                            <div className="match-footer">
                                <Button type="primary" shape="round" onClick={() => stepPrevious()}>上一步</Button>
                                <Button type="primary" shape="round" onClick={() => stepNext()}>下一步</Button>
                            </div>
                        </Fragment>
                    </TabPane>
                    <TabPane key="4">
                        {/* result */}
                        {
                            products.length > 0 ? (
                                <MatchResult products={products} total={3}/>
                            ) : (
                                <Fragment>
                                    <div className="match-none-lash-block"></div>
                                    <Result type='match_none'></Result>
                                </Fragment>
                            )
                        }
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
