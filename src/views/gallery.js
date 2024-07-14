import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Janhvi Foundation</title>
        <meta property="og:title" content="Gallery - Janhvi Foundation" />
      </Helmet>
      <div className="gallery-container1">
        <Header rootClassName="header-root-class-name9"></Header>
      </div>

      <div className="gallery-iframe-holder">
        <iframe
          src="https://widget-c982e84816014e79af4616b274a3fed5.elfsig.ht"
          allowFullScreen
          className="gallery-iframe"
        ></iframe>
        
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default Gallery
