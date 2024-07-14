import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import WorkProjects from '../components/work-projects'
import Footer from '../components/footer'
import './our-work.css'

const OurWork = (props) => {
  return (
    <div className="our-work-container">
      <Helmet>
        <title>OurWork - Janhvi Foundation</title>
        <meta property="og:title" content="OurWork - Janhvi Foundation" />
      </Helmet>
      <div className="our-work-container1">
        <Header rootClassName="header-root-class-name4"></Header>
      </div>
      <WorkProjects rootClassName="work-projects-root-class-name"></WorkProjects>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default OurWork
