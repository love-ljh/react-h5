/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Index.scss'
import { TagVO } from 'utils/global'

interface Props {
    title: string
    tags: Array<TagVO>
    onChange(tag: TagVO): void
}
interface State {
    selectIndex: number
}

export default class Index extends Component<Props, State> {
    static defaultProps = {
        onChange: () => {}
    }
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            selectIndex: -1
        }
    }

    onClick = (tag: TagVO, selectIndex: number) => {
        this.setState({selectIndex}, () => {
            this.props.onChange(tag)
        })
    }

    render() {
        return (
            <div className="orange-select">
                <div className="title">{this.props.title}</div>
                <div className="orange-tags">
                    {
                        this.props.tags.map((val, index) => (
                            <div
                                key={index} className={this.state.selectIndex === index ? 'orange-tag orange-tag-active': 'orange-tag'}
                                onClick={() => this.onClick(val, index)}
                            >
                                {val.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
