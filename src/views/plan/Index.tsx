/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
interface Props {}
interface PlanVO {
    // 偿还本息
    repaymentPrincipalAndInterest?: number
    // 偿还利息
    repaymentInterest?: number
    // 偿还本金
    repaymentPrincipal?: number
    // 剩余本金
    paymentPrincipal?: number
}
export default function Index(props: Props): ReactElement {
    const [plans, setPlans] = useState<Array<PlanVO>>([])
    useEffect(() => {
        let plansList: Array<PlanVO> = []
        let randomIndex = window.parseInt((Math.random()*36).toString())
        for (let index = 0; index < 36; index++) {
            if (index <= randomIndex) {
                plansList.push({
                    repaymentPrincipalAndInterest: 4027.35,
                    repaymentInterest: 4027.35,
                    repaymentPrincipal: 4027.35,
                    paymentPrincipal: 4027.35
                })
            } else {
                plansList.push({})
            }
        }
        setPlans(plansList)
    }, [])
    return (
        <div className="app-repayment-plan">
            <div className="h2">还款计划</div>
            <div className="description">
                <span className="dots"></span>
                查看你选择的产品的还款计划
            </div>
            {/* table */}
            <div className="plan-table">
                <div className="header-h1">
                    <span className="span highlight">累计支付利息</span>
                    <span className="span">4027.35元</span>
                    <span className="span highlight">累计还款总金额</span>
                    <span className="span">104027.35元</span>
                </div>
                <div className="header-h2">
                    <span className="year-and-stage">
                        <span className="text">年度</span>
                        <span className="text">期次</span>
                    </span>
                    <span className="span">偿还本息（元）</span>
                    <span className="span">偿还利息（元）</span>
                    <span className="span">偿还本金（元）</span>
                    <span className="span">剩余本金（元）</span>
                </div>
                <div className="body-content">
                    <div className="content">
                        <div className="body-left">
                            {
                                ['第一年', '第二年', '第三年'].map((val, index) => (
                                    <div className="year-and-stage-row" key={index}>
                                        <div  className="year">
                                            <span>{val}</span>
                                        </div>
                                        <div  className="stage-box">
                                            {
                                                ['1期', '2期', '3期', '4期', '5期', '6期', '7期', '8期', '9期', '10期', '11期', '12期'].map((val, index) => (
                                                    <div key={index} className="stage">{val}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="body-right">
                            {
                                plans.map((val, index) => (
                                    <div className="plan-row" key={index}>
                                        <div className="plan">
                                            { val.repaymentPrincipalAndInterest === undefined ? '' : val.repaymentPrincipalAndInterest }
                                        </div>
                                        <div className="plan">
                                            { val.repaymentPrincipalAndInterest === undefined ? '' : val.repaymentPrincipalAndInterest }
                                        </div>
                                        <div className="plan">
                                            { val.repaymentPrincipalAndInterest === undefined ? '' : val.repaymentPrincipalAndInterest }
                                        </div>
                                        <div className="plan">
                                            { val.repaymentPrincipalAndInterest === undefined ? '' : val.repaymentPrincipalAndInterest }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
