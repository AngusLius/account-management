import React from 'react'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'
import './success.scss'

class Success extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const type = this.props.location.state.type
        return (
            <div>
                <Header></Header>
                <NavHeader navName={type}></NavHeader>
                <div className="success-container">
                    {type == '账号信息' ?
                    <div className="m">
                        您的域密码修改成功！
                    </div> :
                    <div>
                        <div className="l">
                        您的域密码已经重置为：
                        </div>
                        <div className="m">
                            {this.props.location.state.pwd}
                        </div>    
                    </div>
                     }    
                </div>
            </div>
        )
    }
}

export default Success