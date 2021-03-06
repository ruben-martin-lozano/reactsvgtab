import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Tab from '../src/index.jsx'

const ukuleleTab = [
  [false, 0, false, false],
  [false, 2, false, false],
  [false, false, 0, false],
  [false, false, 1, false],
  [false, false, 3, false],
  [false, false, false, 0],
  [false, false, false, 2],
  [false, false, false, 3],
  [false, false, false, 2],
  [false, false, false, 0],
  [false, false, 3, false],
  [false, false, 1, false],
  [false, false, 0, false],
  [false, 2, false, false],
  [false, 0, false, false]
]

const guitarTab = [
  [false, false, 0, false, false, false],
  [false, false, 2, false, false, false],
  [false, false, false, 0, false, false],
  [false, false, false, 1, false, false],
  [false, false, false, 3, false, false],
  [false, false, false, false, 0, false],
  [false, false, false, false, 2, false],
  [false, false, false, false, 3, false],
  [false, false, false, false, 2, false],
  [false, false, false, false, 0, false],
  [false, false, false, 3, false, false],
  [false, false, false, 1, false, false],
  [false, false, false, 0, false, false],
  [false, false, 2, false, false, false],
  [false, false, 0, false, false, false]
]

const demo = (
  <Fragment>
    <Tab tab={ukuleleTab} />
    <div className='demo-Inverse'>
      <Tab tab={ukuleleTab} />
    </div>
    <div className='demo-Custom'>
      <Tab tab={guitarTab} />
    </div>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
