/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import IconArrowRight2x from './icons/icon_arrow_right@2x.png'
import IconArrowRight3x from './icons/icon_arrow_right@3x.png'
import { Popover } from 'antd'
export declare interface Options {
    value: number | string
    label: number | string
}
interface Props {
    title: string
    options: Array<Options>
    defaultValue?: number | string | undefined
    onChange?(option: Options): void
    placeholder?: string
}
export default function Index(props: Props): ReactElement {
    const [value, setValue] = useState<number | string | undefined>()
    const ICON_ARROW_RIGHT = window.devicePixelRatio >= 3 ? IconArrowRight3x : IconArrowRight2x
    const [content, setContent] = useState<React.ReactElement<any>>()
    const [selectIndex, setSelectIndex] = useState<number>(-1)
    useEffect(() => {
        if (props.options[selectIndex]) {
            setValue(props.options[selectIndex].label)
        }
        if (typeof props.onChange === 'function') {
            props.onChange(props.options[selectIndex])
        }
    }, [selectIndex])
    const [options, setOptions] = useState<Array<Options>>([])
    useEffect(() => {
        /// dynamic rendering
        const v = options.map((val, index) => (
            <li key={index} className={selectIndex === index ? 'active' : ''} onClick={() => setSelectIndex(index)}>{val.label}</li>
        ))
        const contentReactElement: ReactElement = React.createElement('ul', {className: 'orange-form-select-ul'}, v)
        setContent(contentReactElement)
    }, [options, selectIndex])
    useEffect(() => {
        setOptions(props.options)
    }, [props.options])
    useEffect(() => {
        let index = props.options.findIndex((val) => {
            return val.value === props.defaultValue
        })
        setSelectIndex(index)
    }, [props.defaultValue])
    return (
        <div className="orange-form-select">
            <div className="lable">{props.title}</div>
            <Popover overlayClassName="orange-form-select-popover" placement="bottomRight" content={content} trigger="click">
                <div className="right-box">
                    {
                        value ? (
                            <div className="value">{value}</div>
                        ) : (
                            <div className="placeholder">{props.placeholder}</div>
                        )
                    }
                    <img className="icon" src={ICON_ARROW_RIGHT} alt=""/>
                </div>
            </Popover>
        </div>
    )
}
Index.defaultProps = {
    placeholder: '请选择'
}
