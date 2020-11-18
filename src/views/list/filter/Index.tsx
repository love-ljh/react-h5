/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, useEffect } from 'react'
import './Index.scss'
import { TagVO } from 'utils/global'
interface Props {
    title: string
    source: Array<TagVO>
    onChange?(val: TagVO): void
}

export default function Index(props: Props): ReactElement {
    const [selectIndex, setSelectIndex] = useState<number>(0)

    const click = (index: number) => {
        setSelectIndex(index)
    }

    useEffect(() => {
        if (typeof props.onChange === 'function' && props.source[selectIndex]) {
            props.onChange(props.source[selectIndex])
        }
    }, [selectIndex])

    return (
        <div className="component-inner-filter-type">
            <div className="label">{props.title}</div>
            {
                props.source.map((val, index) => (
                    <div className={selectIndex === index ? 'tag tag-active' : 'tag'} key={index} onClick={() => click(index)}>{val.name}</div>
                ))
            }
        </div>
    )
}
