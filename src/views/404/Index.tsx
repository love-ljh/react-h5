import React, { Component } from 'react'
import './Index.scss'
import { Typography } from 'antd'
const { Title, Paragraph } = Typography
interface Props {
    
}
interface State {
    
}

export default class Index extends Component<Props, State> {
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="app-404">
                <Typography>
                    <Title>404</Title>
                    <Paragraph>
                        本项目没有首页
                    </Paragraph>
                </Typography>
            </div>
        )
    }
}
