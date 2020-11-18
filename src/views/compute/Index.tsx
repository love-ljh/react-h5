/* eslint-disable no-unused-vars */
import React, { ReactElement, useState } from 'react'
import './Index.scss'
import LetterSelectSimple from 'components/letter-select-simple/Index'
import OrangeInput from 'components/orange-input-number/Index'
import OrangeSliderSimple from 'components/orange-slider-simple/Index'
import OrangeFormSelect, { Options } from 'components/orange-form-select/Index'
import OrangeFormInput from 'components/orange-form-input/Index'
import { Select, Button } from 'antd'
import { ProductVO } from 'utils/global'
const { Option } = Select
interface Props {}

export default function Index(props: Props): ReactElement {
    // options
    const loanStage: Array<Options> = [
        {value: 3, label: '3期'}, {value: 6, label: '6期'}, {value: 9, label: '9期'}, {value: 12, label: '12期'},
        {value: 24, label: '24期'}, {value: 36, label: '36期'}, {value: 48, label: '48期'}, {value: 60, label: '60期'},
        {value: 120, label: '120期'}, {value: 180, label: '180期'}, {value: 240, label: '240期'}, {value: 300, label: '300期'},
        {value: 360, label: '360期'}
    ]
    const paymenyMethodStage: Array<Options> = [
        {value: 1, label: '等额本息'}, {value: 2, label: '等额本金'}
    ]
    // loan money on input
    const [inputLoanMoney, setInputLoanMoney] = useState<number | undefined>(0)
    // about slider
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(3000)
    const onChangeSlider = (value: number) => {
        setInputLoanMoney(value)
    }
    const queryPaymentPlan = () => {
        console.info('apply')
    }
    const apply = () => {
        console.info('apply')
    }

    const handleChange = (value: ProductVO) => {
        console.info(value)
        let random = Math.random()
        if (random < 0.3) {
            setMin(0)
            setMax(3000)
        }
        if (random >= 0.3 && random < 0.6) {
            setMin(100)
            setMax(2000)
        }
        if (random >= 0.6) {
            setMin(2000)
            setMax(3000)
        }
    }
    const handleChangeInput = (value: number |undefined) => {
        setInputLoanMoney(value)
    }
    const handleBlurInput = () => {
        if (inputLoanMoney === undefined) {
            setInputLoanMoney(0)
        }
    }
    return (
        <div className="app-compute">
            <div className="app-compute-container">
                {/* select product */}
                <div className="select-product">
                    <span className="title">选择产品</span>
                    <div className="letter-select-box">
                        <LetterSelectSimple onChange={(v) => handleChange(v)}/>
                    </div>
                </div>
                <div className="divider"></div>
                {/* input loan money */}
                <div className="input-loan-money">
                    <div className="text">输出您的贷款金额</div>
                    <div className="input"><OrangeInput value={inputLoanMoney} onChange={(value) => handleChangeInput(value)} onBlur={() => handleBlurInput()}/></div>
                    <div className="text">万</div>
                </div>
                {/* compute and show */}
                <div className="compute-and-show">
                    <div className="item">
                        <span className="value">0</span>
                        <span className="label">贷款金额 (万)</span>
                    </div>
                    <div className="item">
                        <span className="value">0</span>
                        <span className="label">月供 (元)</span>
                    </div>
                    <div className="item">
                        <span className="value">0</span>
                        <span className="label">总利息 (元)</span>
                    </div>
                </div>
                {/* slider and select money */}
                <div className="slider-and-select-money">
                    <div className="slider-box">
                        <OrangeSliderSimple min={min} max={max} value={inputLoanMoney} onChange={(value) => onChangeSlider(value)}/>
                    </div>
                </div>
                {/* selector groups */}
                <div className="selector-groups">
                    <div className="selector-box">
                        <OrangeFormSelect title="贷款年限" defaultValue={3} options={loanStage}/>
                        <OrangeFormSelect title="还款方式" defaultValue={1} options={paymenyMethodStage}/>
                        <OrangeFormInput title="贷款年利率"/>
                    </div>
                </div>
                {/* footer button */}
                <div className="footer-button">
                    <Button className="btn" type="primary" shape="round" onClick={() => queryPaymentPlan()}>查看还款计划</Button>
                    <Button className="btn" type="primary" shape="round" onClick={() => apply()}>马上申请</Button>
                </div>
            </div>
        </div>
    )
}

