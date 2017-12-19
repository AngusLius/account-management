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
                            <a href="" className="it-logo"></a>
                            <a href="">集团-CN域账号管理平台</a>
                        </div>
                    </div>
                    <div className="right-box fr">
                        <ul>
                            <li>
                                <a href="">首页</a>
                            </li>
                            <li>
                                <a href="">互动娱乐事业部</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header