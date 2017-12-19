import React from 'react'
import axios from 'axios'

import Partner from '../../component/Partner'

class ParEmp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Partner getCode={this.getCode.bind(this)} changePwd={this.changePwd.bind(this)}></Partner>
            </div>
        )
    }
    changePwd(mail, code) {
        return axios({
            method: 'post',
            url: 'changepwd/resetWBAccount',
            responseType: 'json',
            params: {
                mail: mail,
                validCode: code
            }
        })
    }
    //获取验证码
    getCode(mail) {
        return axios({
            method: 'post',
            url: 'changepwd/verificationCode',
            responseType: 'json',
            params: {
                mail: mail
            }
        })
    }
}

export default ParEmp