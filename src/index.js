import React from 'react'
import ReactDOM from 'react-dom'

import Statistics from './components/task-2/StatisticsList'
import statisticalData from './components/task-2/statistical-data.json'

ReactDOM.render(<Statistics stats= {statisticalData}/> , document.getElementById('root'))
