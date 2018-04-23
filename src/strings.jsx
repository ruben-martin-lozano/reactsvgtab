import React from 'react'
import PropTypes from 'prop-types'

const Strings = ({ lineThick, strings, width, yBase }) => {
  const getComponents = () => {
    const components = []
    const yDeflect = (yBase / 2) - (lineThick / 2)

    // Strings.
    for (let i = 0; i < strings; i++) {
      components.push(
        <rect
          key={`string${i}`}
          x={0}
          y={(yBase * i) + yDeflect}
          width={width}
          height={lineThick}
        />
      )
    }

    return components
  }

  return (
    <g className='sb-Strings'>
      {getComponents()}
    </g>
  )
}

Strings.propTypes = {
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Strings
