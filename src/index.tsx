/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { Operation } from 'apollo-boost'
import { ErrorResponse } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
// amfe-flexible
import 'amfe-flexible'
import './assets/style/index.scss'
import App from './router/App'
import * as serviceWorker from './serviceWorker'
import { message } from 'antd'
message.config({
    top: 200,
    duration: 3,
    maxCount: 1
})
/**
 * Apollo Client
 * @param {string} uri http link
 * @param {Operation} request request interceptor
 * @todo handle token
 * @param {ErrorResponse} onError error callback
 */
const client = new ApolloClient({
    // uri: 'https://spacexdata.herokuapp.com/graphql',
    uri: 'http://localhost:4000/graphql',
    request: (operation: Operation) => {},
    onError: (error: ErrorResponse) => {
        if (error.graphQLErrors && error.graphQLErrors.length > 0) {
            if (error.graphQLErrors[0].message.indexOf('connect ECONNREFUSED') > -1) {
                message.error('网络连接失败!')
            } else {
                message.error(error.graphQLErrors[0].message)
            }
        }
    }
})
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <App/>
            </ApolloHooksProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
