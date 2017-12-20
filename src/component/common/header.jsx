import React from 'react'

import './header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="common-header">
                <div className="head-box clearfix">
                    <div className="left-box fl clearfix">
                        <div className="logo fl">
                            <span className="it-logo"></span>
                            <span>集团 - CN域账号管理平台</span>
                        </div>
                    </div>
                    <div className="right-box fr">
                        <ul>
                            <li>
                                <a target="_blank" href="http://Pw.it.netease.com">首页</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://rp.nie.netease.com/r/resetpass.php">互动娱乐事业部</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header