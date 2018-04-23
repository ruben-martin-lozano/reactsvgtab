import React from 'react'
import PropTypes from 'prop-types'

const tabTitle = 'TAB'

/*
<text x={tabTitleX} y={(height * i)} textAnchor='middle' alignmentBaseline='central'>
  {tabTitle.charAt(i - 1)}
</text>
*/

const Title = ({ lineThick, strings, yBase }) => {
  const getComponents = () => {
    const height = (yBase * (strings - 1)) / tabTitle.length
    const yDeflect = ((yBase - lineThick) / 2) - (height / 2) + (lineThick / 2)
    const radius = 7
    const tabTitleX = (lineThick * 7) + radius
    const components = []

    for (let i = 1; i <= tabTitle.length; i++) {
      const yPos = (height * i) + yDeflect

      components.push(
        <g key={`title${i}`}>
          <circle cx={tabTitleX} cy={yPos} r={radius} fill='#ffffff' />
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
