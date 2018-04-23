import React from 'react'
import PropTypes from 'prop-types'

const Nut = ({ lineThick, strings, yBase }) => {
  const yDeflect = (yBase - lineThick) / 2
  const height = yBase * (strings - 1)

  return (
    <g className='sb-Nut'>
      <rect
        x={0}
        y={yBase - yDeflect}
        width={lineThick * 3}
        height={height}
      />
      <rect
        x={lineThick * 4}
        y={yBase - yDeflect}
        width={lineThick}
        height={height}
      />
    </g>
  )
}

Nut.propTypes = {
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Nut
