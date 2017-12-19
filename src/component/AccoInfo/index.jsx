import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'
import './accoinfo.scss'

class AccoInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header></Header>
                <NavHeader navName="账号信息"></NavHeader>
                <div className="acc-info-container">
                    <i className="n-b"></i>
                    <i className="c-p"></i>
                    <div className="info">
                        <div className="content">
                            <div className="l">
                                <div className="m">上次登录时间：</div>
                                <div className="c">2017.11.17 16:51:28</div>
                            </div>
                            <div className="l">
                                <div className="m">上次登录设备：</div>
                                <div className="c">HIH-D-1946</div>
                            </div>
                            <div className="l">
                                <div className="m">密码过期时间：</div>
                                <div className="c">2017.12.10</div>
                            </div>
                        </div>    
                        <div className="tip">登录密码：请您定期
                            <Link to="/modify" className="m">修改</Link>
                        您的域密码</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccoInfo