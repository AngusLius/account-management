import React from 'react'
import { render } from 'react-dom'

import RouteMap from './router/routeMap'

import './static/css/common.scss'

render(
    <RouteMap/>,
    document.getElementById('root')
)

