import React from 'react'
import axios from 'axios'

import ModifyInfo from '../../component/ModifyInfo'

class ModEmp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ModifyInfo modifyPwd={this.modifyPwd.bind(this)}></ModifyInfo>
            </div>
        )
    }
    modifyPwd(mail, oldPwd, newPwd) {
        return axios({
            method: 'post',
            url: 'changepwd/modifyDomainAccount',
            responseType: 'json',
            params: {
                mail: mail,
                prevPassword: oldPwd,
                newPassword: newPwd
            }
        })
    }
}

export default ModEmp