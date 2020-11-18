/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import './Index.scss'
import OrangeSelect from 'components/orange-select/Index'
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
 * @param {Array<TagVO>} tagsHousePropertyInformation   房产信息
 * @param {Array<TagVO>} tagsCarPropertyInformation     车产信息
 * @param {Array<TagVO>} tagsInsurancePolicy            寿险保单
 * -- 有本地房
 * @param {Array<TagVO>} tagsHousePropertyType          房产类型
 *      -- (住宅,商住两用,公寓,别墅,别墅,写字楼)
 * @param {Array<TagVO>} tagsHousePropertyStatus        房产状态
 *          -- 月供中
 * @param {Array<TagVO>} tagsRepaymentMethod            还款方式
 *              -- 等额还款
 * @param {Array<TagVO>} tagsMonthlySupplyTime          月供时间
 *              -- 先息后本,其它还款方式
 * @param {Array<TagVO>} tagsRepaymentTime              还款时间
 *          -- 月供已结清
 * @param {Array<TagVO>} tagsHouseSettlementTime        (房产)结清时间
 *          -- 全款购房
 * @param {Array<TagVO>} tagsHouseTransferTime          (房产)过户时间
 * -- 全国房
 * @param {Array<TagVO>} tagsHousePropertyAddress       房产地址
 *      -- 全国房逻辑跟本地房一样
 * ---- 车产信息--------------------
 * -- 月供中
 * @param {Array<TagVO>} tagsCarMortgageTime            (车辆)按揭时间
 * -- 月供已还清
 * @param {Array<TagVO>} tagsCarSettlementTime          (车辆)结清时间
 * -- 全款购车
 * @param {Array<TagVO>} tagsCarTransferTime            (车辆)过户时间
 * ----- 寿险保单------------------
 * @param {Array<TagVO>} tagsInsuranceCompany           保险公司
 * @param {Array<TagVO>} tagsPaymentMethod              缴费方式
 * @param {Array<TagVO>} tagsPaymentTime                缴费时间
 */
interface State {
    tagsHousePropertyInformation: Array<TagVO>
    tagsCarPropertyInformation: Array<TagVO>
    tagsInsurancePolicy: Array<TagVO>
    tagsHousePropertyType: Array<TagVO>
    tagsHousePropertyStatus: Array<TagVO>
    tagsRepaymentMethod: Array<TagVO>
    tagsMonthlySupplyTime: Array<TagVO>
    tagsRepaymentTime: Array<TagVO>
    tagsHouseSettlementTime: Array<TagVO>
    tagsHouseTransferTime: Array<TagVO>
    tagsHousePropertyAddress: Array<TagVO>
    tagsCarMortgageTime: Array<TagVO>
    tagsCarSettlementTime: Array<TagVO>
    tagsCarTransferTime: Array<TagVO>
    tagsInsuranceCompany: Array<TagVO>
    tagsPaymentMethod: Array<TagVO>
    tagsPaymentTime: Array<TagVO>
    // value
    valueHousePropertyInformation: number
    valueCarPropertyInformation: number
    valueInsurancePolicy: number
    valueHousePropertyType: number
    valueHousePropertyStatus: number
    valueRepaymentMethod: number
    valueMonthlySupplyTime: number
    valueRepaymentTime: number
    valueHouseSettlementTime: number
    valueHouseTransferTime: number
    valueHousePropertyAddress: number
    valueCarMortgageTime: number
    valueCarSettlementTime: number
    valueCarTransferTime: number
    valueInsuranceCompany: number
    valuePaymentMethod: number
    valuePaymentTime: number
}

/**
 * 资产信息-选择项枚举
 * @enum {number} HOUSE_PROPERTY_INFORMATION            房产信息
 * @enum {number} CAR_PROPERTY_INFORMATION              车产信息
 * @enum {number} INSURANCE_POLICY                      寿险保单
 * @enum {number} HOUSE_PROPERTY_TYPE                   房产类型
 * @enum {number} HOUSE_PROPERTY_STATUS                 房产状态
 * @enum {number} REPAYMENT_METHOD                      还款方式
 * @enum {number} MONTHLY_SUPPLY_TIME                   月供时间
 * @enum {number} REPAYMENT_TIME                        还款时间   
 * @enum {number} HOUSE_SETTLEMENT_TIME                 (房产)结清时间
 * @enum {number} HOUSE_TRANSFER_TIME                   (房产)过户时间
 * @enum {number} HOUSE_PROPERTY_ADDRESS                房产地址
 * @enum {number} CAR_MORTGAGE_TIME                     (车辆)按揭时间
 * @enum {number} CAR_SETTLEMENT_TIME                   (车辆)结清时间
 * @enum {number} CAR_TRANSFER_TIME                     (车辆)过户时间
 * @enum {number} INSURANCE_COMPANY                     保险公司
 * @enum {number} PAYMENT_METHOD                        缴费方式
 * @enum {number} PAYMENT_TIME                          缴费时间
 */
