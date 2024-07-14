import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './error404.css'

const Error404 = (props) => {
  return (
    <div className="error404-container">
      <Helmet>
        <title>Error404 - Janhvi Foundation</title>
        <meta property="og:title" content="Error404 - Janhvi Foundation" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="error404-hero">
        <div className="error404-container1">
          <img
            alt="pastedImage"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/29d12224-3d23-467a-9f24-62d192104917/d9feeb61-2c15-425b-b85e-8cc6431688cd?org_if_sml=117194"
          />
        </div>
        <h1 className="error404-text">THIS PAGE DOES NOT EXIST</h1>
        <span className="error404-text1">
          The page you are trying to access does not exist in our servers.
          Please check for any typo in the URL bar or try again later.
        </span>
        <button type="button" className="button error404-button">
          Back to Homepage
        </button>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Error404
