
/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import { Slider } from 'antd'
import { SliderValue, SliderMarks } from 'antd/lib/slider'
interface Props {
    min: number
    max: number
    value: number | undefined
    onChange?(value: number): void
}
export default function Index(props: Props): ReactElement {
    const [value, setValue] = useState<number>(props.min)
    const getMarks = (): SliderMarks => {
        let marks: SliderMarks = {}
        marks[props.min] = {
            style: { color: '#333333' },
            label: React.createElement('span', null, props.min)
        }
        marks[props.max] = {
            style: { color: '#333333' },
            label: React.createElement('span', null, props.max)
        }
        return marks
    }
    const defaultMarks = getMarks()
    const [marks, setMarks] = useState<SliderMarks>(defaultMarks)
    const [min, setMin] = useState<number>(props.min)
    const [max, setMax] = useState<number>(props.max)
    const onChange = (value: SliderValue) => {
        if (typeof value === 'number') {
            setValue(value)
        }
    }
    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value)
        }
    }, [props.value])
    useEffect(() => {
        setMarks(getMarks())
        setMin(props.min)
        setMax(props.max)
        setValue(props.min)
    }, [props.min, props.max])
    useEffect(() => {
        if (typeof props.onChange === 'function') {
            props.onChange(value)
        }
    }, [value])
    return (
        <Slider
            className="orange-slider-simple"
            min={min}
            max={max}
            marks={marks}
            included={false}
            value={value}
            onChange={(value: SliderValue) => onChange(value)}
        />
    )
}

