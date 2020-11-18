/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Index.scss'
import { Tabs, Button } from 'antd'
import { TabsProps } from 'antd/lib/tabs'
import BaseInfo from 'components/base-info/Index'
import AssetsInfo from 'components/assets-info/Index'
import CreditInfo from 'components/credit-info/Index'
const { TabPane } = Tabs
interface TabInfoVO {
    title: string,
    descript: string
}
interface Props {
    stepPrevious: Function
    stepNext: Function
}
interface State {
    selectIndex: number
    activeKey: string
    tabInfVO: Array<TabInfoVO>
}

export default class Index extends Component<Props, State> {
    static defaultProps = {
        stepPrevious: () => {},
        stepNext: () => {}
    }
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            selectIndex: 0,
            activeKey: '0',
            tabInfVO: [
                {title: '基本信息完善', descript: '填写客户的的基本信息 确保信息的真实性'},
                {title: '资产情况说明', descript: '填写资产信息 并确保信息的真实性'},
                {title: '贷款信用资质', descript: '填写信用信息 并确保信息的真实性'}
            ]
        }
    }

    onClickPrevious = () => {
        let index = this.state.selectIndex
        if (index === 0) {
            this.props.stepPrevious()
        }
        if (index > 0) {
            index--
            this.setState({
                selectIndex: index,
                activeKey: index.toString()
            })
        }
    }

    onClickNext = () => {
        let index = this.state.selectIndex
        if (index === 2) {
            this.props.stepNext()
        }
        if (index < 2) {
            index++
            this.setState({
                selectIndex: index,
                activeKey: index.toString()
            })
        }
    }

    render() {
        const renderTabBar = (props: TabsProps, DefaultTabBar: React.ComponentClass<any, any>) => (
            <div></div>
        )
        return (
            <div className="tab-pane-perfect-info-container">
                <div className="perfect-info-header">
                    <div className="header-left">
                        <div className="title">{this.state.tabInfVO[this.state.selectIndex].title}</div>
                        <div className="descript">
                            <div className="dot"></div>
                            <div className="text">{this.state.tabInfVO[this.state.selectIndex].descript}</div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="step-number">{`${this.state.selectIndex + 1}`}<span className="slash-bar">/</span>3</div>
                        <div className="text">此信息已通过算法加密  请放心填写</div>
                    </div>
                </div>
                <div className="slash-block"></div>
                <div className="perfect-tabs-container">
                    {/* tabs */}
                    <Tabs activeKey={this.state.activeKey} renderTabBar={renderTabBar}>
                        <TabPane key="0">
                            <BaseInfo type={1}></BaseInfo>
                        </TabPane>
                        <TabPane key="1">
                            <AssetsInfo type={1}></AssetsInfo>
                        </TabPane>
                        <TabPane key="2">
                            <CreditInfo type={1}></CreditInfo>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="btn-groups">
                    <Button type="primary" shape="round" onClick={() => this.onClickPrevious()}>上一步</Button>
                    <Button type="primary" shape="round" onClick={() => this.onClickNext()}>下一步</Button>
                </div>
            </div>
        )
    }
}
