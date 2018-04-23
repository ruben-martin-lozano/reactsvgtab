import React from 'react'
import PropTypes from 'prop-types'

const Markers = ({ lineThick, strings, tab, yBase }) => {
  const getComponents = () => {
    const yDeflect = (yBase / 2) - (lineThick / strings)
    const radius = 10
    const xDeflect = lineThick * 18
    const tabValueX = lineThick * 12
    const components = []

    for (let i = 1; i <= tab.length; i++) {
      const xPos = tabValueX * i
      const positions = tab[i - 1].reverse()

      for (let j = 1; j <= positions.length; j++) {
        const tabValue = positions[j - 1]

        if (tabValue !== false) {
          const yPos = (yBase * (j - 1)) + yDeflect

          components.push(
            <g key={`tabValue${i}${j}`}>
              <circle cx={xDeflect + xPos} cy={yPos} r={radius} fill='#ffffff' />
              <text x={xDeflect + xPos} y={yPos} textAnchor='middle' alignmentBaseline='central'>
                {positions[j - 1]}
              </text>
            </g>
          )
        }
      }
    }

    return components
  }

  return (
    <g className='sb-Title'>
      {getComponents()}
    </g>
  )
}

Markers.propTypes = {
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  tab: PropTypes.array.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Markers
