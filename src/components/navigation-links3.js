import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links3.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={`navigation-links3-nav ${props.rootClassName} `}>
      <span className="">{props.text}</span>
      <span className="navigation-links3-text1">{props.text1}</span>
      <span className="navigation-links3-text2">{props.text2}</span>
      <span className="navigation-links3-text3">{props.text3}</span>
      <span className="navigation-links3-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text3: 'Team',
  text4: 'Blog',
  rootClassName: '',
  text1: 'Features',
  text2: 'Pricing',
  text: 'About',
}

NavigationLinks3.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks3
