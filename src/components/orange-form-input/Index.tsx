/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import IconArrowRight2x from './icons/icon_arrow_right@2x.png'
import IconArrowRight3x from './icons/icon_arrow_right@3x.png'

interface Props {
    title: string
    value?: string
    onChange?(value: number | string | undefined): void
    placeholder?: string
}
export default function Index(props: Props): ReactElement {
    const ICON_ARROW_RIGHT = window.devicePixelRatio >= 3 ? IconArrowRight3x : IconArrowRight2x
    const [value, setValue] = useState<string>('')
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        if (typeof props.onChange === 'function') {
            props.onChange(event.target.value)
        }
    }
    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value)
        }
    }, [props.value])
    return (
        <div className="orange-form-input">
            <div className="lable">{props.title}</div>
            <div className="right-box">
                <input className="input" value={value} type="text" placeholder={props.placeholder} onChange={(event) => onChange(event)}/>
                <img className="icon" src={ICON_ARROW_RIGHT} alt=""/>
            </div>
        </div>
    )
}
Index.defaultProps = {
    placeholder: '请填写'
}
