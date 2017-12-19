import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './enter.scss'

class Enter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '',
            pwd: '',
            errmsg: ''
        }
    }
    render() {
        return (
            <div className="enter-container">
                <div className="st float-left">
                    <div className="ins-top">
                        <div>
                            <div className="mail">邮箱账号</div>
                            <div className="account">域账号</div>
                        </div>    
                        <div>
                            <div className="m-1">适用以下</div>
                            <div className="m-2">适用以下</div>
                        </div>
                        <i className="p-1"></i>
                    </div>
                    <div className="ins-bottom">
                        <div className="s-1">登录说明</div>
                        <div className="s-2">
                            <div className="t">Window用户</div>
                            <div className="c">已加域：域密码为开机密码</div>
                            <div className="c">未加域：初始域密码：Netease163，若忘记，请点击右侧忘记登入密码找回</div>
                            <div className="t">Mac及Linux用户</div>
                            <div className="c">初始域密码：Netease163，若忘记，请点击右侧忘记登入密码找回</div>
                        </div>
                    </div>
                </div>
                <div className="in-box float-right">
                    <div className="l-1">非互动娱乐事业群用户，欢迎登入</div>
                    <div className="l-2"><i className="p-2"></i>
                        <input onChange={this.getAccount.bind(this)} placeholder="域账号或邮箱前缀" />
                    </div>
                    <div className="l-3"><i className="p-3"></i>
                        <input onChange={this.getPwd.bind(this)} placeholder="域密码" type="password" />
                    </div>
                    <Link to='/type'><div className="l-4">忘记密码？</div></Link>
                    <div className="e-s" style={{ display: this.state.errmsg ? 'block' : 'none' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l-5" onClick={this.userlogin.bind(this)}>登录</div>
                </div> 
            </div>
        )
    }
    userlogin() {
        const account = this.state.account,
            pwd = this.state.pwd
        
        this.setState({
            errmsg: ''
        })

        if (!this.checkInt(account, pwd)) {
            return false
        }
        this.props.userlogin(account, pwd).then(res => {
            let data = res.data
            if (data.messageCode === 200) {
                this.props.history.push('/info')
            } else {
                this.setState({
                    errmsg: data.message
                })
            }
        }) 
    }
    checkInt(account, pwd) {
        if (!account) {
            this.setState({
                errmsg: '账号不能为空'
            })
            return false
        }
        if (!pwd) {
            this.setState({
                errmsg: '域密码不能为空'
            })
            return false
        }
        return true
    }
    getAccount(e) {
        let account = e.target.value.trim()
        this.setState({
            account: account
        })
    }
    getPwd(e) {
        let pwd = e.target.value.trim()
        this.setState({
            pwd: pwd
        })
    }
}

export default withRouter(Enter)