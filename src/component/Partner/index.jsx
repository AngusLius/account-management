import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'

import './partner.scss'

class Partner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            num: 60,
            first: true,
            mail: '',
            code: '',
            //校验输入
            mailerr: true,  //邮箱校验失败
            codeerr: true, //验证码校验失败
            errmsg: ''
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <NavHeader navName="外包员工、合作方"></NavHeader> 
                <div className="partner-container"> 
                    <div className="l">
                        <div className="left" value={this.state.value}>工作邮箱</div>
                        <input className={this.state.mailerr ? 'i-1' : 'i-1 e-border'} onChange={this.getMail.bind(this)}/>    
                        <div className="t">
                            <div>
                                1、只支持corp邮箱、易信邮箱
                            </div>
                            <div>
                                2、若域账号和工作邮箱不相同，不支持修改
                            </div>
                        </div>
                    </div>
                    <div className="e-msg" style={{display: this.state.mailerr ? 'none' : 'block'}}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left"><span className="f">验证</span>码</div>
                        <input className={this.state.codeerr ? 'i-2' : 'i-2 e-border'} onChange={this.getIntCode.bind(this)}/>
                        <div className={this.state.first ? "g-code-1" : "g-code-3"} onClick={this.getCode.bind(this)} style={{display: this.state.show ? '' : 'none'}}>获取验证码</div>
                        <div className="g-code-2" style={{ display: !this.state.show ? '' : 'none' }}>{this.state.num}秒后获取</div>
                    </div>
                    <div className="e-msg" style={{display: this.state.codeerr ? 'none' : 'block'}}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="b" onClick={this.resetPwd.bind(this)}>
                        <span className="m">重置</span>
                    </div>
                </div>
            </div>
        )
    }
    //重置密码
    resetPwd() {
        if (!this.checkIn()) {
            return false
        }
        this.props.changePwd(this.state.mail, this.state.code).then(res => {
            let data = res.data
            if (data.messageCode === 200) {
                this.props.history.push('/success', {pwd: data.data, type: '外包员工、合作方'})
            } else {
                this.setState({
                    codeerr: false,
                    errmsg: data.message
                }) 
            }
        })
    }
    //校验输入情况
    checkIn() {
        const mail = this.state.mail,
            code = this.state.code
        this.setState({
            errmsg: '',
            mailerr: true,
            codeerr: true   
        })
        if (!mail) {
            this.setState({
                errmsg: '工作邮箱不能为空',
                mailerr: false    
            })
            return false
        }
        if (!code) {
            this.setState({
                errmsg: '验证码不能为空',
                codeerr: false    
            })
            return false
        }
        return true
    }
    //获取验证码
    getCode(e) {
        const mail = this.state.mail
        this.setState({
            errmsg: '',
            mailerr: true,
            codeerr: true   
        })
        //校验工作邮箱
        if (!mail) {
            this.setState({
                errmsg: '工作邮箱不能为空',
                mailerr: false    
            })
            return false
        }
        this.props.getCode(mail).then(res => {
            let data = res.data
            if (data.messageCode !== 200) {
                this.setState({
                    mailerr: false,
                    errmsg: data.message
                })
            } else {
                this.setState({
                    show: false,
                    first: false
                })
                let timer = setInterval(() => {
                    this.setState({
                        num: this.state.num - 1
                    })
                    if (this.state.num === 1) {
                        this.setState({
                            show: true,
                            num: 60
                        })
                        clearInterval(timer)
                    }
                }, 1000);
            }
        })
    }
    //获取工作邮箱
    getMail(e) {
        let value = e.target.value.trim()
        this.setState({
            mail: value
        }) 
    } 
    //获取输入框的验证码
    getIntCode(e) {
        let value = e.target.value.trim()
        this.setState({
            code: value
        })
    }
}

export default withRouter(Partner)