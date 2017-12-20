import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'

import './modify.scss'

class ModifyInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: '',
            oldPwd: '',
            newPwd: '',
            confirmPwd: '',
            errmsg: '',
            errmail: false,
            errOld: false,
            errNew: false,
            errConfirm: false,
            error: ''//后端服务错误
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <NavHeader navName="修改密码"></NavHeader> 
                <div className="modify-info-container">
                    <div className="l">
                        <div className="left"><span className="f-1">邮箱前</span>缀</div>
                        <input className="i" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.getMail.bind(this)}/>    
                    </div>
                    <div className="e-msg" style={{ display: !this.state.errmail ? 'none' : 'block' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left"><span className="f">旧密</span>码</div>
                        <input className="i" type="password" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.getOldPwd.bind(this)}/>
                    </div>
                    <div className="e-msg" style={{ display: !this.state.errOld ? 'none' : 'block' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left"><span className="f">新密</span>码</div>
                        <input className="i" type="password" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.getNewPwd.bind(this)}/>
                        <div className="t">
                            <div className="tip">
                                含大小写、数字、特殊字符里面任意三种，长度6-16位，且不与
                            </div>
                            <div className="tip">
                                历史密码重复
                            </div>
                        </div>
                    </div>
                    <div className="e-msg" style={{ display: !this.state.errNew ? 'none' : 'block' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left">确认新密码</div>
                        <input className="i" type="password" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.getConfirmPwd.bind(this)}/>
                    </div>
                    <div className="e-msg" style={{ display: !this.state.errConfirm ? 'none' : 'block' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="e-s" style={{ display: this.state.error ? 'block' : 'none' }}><i className="error-tip"></i>{this.state.error}</div>
                    <div className="b" onClick={this.modifyPwd.bind(this)}>
                        <span className="m">修改</span>
                    </div>
                </div>
            </div>
        )
    }
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.modifyPwd()
        }
    }
    modifyPwd() {
        const mail = this.state.mail,
            oldPwd = this.state.oldPwd,
            newPwd = this.state.newPwd,
            confirmPwd = this.state.confirmPwd
        this.setState({
            errmsg: '',
            errmail: false,
            errOld: false,
            errNew: false,
            errConfirm: false,
            error: ''
        })

        if (!this.checkInt(mail, oldPwd, newPwd, confirmPwd)) {
            return false
        }
            
        this.props.modifyPwd(mail, oldPwd, newPwd).then(res => {
            let data = res.data
            if (data.messageCode === 200) {
                this.props.history.push('/success', {type: '账号信息'})
            } else {
                this.setState({
                    error: data.message
                })
            }
        })
    }
    checkInt(mail, oldPwd, newPwd, confirmPwd) {
        if (!mail) {
            this.setState({
                errmail: true,
                errmsg: '邮箱不能为空'
            })
            return false
        }
        if (!oldPwd) {
            this.setState({
                errOld: true,
                errmsg: '旧密码不能为空'
            })
            return false
        }
        if (!newPwd) {
            this.setState({
                errNew: true,
                errmsg: '新密码不能为空'
            })
            return false
        }
        if (!confirmPwd) {
            this.setState({
                errConfirm: true,
                errmsg: '确认新密码不能为空'
            })
            return false
        }
        if (newPwd !== confirmPwd) {
            this.setState({
                errConfirm: true,
                errmsg: '两次新密码不相同'
            })
            return false
        }
        return true
    }
    getMail(e) {
        let mail = e.target.value.trim()
        this.setState({
            mail: mail
        })
    }
    getOldPwd(e) {
        let oldPwd = e.target.value.trim()
        this.setState({
            oldPwd: oldPwd
        })
    }
    getNewPwd(e) {
        let newPwd = e.target.value.trim()
        this.setState({
            newPwd: newPwd
        })
    }
    getConfirmPwd(e) {
        let confirmPwd = e.target.value.trim()
        this.setState({
            confirmPwd: confirmPwd
        })
    }
}

export default withRouter(ModifyInfo)