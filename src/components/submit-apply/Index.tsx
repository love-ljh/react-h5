/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { ReactElement, Fragment } from 'react'
import './Index.scss'
import IconReturn2x from './icons/icon_fanhui@2x.png'
import IconReturn3x from './icons/icon_fanhui@3x.png'
import Pic_1_2x from './icons/pic_1@2x.png'
import Pic_1_3x from './icons/pic_1@3x.png'
import Pic_2_2x from './icons/pic_2@2x.png'
import Pic_2_3x from './icons/pic_2@3x.png'
import Pic_3_2x from './icons/pic_3@2x.png'
import Pic_3_3x from './icons/pic_3@3x.png'
import Pic_4_2x from './icons/pic_4@2x.png'
import Pic_4_3x from './icons/pic_4@3x.png'
import Oic_1_2x from './icons/oic_1@2x.png'
import Oic_1_3x from './icons/oic_1@3x.png'
import Oic_2_2x from './icons/oic_2@2x.png'
import Oic_2_3x from './icons/oic_2@3x.png'
import Oic_3_2x from './icons/oic_3@2x.png'
import Oic_3_3x from './icons/oic_3@3x.png'
import Oic_4_2x from './icons/oic_4@2x.png'
import Oic_4_3x from './icons/oic_4@3x.png'
import Oic_5_2x from './icons/oic_5@2x.png'
import Oic_5_3x from './icons/oic_5@3x.png'
import { Form, Input, Select, Button } from 'antd'
import { Store } from 'antd/lib/form/interface'
import { PlatformType } from 'utils/global'
const { Option } = Select
interface Props {
    type: PlatformType
    stepPrevious?: Function
    stepNext?: Function
}

export default function Index(props: Props): ReactElement {
    const ICON_RETURN = window.devicePixelRatio >= 3 ? IconReturn3x : IconReturn2x
    const PIC_1 = window.devicePixelRatio >= 3 ? Pic_1_3x : Pic_1_2x
    const PIC_2 = window.devicePixelRatio >= 3 ? Pic_2_3x : Pic_2_2x
    const PIC_3 = window.devicePixelRatio >= 3 ? Pic_3_3x : Pic_3_2x
    const PIC_4 = window.devicePixelRatio >= 3 ? Pic_4_3x : Pic_4_2x
    const OIC_1 = window.devicePixelRatio >= 3 ? Oic_1_3x : Oic_1_2x
    const OIC_2 = window.devicePixelRatio >= 3 ? Oic_2_3x : Oic_2_2x
    const OIC_3 = window.devicePixelRatio >= 3 ? Oic_3_3x : Oic_3_2x
    const OIC_4 = window.devicePixelRatio >= 3 ? Oic_4_3x : Oic_4_2x
    const OIC_5 = window.devicePixelRatio >= 3 ? Oic_5_3x : Oic_5_2x
    const layout = {
        labelCol: { span: 11 },
        wrapperCol: { span: 6 }
    }
    const [form] = Form.useForm()
    const onFinish = (values: Store) => {
        console.log(values)
    }
    const onChange = (value: any) => {
        console.log(`selected ${value}`)
    }
    const goBack = () => {
        if (typeof props.stepPrevious === 'function') {
            props.stepPrevious()
        }
    }
    const goNext = () => {
        if (typeof props.stepNext === 'function') {
            props.stepNext()
        }
    }
    return (
        <div className="app-component-submit-apply">
            <img className="icon-return" src={ICON_RETURN} alt="" onClick={goBack}/>
            <img className="icon-next" src={ICON_RETURN} alt="" onClick={goNext}/>
            <div className="app-h1">请提交身份信息</div>
            <div className="custom-form">
                <Form {...layout} form={form} name="submit-apply-control-hooks" onFinish={onFinish}>
                    <Form.Item name="telphone" label="手机" rules={[{ required: true }]}>
                        <div className="custom-form-item">
                            <Input placeholder="请输入手机号码"/>
                        </div>
                    </Form.Item>
                    <Form.Item name="code" label="验证码" rules={[{ required: true }]}>
                        <div className="custom-form-item">
                            <div className="code-item-left">
                                <Input placeholder="请输入验证码"/>
                            </div>
                            <div className="code-item-right">
                                <Button className="code-button" type="primary">发送</Button>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item name="manager" label="选择业务负责人" rules={[{ required: true }]}>
                        <div className="custom-form-item">
                            <Select
                                showSearch
                                clearIcon
                                style={{ width: 200 }}
                                placeholder="请选择业务负责人"
                                optionFilterProp="children"
                                onChange={onChange}
                                filterOption={(input, option) =>
                                    option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <div className="app-footer">
                <div className="content-up-box">
                    {
                        props.type === 'ipad' ? (
                            <Fragment>
                                <div className="title">请确认二代身份证真实性</div>
                                <div className="description">确保拍摄证件的清晰完整</div>
                            </Fragment>
                        ) : props.type === 'terminal' ? (
                            <Fragment>
                                <div className="terminal-title">请按下图提示  完成身份识别</div>
                            </Fragment>
                        ) : ''
                    }
                    
                    <div className="fixed-tip">
                        <div className="dot"><div className="dot-inner"></div></div>
                        <div className="dot-name">二代身份识别</div>
                    </div>
                </div>
                <div className="content-center">
                    {
                        props.type === 'ipad' ? (
                            <Fragment>
                                <img src={PIC_1} className="pic" alt=""/>
                                <span className="divider"></span>
                                <img src={PIC_2} className="pic" alt=""/>
                                <span className="divider"></span>
                                <img src={PIC_3} className="pic" alt=""/>
                                <span className="divider"></span>
                                <img src={PIC_4} className="pic" alt=""/>
                            </Fragment>
                        ) : props.type === 'terminal' ? (
                            <Fragment>
                                <img src={OIC_1} className="oic" alt=""/>
                                <span className="divider"></span>
                                <img src={OIC_2} className="oic" alt=""/>
                                <span className="divider"></span>
                                <img src={OIC_3} className="oic" alt=""/>
                                <span className="divider"></span>
                                <img src={OIC_4} className="oic" alt=""/>
                                <span className="divider"></span>
                                <img src={OIC_5} className="oic" alt=""/>
                            </Fragment>
                        ) : ''
                    }
                    
                </div>
                <div className="content-down">
                    {
                        props.type === 'ipad' ? (
                            <Fragment>
                                <Button type="primary" shape="round" onClick={() => {}}>开始拍摄</Button>
                            </Fragment>
                        ) : props.type === 'terminal' ? (
                            <Fragment>
                                <Button type="primary" shape="round" onClick={() => {}}>开始识别</Button>
                                <Button type="primary" shape="round" onClick={() => {}}>手动录入</Button>
                            </Fragment>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}
