import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from '../container/Login'
import Type from '../component/Type'
import Success from '../component/Success'
import RegEmp from '../container/RegEmp'
import ParEmp from '../container/ParEmp'
import ModEmp from '../container/ModEmp'
import Home from '../container/Home'

class RouteMap extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/login' component={Login}></Route>
                        <Route path='/info' component={Home}></Route>
                        <Route path='/type' component={Type}></Route>
                        <Route path='/regular' component={RegEmp}></Route>
                        <Route path='/partner' component={ParEmp}></Route>
                        <Route path='/modify' component={ModEmp}></Route>
                        <Route path='/success' component={Success}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteMap

