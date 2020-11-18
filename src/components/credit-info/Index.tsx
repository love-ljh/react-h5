/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './Index.scss'
import OrangeSelect from 'components/orange-select/Index'
import OrangeSlider from 'components/orange-slider/Index'
import { TagVO } from 'utils/global'
/**
 * @param {number} type 基本信息
 * - 1. 定制贷款
 * - 2. 信用贷款
 * - 3. 房屋贷款
 * - 4. 车辆贷款
 */
interface Props {
    type: number
}
/**
 * @param {Array<TagVO>} tagsProvideLoanOnSmallCompany              小额公司发放过贷款？
 * @param {Array<TagVO>} tagsProvideLoanOnConsumerFinanceCompany    消费金融公司发放过贷款？
 * @param {Array<TagVO>} tagsCreditCardHasException                 贷款或信用卡状态是否冻结、止付、呆账、关注？
 * @param {Array<TagVO>} tagsOverdueAmount                          当前逾期额度
 * @param {Array<TagVO>} tagsOverdueTimeInTwoYears                  近两年最长逾期时间
 * @param {Array<TagVO>} tagsOverdueTimes                           逾期次数
 * @param {Array<TagVO>} tagsIsUsedMicroparticleLoan                是否使用过微粒贷
 * @param {Array<TagVO>} tagsMicroparticleLoanAmount                使用额度
 */
interface State {
    tagsProvideLoanOnSmallCompany: Array<TagVO>
    tagsProvideLoanOnConsumerFinanceCompany: Array<TagVO>
    tagsCreditCardHasException: Array<TagVO>
    tagsOverdueAmount: Array<TagVO>
    tagsOverdueTimeInTwoYears: Array<TagVO>
    tagsOverdueTimes: Array<TagVO>
    tagsIsUsedMicroparticleLoan: Array<TagVO>
    tagsMicroparticleLoanAmount: Array<TagVO>
    // value
    valueProvideLoanOnSmallCompany: number
    valueProvideLoanOnConsumerFinanceCompany: number
    valueCreditCardHasException: number
    valueLoanOrCreditCardApplyCountNearly3Month: number
    valueLoanOrCreditCardApplyCountNearly6Month: number
    valueLoanOrCreditCardApplyCountNearly12Month: number
    valueOverdueAmount: number
    valueOverdueTimeInTwoYears: number
    valueOverdueTimes: number
    valueIsUsedMicroparticleLoan: number
    valueMicroparticleLoanAmount: number
}
/**
 * 贷款信用资质字段选择枚举
 * @readonly 
 * @summary 字段选择枚举
 * @enum {number} PROVIDE_LOAN_ON_SMALL_COMPANY                     小额公司发放过贷款？
 * @enum {number} PROVIDE_LOAN_ON_CONSUMER_FINANCE_COMPANY          消费金融公司发放过贷款？
 * @enum {number} CREDIT_CARD_HAS_EXCEPTION                         贷款或信用卡状态是否冻结、止付、呆账、关注？
 * @description the begin part of slider enum
 * @enum {number} LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_3_MONTH    近3个月以内贷款&信用卡申请次数
 * @enum {number} LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_6_MONTH    近6个月以内贷款&信用卡申请次数
 * @enum {number} LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_12_MONTH   近12个月以内贷款&信用卡申请次数
 * @description the end part of slider enum
 * @enum {number} OVERDUE_AMOUNT                                    当前逾期额度
 * @enum {number} OVERDUE_TIME_IN_TWO_YEAR                          近两年最长逾期时间
 * @enum {number} OVERDUE_TIMES                                     逾期次数
 * @enum {number} IS_USED_MICROPARTICLE_LOAN                        是否使用过微粒贷
 * @enum {number} MICROPARTICLE_LOAN_AMOUNT                         使用额度
 */
