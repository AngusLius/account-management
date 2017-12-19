import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../common/header'
import NavHeader from '../common/NavHeader'
import './partner.scss'

class Type extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header></Header>  
                <NavHeader navName="忘记密码"></NavHeader>
                <div className="type-container">
                    <Link to="/regular">
                        <div className="regular">
                            <i className="p-1"></i>
                            <div className="r">正式员工</div>
                        </div>
                    </Link>    
                    <Link to="/partner">
                        <div className="partner">
                            <i className="p-2"></i>
                            <div className="p">外部员工/合作方</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Type