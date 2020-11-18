import React, { Component } from 'react'
import './Index.scss'
import { Badge, Button } from 'antd'
import {
    PicZanwuchanping2x,
    PicZanwuchanping3x,
    iconTianjiachanping2x,
    iconTianjiachanping3x,
    iconXinyongdaikuanliucheng2x,
    iconXinyongdaikuanliucheng3x
} from 'utils/assets'

interface Props {}
interface productsObj {
  porductimg: string;
  noproduct: string;
  selectproduct: string;
}
interface listObj {
  titles: string;
  bank?: string;
}
interface productlistObj {
  title: string;
  list: Array<listObj>;
}
interface State {
  products: Array<productsObj>;
  productlists: Array<productlistObj>;
}

export default class Index extends Component<Props, State> {
  readonly state: Readonly<State>;
  constructor(props: Readonly<Props>) {
      super(props)
      this.state = {
          products: [
              {
                  porductimg:
            window.devicePixelRatio >= 3
                ? PicZanwuchanping3x
                : PicZanwuchanping2x,
                  noproduct: '暂无产品',
                  selectproduct: '选择产品'
              },
              {
                  porductimg:
            window.devicePixelRatio >= 3
                ? PicZanwuchanping3x
                : PicZanwuchanping2x,
                  noproduct: '暂无产品',
                  selectproduct: '选择产品'
              },
              {
                  porductimg:
            window.devicePixelRatio >= 3
                ? PicZanwuchanping3x
                : PicZanwuchanping2x,
                  noproduct: '暂无产品',
                  selectproduct: '选择产品'
              },
              {
                  porductimg:
            window.devicePixelRatio >= 3
                ? PicZanwuchanping3x
                : PicZanwuchanping2x,
                  noproduct: '暂无产品',
                  selectproduct: '选择产品'
              }
          ],
          productlists: [
              {
                  title: '产品信息',
                  list: [
                      { titles: '产品名称', bank: '中信银行—薪资宝' },
                      { titles: '产品类型', bank: '信用贷款' },
                      { titles: '产品标签', bank:  '不查征信,不考核,可单签,可单签,福利产品,1日下款'},  //     { titles: '产品标签', bank: ['不查征信', '不考核', '可单签', '福利产品', '1日下款'] },
                      { titles: '产品描述', bank: '要求芝麻信用达到600分' }
                  ]
              },
              {
                  title: '产品参数',
                  list: [
                      { titles: '额度范围', bank: '10-100万' },
                      { titles: '年利率', bank: '24%' },
                      { titles: '贷款年限', bank: '24-36个月' },
                      { titles: '放款时效', bank: 'T+1' },
                      { titles: '还款方式', bank: '等额本息' },
                      { titles: '还款方式说明', bank: '借款人每月按相等的金额偿还贷款本息，其中每月贷款利息按月初剩余贷款本金计算并逐月结清'},
                      { titles: '产品流程', bank: '' },
                      { titles: '申请资料'}
                  ]
              },
              {
                  title: '综合参数',
                  list: [
                      { titles: '产品综合评分', bank: '8.1' },
                      { titles: '上架时间', bank: '2020年4月3日' },
                      { titles: '已申请人数', bank: '5489' },
                      { titles: '平均申请金额', bank: '50000' },
                      { titles: '平均申请期限', bank: '24个月' },
                      { titles: '', bank: ' ' }
                  ]
              }
          ]
      // productlists:{
      //      info:{},
      //      Productparams:{},
      //      Comprehensiveparams:{}
      // }
      }
  }
  // 添加产品
  handleAddProduct = () => {
      console.log('0000')
      const { products } = this.state
      //  console.log(products.length,'000');
      if (products.length > 5) {
          return
      }
      let params = {
          porductimg:
        window.devicePixelRatio >= 3 ? PicZanwuchanping3x : PicZanwuchanping2x,
          noproduct: '暂无产品',
          selectproduct: '选择产品'
      }
      products.push(params)
      this.setState({
          products
      })
  };

