import React from 'react'
import PropTypes from 'prop-types'
import Strings from './strings'
import Nut from './nut'
import Title from './title'
import Markers from './markers'

const Tab = ({lineThick, tab}) => {
  if (!tab || !tab.length) return null

  const viewBox = {
    height: 80 + (lineThick * 2),
    width: 600,
    x: 0,
    y: 0
  }
  const strings = tab[0].length
  const yBase = viewBox.height / strings

  return (
    <svg className='sb-Tab' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      <Strings
        lineThick={lineThick}
        strings={strings}
        width={viewBox.width}
        yBase={yBase} />
      <Nut
        lineThick={lineThick}
        strings={strings}
        yBase={yBase} />
      <Title
        lineThick={lineThick}
        strings={strings}
        yBase={yBase} />
      <Markers
        lineThick={lineThick}
        strings={strings}
        tab={tab}
        yBase={yBase} />
    </svg>
  )
}

Tab.propTypes = {
  lineThick: PropTypes.number,
  tab: PropTypes.array.isRequired
}

Tab.defaultProps = {
  lineThick: 2
}

export default Tab
