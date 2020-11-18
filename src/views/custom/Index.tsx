/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import { Steps, Tabs } from 'antd'
// import { TabsProps } from 'antd/lib/tabs'
import TabPaneUse from './tab-pane-use/Index'
import TabPanePerfectInfo from './tab-pane-perfect-info/Index'
import SubmitApply from 'components/submit-apply/Index'
import Result from 'components/result/Index'
import { PlatformType } from 'utils/global'
import { useCustomQuery } from 'src/generated/graphql'
import Crypto from 'utils/crypto'
const { Step } = Steps
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
    const [stepCurrentIndex, setStepCurrentIndex] = useState<number>(0)
    const [activeKey, setActiveKey] = useState<string>('0')

    useEffect(() => {
        let platform: PlatformType = 'terminal'
        setPlatform(platform)
    }, [])

    const classifyChange = (index: number) => {
        console.info('classifyChange', index)
        stepNext()
    }

    const stepPrevious = () => {
        let index = stepCurrentIndex
        if (index > 0) {
            index--
            setStepCurrentIndex(index)
            setActiveKey(index.toString())
        }
    }

    const stepNext = () => {
        let index = stepCurrentIndex
        if (index < 3) {
            index++
            setStepCurrentIndex(index)
            setActiveKey(index.toString())
        }
    }

    // props: TabsProps, DefaultTabBar: React.ComponentClass<any, any>
    const renderTabBar = () => (
        <div></div>
    )
    return (
        <div className="app-custom">
            {/* step */}
            <div className="custom-step-box">
                <Steps size="small" current={stepCurrentIndex}>
                    <Step title="贷款用途" />
                    <Step title="完善信息" />
                    <Step title="提交审核" />
                    <Step title="协助放款" />
                </Steps>
            </div>
            {/* tabs */}
            <div className="custom-tabs-box">
                <Tabs activeKey={activeKey} renderTabBar={renderTabBar}>
                    <TabPane key="0">
                        {/* use */}
                        <TabPaneUse classifyChange={(index: number) => classifyChange(index)}></TabPaneUse>
                    </TabPane>
                    <TabPane key="1">
                        {/* fill information */}
                        <TabPanePerfectInfo stepPrevious={() => stepPrevious()} stepNext={() => stepNext()}></TabPanePerfectInfo>
                    </TabPane>
                    <TabPane key="2">
                        {/* submit apply */}
                        <SubmitApply type={platform} stepPrevious={() => stepPrevious()} stepNext={() => stepNext()} ></SubmitApply>
                    </TabPane>
                    <TabPane key="3">
                        {/* result */}
                        <Result type='success'></Result>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
