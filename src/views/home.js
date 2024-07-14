import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './home.css'


const Home = (props) => {

  const [count, setCount] = useState({
    children: 0,
    villages: 0,
    projects: 0,
    states: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        children: prevCount.children < 10000 ? prevCount.children + 1 : 10000,
        villages: prevCount.villages < 200 ? prevCount.villages + 1 : 200,
        projects: prevCount.projects < 14 ? prevCount.projects + 1 : 14,
        states: prevCount.states < 1 ? prevCount.states + 1 : 1,
      }));
    }, 5); // Adjust the interval (in milliseconds) based on your preference for the rising speed


    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="home-container">
      <Helmet>
        <title>Janhvi Foundation</title>
        <meta property="og:title" content="Janhvi Foundation" />
      </Helmet>
      <div className="home-nav-bar">
        <Header rootClassName="header-root-class-name"></Header>
      </div>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-container1">
            <div className="home-content">
              <div className="home-hero-section">
                <div className="home-header">
                  <h1 className="home-heading">
                    <span className="home-text">
                      Welcome To
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text01"></br>
                    <span className="home-text02">Janhvi Foundation</span>
                    <br className="home-text03"></br>
                  </h1>
                  <p className="home-caption">
                    Changing Lives, One Initiative at a Time
                  </p>
                </div>
              </div>

              
              <div className="home-container2">
                <img
                  alt="image"
                  src="/external/Health-Awarness-Labour.jpg"
                  className="home-image"
                />
              </div>

            
              {/* <div className="home-container2">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={2000}
                >
                  <div>
                    <img
                      alt="image1"
                      src="/external/Health-Awarness-Labour.jpg"
                      className="home-image"
                    />
                  </div>
                  <div>
                    <img
                      alt="image2"
                      src="/external/HealthCampForWorkers-3.png"
                      className="home-image"
                    />
                  </div>
                  <div>
                    <img
                      alt="image2"
                      src="/external/HIVAIDS.jpg"
                      className="home-image"
                    />
                  </div>
                  <div>
                    <img
                      alt="image2"
                      src="/external/Adolescent-Girls-Health.jpg"
                      className="home-image"
                    />
                  </div>
                </Slider>
              </div> */}

              
            </div>


            <div className="home-container3">
              <span className="home-text04">
                Janhvi Foundation is a non-profit, non-governmental organization
                dedicated to improving and upgrading quality of life through
                health, education and socio-economic initiatives while promoting
                active people participation in India. We are registered as a
                Public Charitable Trust on 15th December 2009. We, at Janhvi
                foundation, are working selflessly for many years now and
                consistently working towards the betterment of the society. We
                have organized programs on Health, Human rights and conducted
                many trainings on psychological, behavioral, personality
                development aspects.
              </span>
            </div>
          </div>
        </div>
        <div className="home-buttons">
          <button id="Button" className="home-button button">
            <span><a href='https://forms.gle/o7rjaKqEnmD7TfvA8'>Join Hands!</a></span>
          </button>
          <Link to="/about-us" className="home-navlink button">
            <span>Learn More</span>
          </Link>
        </div>
      </section>


      <div className="home-impact">
          <div className="home-container4">
            <h1 className="home-text07">Our Impact</h1>
            <div className="home-containervalue">
              <div className="home-values">
                <h1 className="home-text08">{count.children}+</h1>
                <span className="home-text09">Children and Family</span>
              </div>
              <div className="home-values1">
                <h1 className="home-text10">{count.villages}+</h1>
                <span className="home-text11">Villages</span>
              </div>
              <div className="home-values2">
                <h1 className="home-text12">{count.projects}+</h1>
                <span className="home-text13">Projects</span>
              </div>
              <div className="home-values3">
                <h1 className="home-text14">{count.states}+</h1>
                <span className="home-text15">States</span>
              </div>
            </div>
          </div>
       </div>


      <section className="home-mission">
        <div className="home-content1">
          <div className="home-main1">
            <span className="home-title">Our Mission</span>
            <div className="home-header1">
              <h2 className="home-heading1">
                Janhvi Foundation&apos;s core mission lies in the upliftment of
                human society through various programs to improve quality of
                life 
              </h2>
              <p className="home-caption1">
                Healthcare, Education, Economy, are some of the domains we work
                actively work in daily
              </p>
            </div>
          </div>
          <div className="home-highlights">
            <div className="home-highlight">
              <h3 className="home-title1">Action</h3>
              <p className="home-description">
                To improve the lives of people through various interactive
                sessions and campaigns
              </p>
            </div>
            <div className="home-highlight1">
              <h3 className="home-title2">Help</h3>
              <p className="home-description1">
                The underprivileged people struggling to makes ends meet with
                regular requir
              </p>
            </div>
          </div>
        </div>
        <div className="home-images">
          <img
            alt="image"
            src="/external/sweater-400w.jpg"
            className="home-image1"
          />
        </div>
      </section>
      <div className="home-details-container">
        <div className="home-details">
          <div className="home-category">
            <img alt="image" src="/details-1.svg" className="home-image2" />
            <div className="home-container5">
              <h1>
                <span>DAY-NIGHT SHELTER</span>
                <br></br>
              </h1>
              <p className="home-text19">
                <span>
                  Our Digital Literacy Program empowers individuals with
                  essential digital skills, enabling them to navigate the modern
                  world with confidence and competence.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-category1">
            <img alt="image" src="/details-1.svg" className="home-image3" />
            <div className="home-container6">
              <h1>
                <span>HIV-AIDS PREVENTION</span>
                <br></br>
              </h1>
              <p className="home-text25">
                <span>
                  The Health Camp for Metro Workers is a vital initiative that
                  provides much-needed healthcare services and support to the
                  dedicated individuals who keep our urban transit systems
                  running smoothly.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-category2">
            <img alt="image" src="/details-1.svg" className="home-image4" />
            <div className="home-container7">
              <h1>
                <span>JAL JEEVAN MISSION</span>
                <br></br>
              </h1>
              <p className="home-text31">
                <span>
                  Jal Jeevan Mission is our commitment to ensuring access to
                  clean and sustainable water sources for communities, striving
                  to make safe drinking water a reality for all.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
