import React from 'react'
import axios from 'axios'

import Regular from '../../component/Regular'

class RegEmp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Regular resetPwd={this.resetPwd.bind(this)}></Regular>
            </div>
        )
    }
    resetPwd(num, mail, card) {
        return axios({
            method: 'post',
            url: 'changepwd/resetDomainAccount',
            responseType: 'json',
            params: {
                staffNumber: num,
                emailPrefix: mail,
                idcardSuffix: card
            }
        })
    }
}

export default RegEmp