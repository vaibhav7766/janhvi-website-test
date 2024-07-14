import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks4 from './navigation-links4'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img id='janhvi-logo'
          alt={props.image_alt}
          src="/external/JanhviFoundationLogo.png"
          className="header-image"
        />
      </Link>
      <div className="header-nav">
        <nav className="header-nav1">
          <Link to="/about-us" className="header-about-us">
            {props.About_Us}
          </Link>
          <Link to="/our-work" className="header-our-work">
            {props.Our_Work}
          </Link>
          <Link to="/campaigns" className="header-campaigns">
            {props.Campaigns}
          </Link>
          <Link to="/gallery" className="header-gallery">
            {props.Gallery}
          </Link>
          <Link to="/our-team" className="header-contact-us1">
            {props.Contact_Us1}
          </Link>
          <Link to="/contact-us" className="header-contact-us">
            {props.Contact_Us}
          </Link>
          <a
            href="https://forms.gle/o7rjaKqEnmD7TfvA8"
            id="Button"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link button"
          >
            {props.button}
          </a>
        </nav>
      </div>
      <div data-role="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-nav2">
          <div className="header-container">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header-image1"
            />
            <div
              data-role="CloseMobileMenu"
              className="header-close-mobile-menu"
            >
              <svg viewBox="0 0 1024 1024" className="header-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <NavigationLinks4
            rootClassName="rootClassName18"
            className=""
          ></NavigationLinks4>
        </div>
        <div className="">
          <svg viewBox="0 0 950.8571428571428 1024" className="header-icon04">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon06">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="header-icon08">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  About_Us: 'About Us',
  Our_Work: 'Our Work',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Blog: 'Blog',
  image_src1: '/external/logo-200h-1500h.png',
  rootClassName: '',
  Campaigns: 'Campaigns',
  image_alt1: 'image',
  Gallery: 'Gallery',
  Contact_Us: 'Contact Us',
  button: 'Join Hands!',
  image_alt: 'image',
  Contact_Us1: 'Our Team',
}

Header.propTypes = {
  About_Us: PropTypes.string,
  Our_Work: PropTypes.string,
  image_src: PropTypes.string,
  Blog: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  Campaigns: PropTypes.string,
  image_alt1: PropTypes.string,
  Gallery: PropTypes.string,
  Contact_Us: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  Contact_Us1: PropTypes.string,
}

export default Header
