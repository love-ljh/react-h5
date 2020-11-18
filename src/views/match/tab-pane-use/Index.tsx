import React, { Component } from 'react'
import './Index.scss'
import {
    Icon1Unselect2x, Icon1Unselect3x, Icon1Selected2x, Icon1Selected3x,
    Icon2Unselect2x, Icon2Unselect3x, Icon2Selected2x, Icon2Selected3x,
    Icon3Unselect2x, Icon3Unselect3x, Icon3Selected2x, Icon3Selected3x,
    Icon4Unselect2x, Icon4Unselect3x, Icon4Selected2x, Icon4Selected3x
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
                    selected: window.devicePixelRatio >= 3 ? Icon1Selected3x : Icon1Selected2x,
                    unselect: window.devicePixelRatio >= 3 ? Icon1Unselect3x : Icon1Unselect2x
                },
                {
                    selected: window.devicePixelRatio >= 3 ? Icon2Selected3x : Icon2Selected2x,
                    unselect: window.devicePixelRatio >= 3 ? Icon2Unselect3x : Icon2Unselect2x
                },
                {
                    selected: window.devicePixelRatio >= 3 ? Icon3Selected3x : Icon3Selected2x,
                    unselect: window.devicePixelRatio >= 3 ? Icon3Unselect3x : Icon3Unselect2x
                },
                {
                    selected: window.devicePixelRatio >= 3 ? Icon4Selected3x : Icon4Selected2x,
                    unselect: window.devicePixelRatio >= 3 ? Icon4Unselect3x : Icon4Unselect2x
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
            <div className="match-tab-pane-use-container">
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
