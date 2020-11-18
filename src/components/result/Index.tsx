/* eslint-disable no-unused-vars */
import React, { ReactElement, Fragment } from 'react'
import { ResultType } from 'utils/global'
import './Index.scss'
import Icon_Success_2x from './icons/icon_success@2x.png'
import Icon_Success_3x from './icons/icon_success@3x.png'
import Icon_None2x from './icons/icon_none@2x.png'
import Icon_None3x from './icons/icon_none@3x.png'
import Icon_Dots2x from './icons/icon_dots@2x.png'
import Icon_Dots3x from './icons/icon_dots@3x.png'
interface Props {
    type: ResultType
    successDescription?: string
    noneTitle?: string
    noneDescript?: string
}

export default function Index(props: Props): ReactElement {
    const ICON_SUCCESS = window.devicePixelRatio >= 3 ? Icon_Success_3x : Icon_Success_2x
    const ICON_NONE = window.devicePixelRatio >= 3 ? Icon_None3x : Icon_None2x
    const ICON_DOTS = window.devicePixelRatio >= 3 ? Icon_Dots3x : Icon_Dots2x

    const defaultMatchNoneTitle = '暂无合适的产品匹配'
    const defaultMatchNoneDescription = '您也可以适当调整个别条件或更换贷款类型重新匹配'
    const defaultSearchNoneTitle = '暂无搜索结果'
    const defaultSearchNoneDescription = '请更换筛选条件重新选择'

    return (
        <div className="app-component-result">
            {
                props.type === 'success' ? (
                    <Fragment>
                        <div className="app-result-success-box">
                            <img className="icon-success" src={ICON_SUCCESS} alt=""/>
                            <span className="success-description">{props.successDescription}</span>
                        </div>
                    </Fragment>
                ) : props.type === 'match_none' || props.type === 'search_none' ? (
                    <Fragment>
                        <div className="app-result-none">
                            <img className="icon-fail" src={ICON_NONE} alt=""/>
                            <span className="none-title">
                                { props.noneTitle ? props.noneTitle : props.type === 'match_none' ? defaultMatchNoneTitle : defaultSearchNoneTitle }
                            </span>
                            <div className="none-description-box">
                                <img className="icon-dots" src={ICON_DOTS} alt=""/>
                                <span className="none-description">
                                    { props.noneDescript ? props.noneDescript : props.type === 'match_none' ? defaultMatchNoneDescription : defaultSearchNoneDescription }
                                </span>
                            </div>
                        </div>
                    </Fragment>
                ) : props.type === 'hot_products_none' ? (
                    <Fragment>
                        <div className="app-result-none">
                            <span className="none-hot-products">暂无热门产品</span>
                        </div>
                    </Fragment>
                ) : ''
            }
        </div>
    )
}
Index.defaultProps = {
    successDescription: '申请提交成功!',
    noneTitle: '',
    noneDescript: ''
}
