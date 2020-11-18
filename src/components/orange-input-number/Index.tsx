/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
interface Props {
    value?: number | undefined
    onChange?(value: number | undefined): void
    onBlur?(): void
}

export default function Index(props: Props): ReactElement {
    const [value, setValue] = useState<string>('')
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lose before zero
        let v = window.parseFloat(event.target.value)
        if (window.isNaN(v)) {
            setValue('')
        } else {
            setValue(v.toString())
        }
        if (typeof props.onChange === 'function') {
            props.onChange(window.isNaN(v) ? undefined : v)
        }
    }
    const onBlur = () => {
        if (value === '' && typeof props.onBlur === 'function') {
            props.onBlur()
        }
    }
    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value.toString())
        }
    }, [props.value])
    return (
        <div className="orange-input-number">
            <input type="number" value={value} onChange={(event) => onChange(event)} onBlur={() => onBlur()}/>
        </div>
    )
}
