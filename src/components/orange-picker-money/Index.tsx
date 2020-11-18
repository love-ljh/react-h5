import React, { Component } from 'react'
import './Index.scss'

interface PickerNumberProps {
    onChange: Function
}
interface PickerNumberState {
    visible: boolean
    value: number
    left: number
    top: number
}

class PickerNumber extends Component<PickerNumberProps, PickerNumberState> {
    readonly state: Readonly<PickerNumberState>
    readonly refValue: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
    private children: Array<Element> = []
    constructor(props: Readonly<PickerNumberProps>) {
        super(props)
        this.state = {
            visible: false,
            value: 0,
            left: 0,
            top: 0
        }
    }

    componentDidMount() {
        window.document.addEventListener('click', (event: MouseEvent) => {
            if (this.refValue && this.refValue.current) {
                this.children = []
                this.has(this.refValue.current.children)
                let has = false
                for (let index = 0; index < this.children.length; index++) {
                    const element = this.children[index]
                    if (element === event.target) {
                        has = true
                        break
                    }
                }
                if (!has) {
                    this.setState({visible: false})
                }
            }
        })
    }

    resetPosition = () => {
        if (this.refValue && this.refValue.current) {
            let rect: DOMRect = this.refValue.current.getBoundingClientRect()
            this.setState({
                left: rect.left,
                top: rect.top + rect.height + 2
            })
        }
    }

    has(children: HTMLCollection) {
        for (let index = 0; index < children.length; index++) {
            const element = children[index]
            this.children.push(element)
            if (element.children.length > 0) {
                this.has(element.children)
            }
        }
    }

    onClick = () => {
        this.resetPosition()
        this.setState({visible: true})
    }

    onClickLi = (val: number) => {
        this.setState({
            visible: false,
            value: val
        }, () => {
            this.props.onChange(val)
        })
    }

    render() {
        return (
            <div ref={this.refValue} className="orange-picker-number">
                <div className="value" onClick={() => this.onClick()}>{this.state.value}</div>
                {
                    this.state.visible ? (
                        <ul style={{
                            left: this.state.left,
                            top: this.state.top
                        }}>
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => (
                                    <li onClick={() => this.onClickLi(val)} key={index}>{index}</li>
                                ))
                            }
                        </ul>
                    ) : ''
                }
            </div>
        )
    }
}


interface Props {
    onChange(money: number): void
}
interface State {
    value1000: number
    value100: number
    value10: number
    value1: number
}

export default class Index extends Component<Props, State> {
    static defaultProps = {
        onChange: () => {}
    }
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            value1000: 0,
            value100: 0,
            value10: 0,
            value1: 0
        }
    }

    onChange = (baseNumber: number, value: number) => {
        if (baseNumber === 1000) {
            this.setState({value1000: value}, () => this.compute())
        }
        if (baseNumber === 100) {
            this.setState({value100: value}, () => this.compute())
        }
        if (baseNumber === 10) {
            this.setState({value10: value}, () => this.compute())
        }
        if (baseNumber === 1) {
            this.setState({value1: value}, () => this.compute())
        }
    }

    compute = () => {
        this.props.onChange(this.state.value1000*1000 + this.state.value100*100 + this.state.value10*10 + this.state.value1)
    }

    render() {
        return (
            <div className="orange-picker-money">
                {/* thousands */}
                <PickerNumber onChange={(value: number) => this.onChange(1000, value)}></PickerNumber>
                {/* tundreds */}
                <PickerNumber onChange={(value: number) => this.onChange(100, value)}></PickerNumber>
                {/* tens */}
                <PickerNumber onChange={(value: number) => this.onChange(10, value)}></PickerNumber>
                {/* base */}
                <PickerNumber onChange={(value: number) => this.onChange(1, value)}></PickerNumber>
            </div>
        )
    }
}
