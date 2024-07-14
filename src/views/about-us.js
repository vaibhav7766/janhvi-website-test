import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - Janhvi Foundation</title>
        <meta property="og:title" content="AboutUs - Janhvi Foundation" />
      </Helmet>
      <div className="about-us-container1">
        <Header rootClassName="header-root-class-name2"></Header>
      </div>
      <div className="about-us-container2">
        <div className="about-us-container3">
          <div className="about-us-container4">
            <img id='about-logo'
              alt="image"
              src="/external/JanhviFoundationLogo.png"
              className="about-us-image"
            />
          </div>
          <div className="about-us-container5">
            <span className="about-us-text">
              <span>
                Janhvi Foundation is a non-profit organization dedicated to
                improving the quality of life through health, education, and
                socio-economic initiatives in India. Registered as a Public
                Charitable Trust, the foundation&apos;s mission is to provide
                services and execute projects that promote community welfare.
                Their vision is to ensure the accessibility and affordability of
                their services to all individuals without discrimination. 
                <br></br><br></br>
                Janhvi Foundation focuses on various areas such as medical and health,
                education, agriculture, and human rights. In the field of
                medicine and health, they establish and operate healthcare
                facilities, conduct health check-ups, and organize awareness
                camps on HIV/AIDS. The foundation also aims to provide education
                opportunities to underprivileged individuals. They also work
                towards agricultural development and rural empowerment and
                educate people about human rights. Janhvi Foundation is
                committed to serving the community and improving the lives of
                people through their dedicated efforts in healthcare, education,
                agriculture, and human rights.
              </span>
              <br className="about-us-text2"></br>
              <br></br>
              <span>
                {' '}
                Janhvi Foundation, a nonprofit organization focused on AIDS
                education and donation initiatives, requires effective social
                marketing and a professional website. Through compelling
                content, engaging social media campaigns, and community outreach
                programs, the foundation aims to raise awareness about AIDS and
                encourage donations. The website should feature a visually
                appealing design, accurate information about AIDS prevention and
                treatment, and a secure donation portal with multiple payment
                options. Additionally, integrating a chatbot into the website
                enhances user experience, providing instant support and guidance
                for visitors. These efforts will help Janhvi Foundation educate
                the public about AIDS and facilitate impactful donations
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default AboutUs
