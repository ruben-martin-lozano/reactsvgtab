import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Tab from '../src/index.jsx'

const demo = (
  <Fragment>
    <Tab tab={[]} />
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
