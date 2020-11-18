import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import frame
import Frame from '../frame/Index'
interface Props {
  
}
interface State {

}
export default class App extends Component<Props, State> {
    render() {
        return (
            <Router basename="terminal">
                <Switch>
                    <Route path="/" component={Frame}></Route>
                </Switch>
            </Router>
        )
    }
}
