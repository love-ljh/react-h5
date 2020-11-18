import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import page
import Page404 from 'views/404/Index'
import Custom from 'views/custom/Index'
import List from 'views/list/Index'
import Detail from 'views/detail/Index'
import Compute from 'views/compute/Index'
import Pk from 'views/pk/Index'
import Match from 'views/match/Index'
import Search from 'views/search/Index'
import Plan from 'views/plan/Index'
// import GraphQL from 'views/graphql/Index'

interface Props {}
interface State {}

export default class Frame extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Fragment>
                <Switch>
                    {
                        /**
                         * 
                         * http://localhost:3000/terminal/list      产品列表页面
                         * http://localhost:3000/terminal/search    产品搜索页面
                         * http://localhost:3000/terminal/detail    产品详情页面
                         * http://localhost:3000/terminal/compute   贷款计算器页面
                         * http://localhost:3000/terminal/plan      贷款计算器还款计划页面
                         * http://localhost:3000/terminal/pk        产品PK页面
                         * http://localhost:3000/terminal/match     智能匹配页面
                         * http://localhost:3000/terminal/custom    定制贷款页面
                         * 
                         */
                    }
                    <Route path="/list" component={List}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/compute" component={Compute}></Route>
                    <Route path="/plan" component={Plan}></Route>
                    <Route path="/pk" component={Pk}></Route>
                    <Route path="/match" component={Match}></Route>
                    <Route path="/custom" component={Custom}></Route>
                    {/* <Route path="/graphql" component={GraphQL}></Route> */}
                    <Redirect exact from="/" to="/custom"></Redirect>
                    <Route component={Page404}></Route>
                </Switch>
            </Fragment>
        )
    }
}
