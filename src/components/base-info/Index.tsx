/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import './Index.scss'
import PickerMoney from 'components/orange-picker-money/Index'
import OrangeSelect from 'components/orange-select/Index'
import { TagVO } from 'utils/global'
/**
 * @param {number} type 基本信息
 * - 1 定制贷款
 * - 2 信用贷款
 * - 3 房屋贷款
 * - 4 车辆贷款
 */
interface Props {
    type: number
}
/**
 * @param {Array<TagVO>} tagsLoanType                               贷款类型选择
 * @param {Array<TagVO>} tagsMaritalStatus                          婚姻状况
 * @param {Array<TagVO>} tagsOccupationCategory                     职业类别
 * @param {Array<TagVO>} tagsUnitProperties                         单位性质
 * @param {Array<TagVO>} tagsSalaryPaymentType                      工资发放形式
 * @param {Array<TagVO>} tagsAverageMonthSalary                     月平均工资
 * @param {Array<TagVO>} tagsCompanyWorkTime                        本单位上班时间
 * @param {Array<TagVO>} tagsBusinessLicenseYears                   本地营业执照年限
 * @param {Array<TagVO>} tagsInvoicedAmountYear                     企业一年开票金额
 * @param {Array<TagVO>} tagsSocialSecurityInformation              社保信息
 * @param {Array<TagVO>} tagsSocialSecurityBase                     社保基数
 * @param {Array<TagVO>} tagsSocialSecurityDuration                 社保连续缴费时间
 * @param {Array<TagVO>} tagsAccumulationFundInformation            公积金信息
 * @param {Array<TagVO>} tagsAccumulationFundBase                   公积金基数
 * @param {Array<TagVO>} tagsAccumulationFundDuration               公积金连续缴费时间
 */
interface State {
    tagsLoanType: Array<TagVO>
    tagsMaritalStatus: Array<TagVO>
    tagsOccupationCategory: Array<TagVO>
    tagsUnitProperties: Array<TagVO>
    tagsSalaryPaymentType: Array<TagVO>
    tagsAverageMonthSalary: Array<TagVO>
    tagsCompanyWorkTime: Array<TagVO>
    tagsBusinessLicenseYear: Array<TagVO>
    tagsInvoicedAmountYear: Array<TagVO>
    tagsSocialSecurityInformation: Array<TagVO>
    tagsSocialSecurityBase: Array<TagVO>
    tagsSocialSecurityDuration: Array<TagVO>
    tagsAccumulationFundInformation: Array<TagVO>
    tagsAccumulationFundBase: Array<TagVO>
    tagsAccumulationFundDuration: Array<TagVO>
    /// value
    valueLoanType: number
    valueMaritalStatus: number
    valueOccupationCategory: number
    valueUnitProperties: number
    valueSalaryPaymentType: number
    valueAverageMonthSalary: number
    valueCompanyWorkTime: number
    valueBusinessLicenseYear: number
    valueInvoicedAmountYear: number
    valueSocialSecurityInformation: number
    valueSocialSecurityBase: number
    valueSocialSecurityDuration: number
    valueAccumulationFundInformation: number
    valueAccumulationFundBase: number
    valueAccumulationFundDuration: number
}

/**
 * 完善基本信息-选择项枚举
 * @enum {number} LOAN_TYPE                                         贷款类型选择
 * @enum {number} MARITAL_STATUS                                    婚姻状况
 * @enum {number} OCCUPATION_CATEGORY                               职业类别
 * @enum {number} UNIT_PROPERTIES                                   单位性质
 * @enum {number} SALARY_PAYMENT_TYPE                               工资发放形式
 * @enum {number} AVERAGE_MONTH_SALARY                              月平均工资
 * @enum {number} COMPANY_WORK_TIME                                 本单位上班时间
 * @enum {number} BUSINESS_LICENSE_YEAR                             本地营业执照年限
 * @enum {number} INVOICED_AMOUNT_YEAR                              企业一年开票金额
 * @enum {number} SOCIAL_SECURITY_INFORMATION                       社保信息
 * @enum {number} SOCIAL_SECURITY_BASE                              社保基数
 * @enum {number} SOCIAL_SECURITY_DURATION                          社保连续缴费时间
 * @enum {number} ACCUMULATION_FUND_INFORMATION                     公积金信息
 * @enum {number} ACCUMULATION_FUND_BASE                            公积金基数
 * @enum {number} ACCUMULATION_FUND_DURATION                        公积金连续缴费时间
 */
