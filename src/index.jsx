import React from 'react'
import PropTypes from 'prop-types'
import Strings from './strings'
import Nut from './nut'
import Title from './title'

const Tab = ({lineThick, tab}) => {
  if (!tab || !tab.length) return null

  const viewBox = {
    height: 100 + lineThick,
    width: 400,
    x: 0,
    y: 0
  }
  const strings = tab[0].length
  const yBase = viewBox.height / strings

  const getComponents = () => {
    const components = []

    components.push(
      <Strings
        lineThick={lineThick}
        strings={strings}
        width={viewBox.width}
        yBase={yBase} />
    )

    components.push(
      <Nut
        lineThick={lineThick}
        strings={strings}
        yBase={yBase} />
    )

    components.push(
      <Title
        lineThick={lineThick}
        strings={strings}
        yBase={yBase} />
    )

    return components
  }

  return (
    <svg className='sb-Tab' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      {getComponents()}
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
