/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react'
import './Index.scss'
interface Props {
    title: string
}

export default function Index(props: Props): ReactElement {
    return (
        <div className="orange-title">
            <div className="title">{props.title}</div>
            <div className="block"></div>
        </div>
    )
}
