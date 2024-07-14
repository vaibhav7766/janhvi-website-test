import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links41.css'

const NavigationLinks41 = (props) => {
  return (
    <nav className={`navigation-links41-nav ${props.rootClassName} `}>
      <span className="">{props.text}</span>
      <span className="navigation-links41-text1">{props.text1}</span>
      <span className="navigation-links41-text2">{props.text2}</span>
      <span className="navigation-links41-text3">{props.text3}</span>
      <span className="navigation-links41-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks41.defaultProps = {
  text2: 'Pricing',
  text3: 'Team',
  text4: 'Blog',
  rootClassName: '',
  text1: 'Features',
  text: 'About',
}

NavigationLinks41.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks41
