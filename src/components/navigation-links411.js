import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links411.css'

const NavigationLinks411 = (props) => {
  return (
    <nav className={`navigation-links411-nav ${props.rootClassName} `}>
      <span className="">{props.text}</span>
      <span className="navigation-links411-text1">{props.text1}</span>
      <span className="navigation-links411-text2">{props.text2}</span>
      <span className="navigation-links411-text3">{props.text3}</span>
      <span className="navigation-links411-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks411.defaultProps = {
  text: 'About',
  text4: 'Blog',
  text1: 'Features',
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
}

NavigationLinks411.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks411