enum BaseType {
    HOUSE_PROPERTY_INFORMATION,
    CAR_PROPERTY_INFORMATION,
    INSURANCE_POLICY,
    HOUSE_PROPERTY_TYPE,
    HOUSE_PROPERTY_STATUS,
    REPAYMENT_METHOD,
    MONTHLY_SUPPLY_TIME,
    REPAYMENT_TIME,
    HOUSE_SETTLEMENT_TIME,
    HOUSE_TRANSFER_TIME,
    HOUSE_PROPERTY_ADDRESS,
    CAR_MORTGAGE_TIME,
    CAR_SETTLEMENT_TIME,
    CAR_TRANSFER_TIME,
    INSURANCE_COMPANY,
    PAYMENT_METHOD,
    PAYMENT_TIME
}

export default class Index extends Component<Props, State> {
    readonly state: Readonly<State>
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            tagsHousePropertyInformation: [],
            tagsCarPropertyInformation: [],
            tagsInsurancePolicy: [],
            tagsHousePropertyType: [],
            tagsHousePropertyStatus: [],
            tagsRepaymentMethod: [],
            tagsMonthlySupplyTime: [],
            tagsRepaymentTime: [],
            tagsHouseSettlementTime: [],
            tagsHouseTransferTime: [],
            tagsHousePropertyAddress: [],
            tagsCarMortgageTime: [],
            tagsCarSettlementTime: [],
            tagsCarTransferTime: [],
            tagsInsuranceCompany: [],
            tagsPaymentMethod: [],
            tagsPaymentTime: [],
            // value
            valueHousePropertyInformation: 0,
            valueCarPropertyInformation: 0,
            valueInsurancePolicy: 0,
            valueHousePropertyType: 0,
            valueHousePropertyStatus: 0,
            valueRepaymentMethod: 0,
            valueMonthlySupplyTime: 0,
            valueRepaymentTime: 0,
            valueHouseSettlementTime: 0,
            valueHouseTransferTime: 0,
            valueHousePropertyAddress: 0,
            valueCarMortgageTime: 0,
            valueCarSettlementTime: 0,
            valueCarTransferTime: 0,
            valueInsuranceCompany: 0,
            valuePaymentMethod: 0,
            valuePaymentTime: 0
        }
    }

    componentDidMount() {
        let tagsHousePropertyInformation = [{id: 1, name: '有本地房'}, {id: 2, name: '全国房'}, {id: 3, name: '无房'}]
        let tagsCarPropertyInformation = [{id: 1, name: '月供中'}, {id: 2, name: '月供已还清'}, {id: 3, name: '全款车'}, {id: 4, name: '无车'}]
        let tagsInsurancePolicy = [{id: 1, name: '有人寿'}, {id: 2, name: '无人寿'}]
        let tagsHousePropertyType = [
            {id: 1, name: '住宅'}, {id: 2, name: '商住两用'}, {id: 3, name: '公寓'}, {id: 4, name: '别墅'}, {id: 5, name: '商铺'},
            {id: 6, name: '写字楼'}, {id: 7, name: '厂房'}, {id: 8, name: '福利房'}, {id: 9, name: '军产房'}, {id: 10, name: '自建房'}, {id: 4, name: '小产权房'}]
        let tagsHousePropertyStatus = [{id: 1, name: '月供中'}, {id: 2, name: '月供已结清'}, {id: 3, name: '全款购房'}]
        let tagsRepaymentMethod = [{id: 1, name: '等额还款'}, {id: 2, name: '先息后本'}, {id: 3, name: '其他还款方式'}]
        let tagsMonthlySupplyTime = [
            {id: 1, name: '1个月以下'}, {id: 2, name: '1-3个月'}, {id: 3, name: '3-6个月'}, {id: 4, name: '6-12个月'}, {id: 5, name: '12-24个月'}, {id: 6, name: '24个月以上'}]
        let tagsRepaymentTime = [
            {id: 1, name: '1个月以下'}, {id: 2, name: '1-3个月'}, {id: 3, name: '3-6个月'}, {id: 4, name: '6-12个月'}, {id: 5, name: '12-24个月'}, {id: 6, name: '24个月以上'}]
        let tagsHouseSettlementTime = [{id: 1, name: '3个月以下'}, {id: 2, name: '3-6个月'}, {id: 3, name: '6-12个月'}, {id: 4, name: '12-24个月'}, {id: 5, name: '24个月以上'}]
        let tagsHouseTransferTime = [{id: 1, name: '3个月以下'}, {id: 2, name: '3-6个月'}, {id: 3, name: '6-12个月'}, {id: 4, name: '12-24个月'}, {id: 5, name: '24个月以上'}]
        let tagsHousePropertyAddress = [{id: 1, name: '一线城市'}, {id: 2, name: '二三线城市'}, {id: 3, name: '其他'}]
        let tagsCarMortgageTime = [{id: 1, name: '6个月以下'}, {id: 2, name: '6-12个月'}, {id: 3, name: '12个月以上'}]
        let tagsCarSettlementTime = [{id: 1, name: '6个月以下'}, {id: 2, name: '6-12个月'}, {id: 3, name: '12个月以上'}]
        let tagsCarTransferTime = [{id: 1, name: '6个月以下'}, {id: 2, name: '6-12个月'}, {id: 3, name: '12个月以上'}]
        let tagsInsuranceCompany = [
            {id: 1, name: '平安人寿'}, {id: 2, name: '中国人寿'}, {id: 3, name: '新华人寿'}, {id: 4, name: '泰康人寿'}, {id: 5, name: '太平洋'}, {id: 6, name: '友邦保险'},
            {id: 7, name: '中国人民保险'}, {id: 8, name: '阳光保险'}, {id: 9, name: '富德生命人寿'}, {id: 10, name: '中美联泰'}, {id: 11, name: '工银安盛'}, {id: 12, name: '中德安联'},
            {id: 13, name: '中英人寿'}, {id: 14, name: '民生人寿'}, {id: 15, name: '天安人寿'}, {id: 16, name: '华夏人寿'}, {id: 17, name: '中邮人寿'}, {id: 18, name: '中荷人寿'},
            {id: 19, name: '太平人寿'}, {id: 20, name: '中意人寿'}, {id: 21, name: '招商信诺'}, {id: 22, name: '安邦人寿'}, {id: 23, name: '建信人寿'}, {id: 24, name: '农银人寿'},
            {id: 25, name: '前海人寿'}, {id: 26, name: '中宏人寿'}, {id: 27, name: '信泰人寿'}, {id: 28, name: '华泰人寿'}, {id: 29, name: '长城人寿'}, {id: 30, name: '光大永明'},
            {id: 31, name: '其他'}]
        let tagsPaymentMethod = [{id: 1, name: '趸缴'}, {id: 2, name: '年缴'}, {id: 3, name: '季缴'}, {id: 4, name: '月缴'}]
        let tagsPaymentTime = [{id: 1, name: '半年以下'}, {id: 2, name: '半年-1年'}, {id: 3, name: '1-2年'}, {id: 4, name: '2-3年'}, {id: 5, name: '3年以上'}]
        this.setState({
            tagsHousePropertyInformation,
            tagsCarPropertyInformation,
            tagsInsurancePolicy,
            tagsHousePropertyType,
            tagsHousePropertyStatus,
            tagsRepaymentMethod,
            tagsMonthlySupplyTime,
            tagsRepaymentTime,
            tagsHouseSettlementTime,
            tagsHouseTransferTime,
            tagsHousePropertyAddress,
            tagsCarMortgageTime,
            tagsCarSettlementTime,
            tagsCarTransferTime,
            tagsInsuranceCompany,
            tagsPaymentMethod,
            tagsPaymentTime
        })
    }

    onChangeSelect = (baseType: BaseType, tag: TagVO) => {
        console.info(baseType, tag)
        switch (baseType) {
        /// HOUSE_PROPERTY_INFORMATION            房产信息
        case BaseType.HOUSE_PROPERTY_INFORMATION:
            this.setState({valueHousePropertyInformation: tag.id})
            break
        /// CAR_PROPERTY_INFORMATION              车产信息
        case BaseType.CAR_PROPERTY_INFORMATION:
            this.setState({valueCarPropertyInformation: tag.id})
            break
        /// INSURANCE_POLICY                      寿险保单
        case BaseType.INSURANCE_POLICY:
            this.setState({valueInsurancePolicy: tag.id})
            break
        /// HOUSE_PROPERTY_TYPE                   房产类型
        case BaseType.HOUSE_PROPERTY_TYPE:
            this.setState({valueHousePropertyType: tag.id})
            break
        /// HOUSE_PROPERTY_STATUS                 房产状态
        case BaseType.HOUSE_PROPERTY_STATUS:
            this.setState({valueHousePropertyStatus: tag.id})
            break
        /// REPAYMENT_METHOD                      还款方式
        case BaseType.REPAYMENT_METHOD:
            this.setState({valueRepaymentMethod: tag.id})
            break
        /// MONTHLY_SUPPLY_TIME                   月供时间
        case BaseType.MONTHLY_SUPPLY_TIME:
            this.setState({valueMonthlySupplyTime: tag.id})
            break
        /// REPAYMENT_TIME                        还款时间
        case BaseType.REPAYMENT_TIME:
            this.setState({valueRepaymentTime: tag.id})
            break
        /// HOUSE_SETTLEMENT_TIME                 (房产)结清时间
        case BaseType.HOUSE_SETTLEMENT_TIME:
            this.setState({valueHouseSettlementTime: tag.id})
            break
        /// HOUSE_TRANSFER_TIME                   (房产)过户时间
        case BaseType.HOUSE_TRANSFER_TIME:
            this.setState({valueHouseTransferTime: tag.id})
            break
        /// HOUSE_PROPERTY_ADDRESS                房产地址
        case BaseType.HOUSE_PROPERTY_ADDRESS:
            this.setState({valueHousePropertyAddress: tag.id})
            break
        /// CAR_MORTGAGE_TIME                     (车辆)按揭时间
        case BaseType.CAR_MORTGAGE_TIME:
            this.setState({valueCarMortgageTime: tag.id})
            break
        /// CAR_SETTLEMENT_TIME                   (车辆)结清时间
        case BaseType.CAR_SETTLEMENT_TIME:
            this.setState({valueCarSettlementTime: tag.id})
            break
        /// CAR_TRANSFER_TIME                     (车辆)过户时间
        case BaseType.CAR_TRANSFER_TIME:
            this.setState({valueCarTransferTime: tag.id})
            break
        /// INSURANCE_COMPANY                     保险公司
        case BaseType.INSURANCE_COMPANY:
            this.setState({valueInsuranceCompany: tag.id})
            break
        /// PAYMENT_METHOD                        缴费方式
        case BaseType.PAYMENT_METHOD:
            this.setState({valuePaymentMethod: tag.id})
            break
        /// PAYMENT_TIME                          缴费时间
        case BaseType.PAYMENT_TIME:
            this.setState({valuePaymentTime: tag.id})
            break
        default:
            break
        }
    }

    render() {
        return (
            <div className="app-component-assets-info">
                {/* orange select of all type */}
                {/*
                *   房产信息
                *       -- (有本地房)
                *           房产类型
                *               -- (住宅,商住两用,公寓,别墅,别墅,写字楼)
                *                   房产状态
                *                       -- (月供中)
                *                           还款方式
                *                               -- (等额还款)
                *                                   月供时间
                *                               -- (先息后本,其它还款方式)
                *                                   还款时间
                *                       -- (月供已结清)
                *                           结清时间
                *                       -- (全款购房)
                *                           过户时间
                *       -- (全国房)
                *           -- 房产地址
                *               -- 房产状态
                */}
                <OrangeSelect title="房产信息" tags={this.state.tagsHousePropertyInformation} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_PROPERTY_INFORMATION, tag)}/>
                {
                    this.state.valueHousePropertyInformation === 1 ? (
                        // 有本地房
                        <Fragment>
                            <OrangeSelect title="房产类型" tags={this.state.tagsHousePropertyType} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_PROPERTY_TYPE, tag)}/>
                            {
                                this.state.valueHousePropertyType >= 1 && this.state.valueHousePropertyType <= 6 ? (
                                    <Fragment>
                                        <OrangeSelect title="房产状态" tags={this.state.tagsHousePropertyStatus} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_PROPERTY_STATUS, tag)}/>
                                        {
                                            // 月供中       --> 还款方式
                                            // 月供已还清   --> (房产)结清时间
                                            // 全款购房     --> (房产)过户时间
                                            this.state.valueHousePropertyStatus === 1 ? (
                                                <Fragment>
                                                    <OrangeSelect title="还款方式" tags={this.state.tagsRepaymentMethod} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.REPAYMENT_METHOD, tag)}/>
                                                    {
                                                        this.state.valueRepaymentMethod === 1 ? (
                                                            <OrangeSelect title="月供时间" tags={this.state.tagsMonthlySupplyTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.MONTHLY_SUPPLY_TIME, tag)}/>
                                                        ) : this.state.valueRepaymentMethod > 1 ? (
                                                            <OrangeSelect title="还款时间" tags={this.state.tagsRepaymentTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.REPAYMENT_TIME, tag)}/>
                                                        ) : ''
                                                    }
                                                </Fragment>
                                            ) : this.state.valueHousePropertyStatus === 2 ? (
                                                <OrangeSelect title="结清时间" tags={this.state.tagsHouseSettlementTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_SETTLEMENT_TIME, tag)}/>
                                            ) : this.state.valueHousePropertyStatus === 3 ? (
                                                <OrangeSelect title="过户时间" tags={this.state.tagsHouseTransferTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_TRANSFER_TIME, tag)}/>
                                            ) : ''
                                        }
                                    </Fragment>
                                ) : ''
                            }
                        </Fragment>
                    ) : this.state.valueHousePropertyInformation === 2 ? (
                        // 全国房
                        <Fragment>
                            <OrangeSelect title="房产地址" tags={this.state.tagsHousePropertyAddress} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_PROPERTY_ADDRESS, tag)}/>
                            <OrangeSelect title="房产状态" tags={this.state.tagsHousePropertyStatus} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_PROPERTY_STATUS, tag)}/>
                            {
                                // 月供中       --> 还款方式
                                // 月供已还清   --> (房产)结清时间
                                // 全款购房     --> (房产)过户时间
                                this.state.valueHousePropertyStatus === 1 ? (
                                    <Fragment>
                                        <OrangeSelect title="还款方式" tags={this.state.tagsRepaymentMethod} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.REPAYMENT_METHOD, tag)}/>
                                        {
                                            this.state.valueRepaymentMethod === 1 ? (
                                                <OrangeSelect title="月供时间" tags={this.state.tagsMonthlySupplyTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.MONTHLY_SUPPLY_TIME, tag)}/>
                                            ) : this.state.valueRepaymentMethod > 1 ? (
                                                <OrangeSelect title="还款时间" tags={this.state.tagsRepaymentTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.REPAYMENT_TIME, tag)}/>
                                            ) : ''
                                        }
                                    </Fragment>
                                ) : this.state.valueHousePropertyStatus === 2 ? (
                                    <OrangeSelect title="结清时间" tags={this.state.tagsHouseSettlementTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_SETTLEMENT_TIME, tag)}/>
                                ) : this.state.valueHousePropertyStatus === 3 ? (
                                    <OrangeSelect title="过户时间" tags={this.state.tagsHouseTransferTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.HOUSE_TRANSFER_TIME, tag)}/>
                                ) : ''
                            }
                        </Fragment>
                    ) : ''
                }
                {/* 车产信息 */}
                <OrangeSelect title="车产信息" tags={this.state.tagsCarPropertyInformation} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.CAR_PROPERTY_INFORMATION, tag)}/>
                {
                    // 月供中   CAR_MORTGAGE_TIME   (车辆)按揭时间
                    // 月供已还清   CAR_SETTLEMENT_TIME (车辆)结清时间
                    // 全款购车 CAR_TRANSFER_TIME   (车辆)过户时间
                    this.state.valueCarPropertyInformation === 1 ? (
                        <OrangeSelect title="按揭时间" tags={this.state.tagsCarMortgageTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.CAR_MORTGAGE_TIME, tag)}/>
                    ) : this.state.valueCarPropertyInformation === 2 ? (
                        <OrangeSelect title="结清时间" tags={this.state.tagsCarSettlementTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.CAR_SETTLEMENT_TIME, tag)}/>
                    ) : this.state.valueCarPropertyInformation === 3 ? (
                        <OrangeSelect title="过户时间" tags={this.state.tagsCarTransferTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.CAR_TRANSFER_TIME, tag)}/>
                    ) : ''
                }
                {/* 寿险保单 */}
                <OrangeSelect title="寿险保单" tags={this.state.tagsInsurancePolicy} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.INSURANCE_POLICY, tag)}/>
                {
                    // 有人寿保险
                    this.state.valueInsurancePolicy === 1 ? (
                        <Fragment>
                            <OrangeSelect title="保险公司" tags={this.state.tagsInsuranceCompany} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.INSURANCE_COMPANY, tag)}/>
                            <OrangeSelect title="缴费方式" tags={this.state.tagsPaymentMethod} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.PAYMENT_METHOD, tag)}/>
                            {
                                this.state.valuePaymentMethod > 1 ? (
                                    <OrangeSelect title="缴费时间" tags={this.state.tagsPaymentTime} onChange={(tag: TagVO) => this.onChangeSelect(BaseType.PAYMENT_TIME, tag)}/>
                                ) : ''
                            }
                        </Fragment>
                    ) : ''
                }
            </div>
        )
    }
}
