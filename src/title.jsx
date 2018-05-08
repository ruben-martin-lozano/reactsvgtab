import React from 'react'
import PropTypes from 'prop-types'

const tabTitle = 'TAB'

const Title = ({ lineThick, strings, yBase }) => {
  const getComponents = () => {
    const height = (yBase * (strings - 1)) / tabTitle.length
    const yDeflect = ((yBase - lineThick) / 2) - (height / 2) + (lineThick / 2)
    const boxHeight = 7
    const tabTitleX = (lineThick * 6) + boxHeight
    const components = []

    for (let i = 1; i <= tabTitle.length; i++) {
      const yPos = (height * i) + yDeflect

      components.push(
        <g key={`title${i}`}>
          <rect
            fill='#ffffff'
            x={tabTitleX - boxHeight}
            y={yPos - boxHeight}
            width={boxHeight * 2}
            height={boxHeight * 2}
          />
          <text x={tabTitleX} y={yPos} textAnchor='middle' alignmentBaseline='central'>
            {tabTitle.charAt(i - 1)}
          </text>
        </g>
      )
    }

    return components
  }

  return (
    <g className='sb-Title'>
      {getComponents()}
    </g>
  )
}

Title.propTypes = {
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Title
