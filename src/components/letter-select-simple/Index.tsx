/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import icon_arrow_down2x from './icons/icon_arrow_down@2x.png'
import icon_arrow_down3x from './icons/icon_arrow_down@3x.png'
import LetterSelect, { Options, LetterType } from 'components/orange-letter-select/Index'
// mock data
import Response from './mock/index'
import { ProductVO } from 'utils/global'
interface Props {
    placeholder?: string
    onChange?(v: ProductVO): void
}

export default function Index(props: Props): ReactElement {
    const [visible, setVisible] = useState<boolean>(false)
    const [options, setOptions] = useState<Options>()
    const launcher = () => {
        let data = Response.data as any
        let _options: Options = new Map<LetterType, Array<ProductVO>>()
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                _options.set(key as LetterType, data[key])
            }
        }
        setOptions(_options)
    }
    useEffect(() => {
        launcher()
    }, [])
    const ICON_ARROW_DOWN = window.devicePixelRatio >= 3 ? icon_arrow_down3x : icon_arrow_down2x
    const [value, setValue] = useState<string>()
    const onChange = (v: ProductVO) => {
        setVisible(false)
        setValue(v.name)
        if (typeof props.onChange === 'function') {
            props.onChange(v)
        }
    }
    return (
        <LetterSelect visible={visible} title="贷款产品" options={options} onChange={(v) => onChange(v)}>
            <div className="letter-select-simple" onClick={() => setVisible(!visible)}>
                <div className="left">
                    {
                        value ? value : props.placeholder
                    }
                </div>
                <img className="icon" src={ICON_ARROW_DOWN} alt=""/>
            </div>
        </LetterSelect>
    )
}

Index.defaultProps = {
    placeholder: '请选择'
}
