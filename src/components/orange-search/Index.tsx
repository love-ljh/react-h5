/* eslint-disable no-unused-vars */
import React, { ReactElement, useState } from 'react'
import './Index.scss'
import IconSearch2x from './icons/icon_search@2x.png'
import IconSearch3x from './icons/icon_search@3x.png'
interface Props {
    readonly?: boolean
    placeholder: string
    callback?(keywords: string): void
    readonlyCallback?(): void
}

export default function Index(props: Props): ReactElement {
    const ICON_SEARCH = window.devicePixelRatio >= 3 ? IconSearch3x : IconSearch2x
    const [keywords, setkeywords] = useState<string>('')

    const globalClick = () => {
        if (props.readonly && typeof props.readonlyCallback === 'function') {
            props.readonlyCallback()
        }
    }

    const iconClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
        if (props.readonly && typeof props.readonlyCallback === 'function') {
            props.readonlyCallback()
        } else {
            if (typeof props.callback === 'function') {
                props.callback(keywords)
            }
        }
    }



    return (
        <div className="orange-search" onClick={() => globalClick()}>
            <div className="orange-search-left"><input value={keywords} onChange={(event) => setkeywords(event.target.value)} disabled={props.readonly} className="orange-search-input" type="text" placeholder={props.placeholder}/></div>
            <div className="orange-search-right" onClick={(event) => iconClick(event)}><img className="orange-search-icon" src={ICON_SEARCH} alt=""/></div>
        </div>
    )
}