enum BaseType {
    PROVIDE_LOAN_ON_SMALL_COMPANY,
    PROVIDE_LOAN_ON_CONSUMER_FINANCE_COMPANY,
    CREDIT_CARD_HAS_EXCEPTION,
    LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_3_MONTH,
    LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_6_MONTH,
    LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_12_MONTH,
    OVERDUE_AMOUNT,
    OVERDUE_TIME_IN_TWO_YEAR,
    OVERDUE_TIMES,
    IS_USED_MICROPARTICLE_LOAN,
    MICROPARTICLE_LOAN_AMOUNT
}
export default class Index extends Component<Props, State> {
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            tagsProvideLoanOnSmallCompany: [],
            tagsProvideLoanOnConsumerFinanceCompany: [],
            tagsCreditCardHasException: [],
            tagsOverdueAmount: [],
            tagsOverdueTimeInTwoYears: [],
            tagsOverdueTimes: [],
            tagsIsUsedMicroparticleLoan: [],
            tagsMicroparticleLoanAmount: [],
            // value
            valueProvideLoanOnSmallCompany: 0,
            valueProvideLoanOnConsumerFinanceCompany: 0,
            valueCreditCardHasException: 0,
            valueLoanOrCreditCardApplyCountNearly3Month: 0,
            valueLoanOrCreditCardApplyCountNearly6Month: 0,
            valueLoanOrCreditCardApplyCountNearly12Month: 0,
            valueOverdueAmount: 0,
            valueOverdueTimeInTwoYears: 0,
            valueOverdueTimes: 0,
            valueIsUsedMicroparticleLoan: 0,
            valueMicroparticleLoanAmount: 0
        }
    }

    componentDidMount() {
        let tagsProvideLoanOnSmallCompany = [{id: 1, name: '是'}, {id: 2, name: '否'}]
        let tagsProvideLoanOnConsumerFinanceCompany = [{id: 1, name: '是'}, {id: 2, name: '否'}]
        let tagsCreditCardHasException = [{id: 1, name: '是'}, {id: 2, name: '否'}]
        let tagsOverdueAmount = [{id: 1, name: '无逾期'}, {id: 2, name: '1千以下'}, {id: 3, name: '1千到3千'}, {id: 4, name: '3千-5千'}, {id: 5, name: '5千-1万'}, {id: 6, name: '1万以上'}]
        let tagsOverdueTimeInTwoYears = [{id: 1, name: '无逾期'}, {id: 2, name: '30天以内'}, {id: 3, name: '30天-60天'}, {id: 4, name: '60天-90天'}, {id: 5, name: '90天以上'}]
        let tagsOverdueTimes = [{id: 1, name: '1次'}, {id: 2, name: '2次'}, {id: 3, name: '3次'}, {id: 4, name: '4次'}, {id: 5, name: '5次'}, {id: 6, name: '5次以上'}]
        let tagsIsUsedMicroparticleLoan = [{id: 1, name: '是'}, {id: 2, name: '否'}]
        let tagsMicroparticleLoanAmount = [{id: 1, name: '3千以下'}, {id: 2, name: '3千-5千'}, {id: 3, name: '5千-8千'}, {id: 4, name: '8千-1万'}, {id: 5, name: '1万以上'}]
        this.setState({
            tagsProvideLoanOnSmallCompany,
            tagsProvideLoanOnConsumerFinanceCompany,
            tagsCreditCardHasException,
            tagsOverdueAmount,
            tagsOverdueTimeInTwoYears,
            tagsOverdueTimes,
            tagsIsUsedMicroparticleLoan,
            tagsMicroparticleLoanAmount
        })
    }

    onChangeSelect = (baseType: BaseType, tag: TagVO) => {
        console.info(baseType, tag)
        switch (baseType) {
        /// PROVIDE_LOAN_ON_SMALL_COMPANY                     小额公司发放过贷款？
        case BaseType.PROVIDE_LOAN_ON_SMALL_COMPANY:
            this.setState({valueProvideLoanOnSmallCompany: tag.id})
            break
        /// PROVIDE_LOAN_ON_CONSUMER_FINANCE_COMPANY          消费金融公司发放过贷款？
        case BaseType.PROVIDE_LOAN_ON_CONSUMER_FINANCE_COMPANY:
            this.setState({valueProvideLoanOnConsumerFinanceCompany: tag.id})
            break
        /// CREDIT_CARD_HAS_EXCEPTION                         贷款或信用卡状态是否冻结、止付、呆账、关注？
        case BaseType.CREDIT_CARD_HAS_EXCEPTION:
            this.setState({valueCreditCardHasException: tag.id})
            break
        /// OVERDUE_AMOUNT                                    当前逾期额度
        case BaseType.OVERDUE_AMOUNT:
            this.setState({valueOverdueAmount: tag.id})
            break
        /// OVERDUE_TIME_IN_TWO_YEAR                          近两年最长逾期时间
        case BaseType.OVERDUE_TIME_IN_TWO_YEAR:
            this.setState({valueOverdueTimeInTwoYears: tag.id})
            break
        /// OVERDUE_TIMES                                     逾期次数
        case BaseType.OVERDUE_TIMES:
            this.setState({valueOverdueTimes: tag.id})
            break
        /// IS_USED_MICROPARTICLE_LOAN                        是否使用过微粒贷
        case BaseType.IS_USED_MICROPARTICLE_LOAN:
            this.setState({valueIsUsedMicroparticleLoan: tag.id})
            break
        /// MICROPARTICLE_LOAN_AMOUNT                         使用额度
        case BaseType.MICROPARTICLE_LOAN_AMOUNT:
            this.setState({valueMicroparticleLoanAmount: tag.id})
            break
        default:
            break
        }
    }

    onChangeSlider = (baseType: BaseType, value: number) => {
        console.info(baseType, value)
        switch (baseType) {
        /// LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_3_MONTH    近3个月以内贷款&信用卡申请次数
        case BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_3_MONTH:
            this.setState({valueLoanOrCreditCardApplyCountNearly3Month: value})
            break
        /// LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_6_MONTH    近6个月以内贷款&信用卡申请次数
        case BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_6_MONTH:
            this.setState({valueLoanOrCreditCardApplyCountNearly6Month: value})
            break
        /// LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_12_MONTH   近12个月以内贷款&信用卡申请次数
        case BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_12_MONTH:
            this.setState({valueLoanOrCreditCardApplyCountNearly12Month: value})
            break
        default:
            break
        }
    }

    render() {
        return (
            <div className="app-component-credit-info">
                {/* orange select of all type */}
                {/* base info */}
                <OrangeSelect title="小额公司发放过贷款？" tags={this.state.tagsProvideLoanOnSmallCompany} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.PROVIDE_LOAN_ON_SMALL_COMPANY, tag)}/>
                <OrangeSelect title="消费金融公司发放过贷款？" tags={this.state.tagsProvideLoanOnConsumerFinanceCompany} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.PROVIDE_LOAN_ON_CONSUMER_FINANCE_COMPANY, tag)}/>
                <OrangeSelect title="贷款或信用卡状态是否冻结、止付、呆账、关注？" tags={this.state.tagsCreditCardHasException} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.CREDIT_CARD_HAS_EXCEPTION, tag)}/>
                <OrangeSlider title={'近3个月以内贷款&信用卡申请次数'} onChange={(value) => this.onChangeSlider(BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_3_MONTH, value)}/>
                <OrangeSlider title={'近6个月以内贷款&信用卡申请次数'} onChange={(value) => this.onChangeSlider(BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_6_MONTH, value)}/>
                <OrangeSlider title={'近12个月以内贷款&信用卡申请次数'} onChange={(value) => this.onChangeSlider(BaseType.LOAN_OR_CREDIT_CARD_APPLY_COUNT_NEARLY_12_MONTH, value)}/>
                <OrangeSelect title="当前逾期额度" tags={this.state.tagsOverdueAmount} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.OVERDUE_AMOUNT, tag)}/>
                <OrangeSelect title="近两年最长逾期时间" tags={this.state.tagsOverdueTimeInTwoYears} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.OVERDUE_TIME_IN_TWO_YEAR, tag)}/>
                <OrangeSelect title="逾期次数" tags={this.state.tagsOverdueTimes} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.OVERDUE_TIMES, tag)}/>
                <OrangeSelect title="是否使用过微粒贷" tags={this.state.tagsIsUsedMicroparticleLoan} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.IS_USED_MICROPARTICLE_LOAN, tag)}/>
                {
                    this.state.valueIsUsedMicroparticleLoan === 1 ? (
                        <OrangeSelect title="使用额度" tags={this.state.tagsMicroparticleLoanAmount} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.MICROPARTICLE_LOAN_AMOUNT, tag)}/>
                    ) : ''
                }
            </div>
        )
    }
}
