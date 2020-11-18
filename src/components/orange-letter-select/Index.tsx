/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import React, { ReactElement, PropsWithChildren, useState, useEffect, Fragment, ReactNode } from 'react'
import './Index.scss'
import { Popover } from 'antd'
import { ProductVO } from 'utils/global'
export declare enum Letter { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z }
export declare type LetterType = keyof typeof Letter
export declare type Options = Map<LetterType, Array<ProductVO>>
interface Props {
    visible: boolean
    title: string
    options?: Options
    onChange?(v: ProductVO): void
}
export default function Index(props: PropsWithChildren<Props>): ReactElement {
    const [visible, setVisible] = useState<boolean>(false)
    const [content, setContent] = useState<React.ReactElement<any>>()
    const [firstSelectIndex, setFirstSelectIndex] = useState<number>(-1)
    const [selectLetterIndex, setSelectLetterIndex] = useState<number>(-1)
    const [selectId, setSelectId] = useState<number>(-1)
    const [options, setOptions] = useState<Options>()
    const onChange = (v: ProductVO) => {
        setSelectId(v.id)
        setVisible(false)
        if (typeof props.onChange === 'function') {
            props.onChange(v)
        }
    }
    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])
    useEffect(() => {
        setSelectLetterIndex(firstSelectIndex)
    }, [firstSelectIndex])
    useEffect(() => {
        /// dynamic rendering
        const keys: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const DOM: Array<ReactNode> = []
        const IndexArray: Array<number> = []
        const leftDOM = keys.map((val, index) => {
            if (options?.has(val as LetterType)) {
                IndexArray.push(index)
                DOM.push((
                    <div className="" key={'title' + index}>
                        <div id={val} className="title">{val}</div>
                        { options !== undefined ? (
                            options.get(val as LetterType)?.map((v) => (
                                <div className={selectId === v.id ? 'li active' : 'li'} key={v.id} onClick={() => onChange(v)}>{v.name}</div>
                            ))) :  '' }
                    </div>
                ))
                return (
                    <div key={index} className={selectLetterIndex === index ? 'letter active' : 'letter'} onClick={() => setSelectLetterIndex(index)}>
                        <a href={'#' + val}>{val}</a>
                    </div>
                )
            }
            return null
        })
        setFirstSelectIndex(IndexArray[0] ?? -1)
        const rightDOM: ReactElement = React.createElement(Fragment, null, DOM)
        setContent((
            <div className="orange-letter-select-box">
                <div className="orange-letter-select-box-title">{ props.title }</div>
                <div className="orange-letter-select-box-body">
                    <div className="orange-letter-select-box-left"> { leftDOM } </div>
                    <div className="orange-letter-select-box-right"> { rightDOM } </div>
                </div>
            </div>
        ))
    }, [options, selectId, selectLetterIndex])
    useEffect(() => {
        setOptions(props.options)
    }, [props.options])
    return React.createElement(Popover, {
        visible: visible,
        overlayClassName: 'letter-select-simple-popover',
        placement: 'bottomRight',
        content: content,
        trigger: 'click'
    }, props.children)
}
