import React from 'react'

import AccoInfo from '../../component/AccoInfo'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <AccoInfo></AccoInfo>
            </div>
        )
    }
}

export default Home