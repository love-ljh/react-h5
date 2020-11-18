/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Index.scss'
import { Slider } from 'antd'
import { SliderValue } from 'antd/lib/slider'
interface Props {
    title: string
    unit: string
    min: number
    max: number
    onChange(value: number): void
}
interface State {
    value: number
}

export default class Index extends Component<Props, State> {
    static defaultProps = {
        unit: '次',
        min: 0,
        max: 20,
        onChange: () => {}
    }
    readonly state: Readonly<State>
    readonly marks = {
        0: {
            style: {
                color: '#333333'
            },
            label: <span>0</span>
        },
        20: {
            style: {
                color: '#333333'
            },
            label: <span>20</span>
        }
    }
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            value: this.props.min
        }
    }

    onChange = (value: SliderValue) => {
        if (typeof value === 'number') {
            this.setState({value}, () => {
                this.props.onChange(value)
            })
        }
    }

    render() {
        return (
            <div className="orange-slider">
                <div className="title">
                    {this.props.title}
                    <span className="value">{this.state.value}</span>
                    {this.props.unit}
                </div>
                <div className="orange-tags">
                    <Slider
                        className="custom-slider"
                        min={this.props.min}
                        max={this.props.max}
                        marks={this.marks}
                        included={false}
                        value={this.state.value}
                        onChange={(value: SliderValue) => this.onChange(value)}
                    />
                </div>
            </div>
        )
    }
}
