import React from 'react'
import axios from 'axios'

import Header from '../../component/common/header'
import Enter from '../../component/Enter'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Enter userlogin={this.userlogin.bind(this)}></Enter>
            </div>
        )
    }
    userlogin(account, pwd) {
        return axios({
            method: 'post',
            url: 'changepwd/login',
            responseType: 'json',
            params: {
                username: account,
                password: pwd
            }
        })
    }
}

export default Login