  render() {
      const { products, productlists } = this.state
      return (
          <div className="app-px">
              <div className="app-px-content">
                  <p className="productComparison">产品对比</p>
                  <p className="selectproductComparison">
                      {' '}
                      <Badge status="success" />
            查看您需要对比的产品
                  </p>
                  <div className="content">
                      <div
                          className="addproduct"
                          onClick={this.handleAddProduct.bind(this)}
                      >
                          <img
                              src={
                                  window.devicePixelRatio >= 3
                                      ? iconTianjiachanping3x
                                      : iconTianjiachanping2x
                              }
                              alt=""
                          />
                      </div>
                      {/* 信息列表             */}
                      <div className="information">
                          <div>产品信息</div>
                          {/* <div>
                                 <div className="productimg">
                                     <img src={PicZanwuchanping2x} className="image"/>
                                     <div className="noproduct">暂无产品</div>
                                     <div className="selectproduct">选择产品</div>
                                 </div>
                             </div> */}
                          {products.map((val, index) => {
                              return (
                                  <div key={index}>
                                      <div className="productimg">
                                          <img src={val.porductimg} className="image" alt=""/>
                                          <div className="noproduct">{val.noproduct}</div>
                                          <div className="selectproduct">{val.selectproduct}</div>
                                      </div>
                                  </div>
                              )
                          })}
                      </div>
                      {/* 马上申请 */}
                      <div className="ApplyNow">
                          <Button type="primary" shape="round">
                              {' '}
                马上申请{' '}
                          </Button>
              &nbsp; &nbsp; &nbsp;
                          <Button type="primary" shape="round">
                              {' '}
                马上申请{' '}
                          </Button>
                      </div>
                      {/* <div className="productlist">
                             <div className="title">产品信息</div>
                            <div className="informationrow">
                                 <div>产品名称</div>
                                 <div></div>
                                 <div></div>
                                 <div></div>
                                 <div></div>  
                             </div>  
                         </div> */}
                      {productlists.map((val, index) => {
                          return (
                              <div className="productlist" key={index}>
                                  <div className="title">{val.title}</div>
                                  {/* <div className="informationrow">
                                        <div>产品名称</div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>  
                                    </div>  */}
                                  {val.list.map((item, i) => {// item.titles ==='产品标签' ? (<div>{item.bank?.split(',')}</div>) : (<div> 1212</div>)
                                      return (
                                          <div className="informationrow" key={i}>
                                              {item.titles === '还款方式说明' || item.titles === '产品流程' || item.titles === '申请资料' || 
                                              item.titles === '' ? ( <div className="ohtertitle">{item.titles}</div> ) : ( <div>{item.titles}</div> )}
                                              {/* 第二格 */}{item.titles === '产品标签' ? ( <div className="productlabeling">{item.bank?.split(',').map((val, i)=>{return(<span key={i}>{val}</span>)})}</div>) : (<div></div>)
                                              &&  item.titles === '还款方式说明' ? ( <div>{item.bank}</div>) : (<div>{item.bank}</div>)
                                              &&  item.titles === '申请资料' ? ( <div> <div>1.身份证</div><div>2.户口簿</div> <div>3.不动产证明</div></div>) : (<div>{item.bank}</div>)
                                      &&  item.titles === '平均申请金额' ? ( <div className="fontcolor">{item.bank}</div>) : (<div>{item.bank}</div>)
                                      &&  item.titles === '产品流程' ? ( <div className="productimg"><img src={window.devicePixelRatio>3 ? iconXinyongdaikuanliucheng3x : iconXinyongdaikuanliucheng2x} alt=""/> <div><span>申请贷款</span> <span>电话初审</span> <span>门店办理</span> <span>审批放款</span></div> </div>) : (<div>{item.bank}</div>)
                                              }
                                              <div></div>
                                              <div></div>
                                              <div></div>
                                          </div>
                                      )
                                  })}
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
      )
  }
}
