import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'

import './style.scss'

class Regular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            mail: '',
            card: 0,
            errmsg: '',
            errnum: false,
            errmail: false,
            errcard: false,
            error: '' //后端服务错误
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <NavHeader navName="正式员工"></NavHeader> 
                <div className="rugular-container">
                    <div className="l">
                        <div className="left"><span className="f-1">工</span>号</div>
                        <input className={this.state.errnum ? 'i e-b' : 'i'} onKeyUp={this.handleKeyup.bind(this)} onChange={this.getJobNum.bind(this)}/>    
                    </div>   
                    <div className="e-m" style={{ display: this.state.errnum ? 'block' : 'none' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left"><span className="f-2">邮箱前</span>缀</div>
                        <input className={this.state.errmail ? 'i e-b' : 'i'} onKeyUp={this.handleKeyup.bind(this)} onChange={this.getMail.bind(this)}/>    
                    </div>
                    <div className="e-m" style={{display: this.state.errmail ? 'block' : 'none'}}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="l">
                        <div className="left">身份证后四位</div>
                        <input className={this.state.errcard ? 'i e-b' : 'i'} onKeyUp={this.handleKeyup.bind(this)} onChange={this.getCard.bind(this)}/>    
                    </div>
                    <div className="e-m" style={{ display: this.state.errcard ? 'block' : 'none' }}><i className="error-tip"></i>{this.state.errmsg}</div>
                    <div className="e-s" style={{ display: this.state.error ? 'block' : 'none' }}><i className="error-tip"></i>{this.state.error}</div>
                    <div className="b" onClick={this.resetPwd.bind(this)}>
                        <span className="m">重置</span>
                    </div>
                </div>
            </div>
        )
    }
    handleKeyup(e) {
        if (e.keyCode === 13) {
            this.resetPwd();
        }
    }
    resetPwd() {
        this.setState({
            errmsg: '',
            errnum: false,
            errmail: false,
            errcard: false,
            error: ''
        })
        if (!this.checkInt()) {
            return false
        }
        const num = this.state.num,
            mail = this.state.mail,
        card = this.state.card
        this.props.resetPwd(num, mail, card).then(res => {
            let data = res.data
            if (data.messageCode === 200) {
                this.props.history.push('/success', {pwd: data.data, type: '正式员工'})
            } else {
                this.setState({
                    error: data.message
                })
            }
        })
    }
    //校验
    checkInt() {
        if (!this.state.num) {
            this.setState({
                errmsg: '工号不能为空',
                errnum: true
            })
            return false
        }
        if (!this.state.mail) {
            this.setState({
                errmsg: '邮箱不能为空',
                errmail: true
            })
            return false
        }
        if (!this.state.card) {
            this.setState({
                errmsg: '身份证号不能为空',
                errcard: true
            })
            return false
        }
        return true
    }
    getJobNum(e) {
        let num = e.target.value.trim()
        this.setState({
            num: num
        })
    }
    getMail(e) {
        let mail = e.target.value.trim()
        this.setState({
            mail: mail
        })
    }
    getCard(e) {
        let card = e.target.value.trim()
        this.setState({
            card: card
        })
    }
}

export default withRouter(Regular)