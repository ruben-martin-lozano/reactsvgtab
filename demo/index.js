import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Tab from '../src/index.jsx'

const tab = [
  [false, 0, false, false],
  [false, 2, false, false],
  [false, false, 0, false],
  [false, false, 1, false],
  [false, false, 3, false],
  [false, false, false, 0],
  [false, false, false, 2],
  [false, false, false, 3]
]

const demo = (
  <Fragment>
    <Tab tab={tab} />
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
