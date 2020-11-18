import React, { Component } from 'react'
import './Index.scss'
import {
    Classify1Select2x, Classify1Select3x, Classify1Unselect2x, Classify1Unselect3x,
    Classify2Select2x, Classify2Select3x, Classify2Unselect2x, Classify2Unselect3x,
    Classify3Select2x, Classify3Select3x, Classify3Unselect2x, Classify3Unselect3x,
    Classify4Select2x, Classify4Select3x, Classify4Unselect2x, Classify4Unselect3x,
    Classify5Select2x, Classify5Select3x, Classify5Unselect2x, Classify5Unselect3x,
    Classify6Select2x, Classify6Select3x, Classify6Unselect2x, Classify6Unselect3x,
    Classify7Select2x, Classify7Select3x, Classify7Unselect2x, Classify7Unselect3x,
    Classify8Select2x, Classify8Select3x, Classify8Unselect2x, Classify8Unselect3x
} from 'utils/assets'
interface ClassifyVO {
    selected: string
    unselect: string 
}
interface Props {
    classifyChange: Function
}
interface State {
    selectIndex: number
    classifys: Array<ClassifyVO>
}

export default class Index extends Component<Props, State> {
    static defaultProps = {
        classifyChange: () => {}
    }
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            selectIndex: -1,
            classifys: [
                {
                    selected: devicePixelRatio >= 3 ? Classify1Select3x : Classify1Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify1Unselect3x : Classify1Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify2Select3x : Classify2Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify2Unselect3x : Classify2Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify3Select3x : Classify3Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify3Unselect3x : Classify3Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify4Select3x : Classify4Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify4Unselect3x : Classify4Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify5Select3x : Classify5Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify5Unselect3x : Classify5Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify6Select3x : Classify6Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify6Unselect3x : Classify6Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify7Select3x : Classify7Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify7Unselect3x : Classify7Unselect2x
                },
                {
                    selected: devicePixelRatio >= 3 ? Classify8Select3x : Classify8Select2x,
                    unselect: devicePixelRatio >= 3 ? Classify8Unselect3x : Classify8Unselect2x
                }
            ]
        }
    }

    onClick = (index: number) => {
        this.setState({selectIndex: index}, () => {
            this.props.classifyChange(index)
        })
    }

    render() {
        return (
            <div className="tab-pane-use-container">
                <div className="title">贷款用途选择</div>
                <div className="descript">
                    <div className="dot"></div>
                    <div className="text">根据实际需求情况  选择对应的贷款用途</div>
                </div>
                <div className="box">
                    {
                        this.state.classifys.map((val, index) => (
                            <div className="classify" key={index} onClick={() => this.onClick(index)}>
                                {
                                    this.state.selectIndex === index ? (
                                        <img className="image" src={val.selected} alt=""/>
                                    ) : <img className="image" src={val.unselect} alt=""/>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
