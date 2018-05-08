import React from 'react'
import PropTypes from 'prop-types'

const Markers = ({ lineThick, strings, tab, yBase }) => {
  const getComponents = () => {
    const yDeflect = (yBase / 2) - (lineThick / strings)
    const xDeflect = lineThick * 12
    const tabValueX = lineThick * 12
    const components = []

    for (let i = 1; i <= tab.length; i++) {
      const xPos = tabValueX * i
      const positions = tab[i - 1].slice().reverse()

      for (let j = 1; j <= positions.length; j++) {
        const fretPosition = positions[j - 1]

        if (fretPosition !== false) {
          const yPos = (yBase * (j - 1)) + yDeflect
          const boxHeight = fretPosition < 9 ? 7 : 11

          components.push(
            <g key={`fretPosition${i}${j}`}>
              <rect
                fill='#ffffff'
                x={xDeflect + xPos - boxHeight}
                y={yPos - boxHeight}
                width={boxHeight * 2}
                height={boxHeight * 2}
              />
              <text x={xDeflect + xPos} y={yPos} textAnchor='middle' alignmentBaseline='central'>
                {fretPosition}
              </text>
            </g>
          )
        }
      }
    }

    return components
  }

  return (
    <g className='sb-Markers'>
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