enum BaseType {
    LOAN_TYPE,
    MARITAL_STATUS,
    OCCUPATION_CATEGORY,
    UNIT_PROPERTIES,
    SALARY_PAYMENT_TYPE,
    AVERAGE_MONTH_SALARY,
    COMPANY_WORK_TIME,
    BUSINESS_LICENSE_YEAR,
    INVOICED_AMOUNT_YEAR,
    SOCIAL_SECURITY_INFORMATION,
    SOCIAL_SECURITY_BASE,
    SOCIAL_SECURITY_DURATION,
    ACCUMULATION_FUND_INFORMATION,
    ACCUMULATION_FUND_BASE,
    ACCUMULATION_FUND_DURATION,
}

export default class Index extends Component<Props, State> {
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            tagsLoanType: [],
            tagsMaritalStatus: [],
            tagsOccupationCategory: [],
            tagsUnitProperties: [],
            tagsSalaryPaymentType: [],
            tagsAverageMonthSalary: [],
            tagsCompanyWorkTime: [],
            tagsBusinessLicenseYear: [],
            tagsInvoicedAmountYear: [],
            tagsSocialSecurityInformation: [],
            tagsSocialSecurityBase: [],
            tagsSocialSecurityDuration: [],
            tagsAccumulationFundInformation: [],
            tagsAccumulationFundBase: [],
            tagsAccumulationFundDuration: [],
            /// value
            valueLoanType: 0,
            valueMaritalStatus: 0,
            valueOccupationCategory: 0,
            valueUnitProperties: 0,
            valueSalaryPaymentType: 0,
            valueAverageMonthSalary: 0,
            valueCompanyWorkTime: 0,
            valueBusinessLicenseYear: 0,
            valueInvoicedAmountYear: 0,
            valueSocialSecurityInformation: 0,
            valueSocialSecurityBase: 0,
            valueSocialSecurityDuration: 0,
            valueAccumulationFundInformation: 0,
            valueAccumulationFundBase: 0,
            valueAccumulationFundDuration: 0
        }
    }

    componentDidMount() {
        let tagsLoanType = [{id: 1, name: '纯信用'}, {id: 2, name: '房屋抵押'}, {id: 3, name: '车辆抵押'}, {id: 4, name: '其他类型'}]
        let tagsMaritalStatus = [{id: 1, name: '已婚'}, {id: 2, name: '未婚'}, {id: 3, name: '离异'}, {id: 4, name: '丧偶'}]
        let tagsOccupationCategory = [{id: 1, name: '上班族'}, {id: 2, name: '私企老板'}, {id: 3, name: '自由职业'}, {id: 4, name: '无工作'}]
        let tagsUnitProperties = [{id: 1, name: '普通私企'}, {id: 2, name: '国家机关'}, {id: 3, name: '事业单位'}, {id: 4, name: '企业单位'}, {id: 5, name: '上市公司'}, {id: 6, name: '世界500强'}]
        let tagsSalaryPaymentType = [{id: 1, name: '银行卡代发'}, {id: 2, name: '固定转账工资'}, {id: 3, name: '现金发放'}]
        let tagsAverageMonthSalary = [{id: 1, name: '4千以下'}, {id: 2, name: '4千-6千'}, {id: 3, name: '6千-8千'}, {id: 4, name: '8千-1万'}, {id: 5, name: '1万-1万5'}, {id: 6, name: '1万5以上'}]
        let tagsCompanyWorkTime = [{id: 1, name: '3个月以下'}, {id: 2, name: '3-6个月'}, {id: 3, name: '6-12个月'}, {id: 4, name: '12-24个月'}, {id: 5, name: '24个月以上'}]
        let tagsBusinessLicenseYear = [{id: 1, name: '未注册'}, {id: 2, name: '3个月以下'}, {id: 3, name: '3-6个月'}, {id: 4, name: '6-12个月'}, {id: 5, name: '12-24个月'}, {id: 6, name: '24个月以上'}]
        let tagsInvoicedAmountYear = [{id: 1, name: '10万以下'}, {id: 2, name: '10万-100万'}, {id: 3, name: '100万-500万'}, {id: 4, name: '500万以上'}]
        let tagsSocialSecurityInformation = [{id: 1, name: '有社保'}, {id: 2, name: '无社保'}]
        let tagsSocialSecurityBase = [{id: 1, name: '3千以下'}, {id: 2, name: '3千-4千'}, {id: 2, name: '4千-6千'}, {id: 2, name: '6千-8千'}, {id: 2, name: '8千以上'}]
        let tagsSocialSecurityDuration = [{id: 1, name: '3个月以下'}, {id: 2, name: '3-6个月'}, {id: 2, name: '6-12个月'}, {id: 2, name: '12-24个月'}, {id: 2, name: '24个月以上'}]
        let tagsAccumulationFundInformation = [{id: 1, name: '有公积金'}, {id: 2, name: '无公积金'}]
        let tagsAccumulationFundBase = [{id: 1, name: '3千以下'}, {id: 2, name: '3千-4千'}, {id: 2, name: '4千-6千'}, {id: 2, name: '6千-8千'}, {id: 2, name: '8千以上'}]
        let tagsAccumulationFundDuration = [{id: 1, name: '3个月以下'}, {id: 2, name: '3-6个月'}, {id: 2, name: '6-12个月'}, {id: 2, name: '12个月以上'}]
        this.setState({
            tagsLoanType,
            tagsMaritalStatus,
            tagsOccupationCategory,
            tagsUnitProperties,
            tagsSalaryPaymentType,
            tagsAverageMonthSalary,
            tagsCompanyWorkTime,
            tagsBusinessLicenseYear,
            tagsInvoicedAmountYear,
            tagsSocialSecurityInformation,
            tagsSocialSecurityBase,
            tagsSocialSecurityDuration,
            tagsAccumulationFundInformation,
            tagsAccumulationFundBase,
            tagsAccumulationFundDuration
        })
    }

    onChange = (money: number) => {
        console.info(money)
    }

    onChangeSelect = (baseType: BaseType, tag: TagVO) => {
        console.info(baseType, tag)
        switch (baseType) {
        /// LOAN_TYPE                               贷款类型选择
        case BaseType.LOAN_TYPE:
            this.setState({valueLoanType: tag.id})
            break
        /// MARITAL_STATUS                          婚姻状况
        case BaseType.MARITAL_STATUS:
            this.setState({valueMaritalStatus: tag.id})
            break
        /// OCCUPATION_CATEGORY                     职业类别
        case BaseType.OCCUPATION_CATEGORY:
            this.setState({valueOccupationCategory: tag.id})
            break
        /// UNIT_PROPERTIES                         单位性质
        case BaseType.UNIT_PROPERTIES:
            this.setState({valueUnitProperties: tag.id})
            break
        /// SALARY_PAYMENT_TYPE                     工资发放形式
        case BaseType.SALARY_PAYMENT_TYPE:
            this.setState({valueSalaryPaymentType: tag.id})
            break
        /// AVERAGE_MONTH_SALARY                    月平均工资
        case BaseType.AVERAGE_MONTH_SALARY:
            this.setState({valueAverageMonthSalary: tag.id})
            break
        /// COMPANY_WORK_TIME                       本单位上班时间
        case BaseType.COMPANY_WORK_TIME:
            this.setState({valueCompanyWorkTime: tag.id})
            break
        /// BUSINESS_LICENSE_YEAR                   本地营业执照年限
        case BaseType.BUSINESS_LICENSE_YEAR:
            this.setState({valueBusinessLicenseYear: tag.id})
            break
        /// INVOICED_AMOUNT_YEAR                    企业一年开票金额
        case BaseType.INVOICED_AMOUNT_YEAR:
            this.setState({valueInvoicedAmountYear: tag.id})
            break
        /// SOCIAL_SECURITY_INFORMATION             社保信息
        case BaseType.SOCIAL_SECURITY_INFORMATION:
            this.setState({valueSocialSecurityInformation: tag.id})
            break
        /// SOCIAL_SECURITY_BASE                    社保基数
        case BaseType.SOCIAL_SECURITY_BASE:
            this.setState({valueSocialSecurityBase: tag.id})
            break
        /// SOCIAL_SECURITY_DURATION                社保连续缴费时间
        case BaseType.SOCIAL_SECURITY_DURATION:
            this.setState({valueSocialSecurityDuration: tag.id})
            break
        /// ACCUMULATION_FUND_INFORMATION           公积金信息
        case BaseType.ACCUMULATION_FUND_INFORMATION:
            this.setState({valueAccumulationFundInformation: tag.id})
            break
        /// ACCUMULATION_FUND_BASE                  公积金基数
        case BaseType.ACCUMULATION_FUND_BASE:
            this.setState({valueAccumulationFundBase: tag.id})
            break
        /// ACCUMULATION_FUND_DURATION              公积金连续缴费时间
        case BaseType.ACCUMULATION_FUND_DURATION:
            this.setState({valueAccumulationFundDuration: tag.id})
            break
        default:
            break
        }
    }

    render() {
        return (
            <div className="app-component-base-info">
                {/* loan money */}
                <div className="loan-money">
                    <div className="title">贷款金额</div>
                    <PickerMoney onChange={(money: number) => this.onChange(money)}></PickerMoney>
                    <div className="unit">万元</div>
                    <div className="descript">（支持3000万元以内）</div>
                </div>
                {/* orange select of all type */}
                {/*
                *   [智能匹配]-------------------------------------------------------------------- 
                *   -- 贷款类型选择
                *   -- 婚姻状况
                *   -- 职业类别
                *       -- 上班族
                *           -- 单位性质
                *           -- 工资发放形式
                *           -- 月平均工资
                *           -- 本单位上班时间
                *       -- 私企老板
                *           -- 本地营业执照年限
                *           -- 企业一年开票金额
                *   -- 社保信息
                *       -- 有社保
                *           -- 社保基数
                *           -- 社保连续缴费时间
                *   -- 公积金信息
                *       -- 有公积金
                *           -- 公积金基数
                *           -- 公积金连续缴费时间
                */}
                <OrangeSelect title="贷款类型选择" tags={this.state.tagsLoanType} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.LOAN_TYPE, tag)}/>
                <OrangeSelect title="婚姻状况" tags={this.state.tagsMaritalStatus} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.MARITAL_STATUS, tag)}/>
                <OrangeSelect title="职业类别" tags={this.state.tagsOccupationCategory} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.OCCUPATION_CATEGORY, tag)}/>
                {/* {id: 1, name: '上班族'}, {id: 2, name: '私企老板'}, {id: 3, name: '自由职业'}, {id: 4, name: '无工作'} */}
                {
                    this.state.valueOccupationCategory === 1 ? (
                        // 1.上班族
                        <Fragment>
                            <OrangeSelect title="单位性质" tags={this.state.tagsUnitProperties} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.UNIT_PROPERTIES, tag)}/>
                            <OrangeSelect title="工资发放形式" tags={this.state.tagsSalaryPaymentType} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.SALARY_PAYMENT_TYPE, tag)}/>
                            <OrangeSelect title="月平均工资" tags={this.state.tagsAverageMonthSalary} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.AVERAGE_MONTH_SALARY, tag)}/>
                            <OrangeSelect title="本单位上班时间" tags={this.state.tagsCompanyWorkTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.COMPANY_WORK_TIME, tag)}/>
                        </Fragment>
                    ) : this.state.valueOccupationCategory === 2 ? (
                        // 2.私企老板
                        <Fragment>
                            <OrangeSelect title="本地营业执照年限" tags={this.state.tagsBusinessLicenseYear} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.BUSINESS_LICENSE_YEAR, tag)}/>
                            <OrangeSelect title="企业一年开票金额" tags={this.state.tagsInvoicedAmountYear} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.INVOICED_AMOUNT_YEAR, tag)}/>
                        </Fragment>
                    ) : ''
                }
                <OrangeSelect title="社保信息" tags={this.state.tagsSocialSecurityInformation} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.SOCIAL_SECURITY_INFORMATION, tag)}/>
                {/* {id: 1, name: '有社保'}, {id: 2, name: '无社保'} */}
                {
                    this.state.valueSocialSecurityInformation === 1 ? (
                        <Fragment>
                            <OrangeSelect title="社保基数" tags={this.state.tagsSocialSecurityBase} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.SOCIAL_SECURITY_BASE, tag)}/>
                            <OrangeSelect title="社保连续缴费时间" tags={this.state.tagsSocialSecurityDuration} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.COMPANY_WORK_TIME, tag)}/>
                        </Fragment>
                    ) : ''
                }
                <OrangeSelect title="公积金信息" tags={this.state.tagsAccumulationFundInformation} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.ACCUMULATION_FUND_INFORMATION, tag)}/>
                {/* {id: 1, name: '有公积金'}, {id: 2, name: '无公积金'} */}
                {
                    this.state.valueAccumulationFundInformation === 1 ? (
                        <Fragment>
                            <OrangeSelect title="公积金基数" tags={this.state.tagsAccumulationFundBase} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.ACCUMULATION_FUND_BASE, tag)}/>
                            <OrangeSelect title="公积金连续缴费时间" tags={this.state.tagsAccumulationFundDuration} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.ACCUMULATION_FUND_DURATION, tag)}/>
                        </Fragment>
                    ) : ''
                }
            </div>
        )
    }
}
