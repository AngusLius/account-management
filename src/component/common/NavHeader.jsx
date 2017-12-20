import React from 'react'
import { Link } from 'react-router-dom'

import './NavHeader.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const navName = this.props.navName
        return (
            <div className="common-nav-header">
                <Link to="/login" className="link">
                    非互动娱乐事业群  
                </Link> 
                &nbsp;>&nbsp;
                {
                    navName === '忘记密码' ?
                        <span>忘记密码</span> :
                            navName === '账号信息' ?
                        <span>账号信息</span> :
                            navName === '修改密码' ? 
                        <span>
                            <Link to="/info" className="link">
                                账号信息
                            </Link>
                            &nbsp;>&nbsp;
                            <span>
                                {navName}
                            </span>       
                        </span> :        
                        <span>
                            <Link to="/type" className="link">
                                忘记密码
                            </Link>
                            &nbsp;>&nbsp;
                            <span>
                                {navName}
                            </span>
                        </span>
                }
            </div>
        )
    }
}

export default Header