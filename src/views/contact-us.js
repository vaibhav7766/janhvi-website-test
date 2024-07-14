import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {

  return (
    <div className="contact-us-container">
      <Helmet>
        <title>ContactUs - Janhvi Foundation</title>
        <meta property="og:title" content="ContactUs - Janhvi Foundation" />
      </Helmet>
      <div className="contact-us-container1">
        <Header rootClassName="header-root-class-name6"></Header>
      </div>
      <div className="contact-us-testimonial">
        <h1 className="contact-us-text">Contact Us</h1>
        <span className="contact-us-text01">
          <span className="contact-us-text02">
            There are many ways you can support Janhvi Foundation.
          </span>
          <br className="contact-us-text03"></br>
          <br className="contact-us-text04"></br>
          <span>
            Volunteers are an integral part of Janhvi Foundation. Janhvi
            Foundation also welcomes volunteers and interns to work in various
            departments. If you have a specific skill set or interest in medical
            filed, educational filed, environment, data analysis, graphic
            design, social media, etc., please contact our office to find out
            how you might be able to be part of the organization. Volunteers are
            the heart and soul. The support of volunteers and their dedication
            to our work has helped organization to grow.
          </span>
          <br></br>
          <br></br>
          <span>
            We welcome donations as well. Your generous donations allow Janhvi
            Foundation to continue to provide help to poor and needy people.
            Please contact us to know more about donation options.
          </span>
          <br></br>
        </span>
        <div className="contact-us-container2">
          <span className="contact-us-text10">
            <span className="contact-us-text11">Email Address:</span>
            <span><a href='mailto:janhvifoundation@gmail.com'> janhvifoundation@gmail.com</a></span>
            <br></br>
            <span className="contact-us-text14">Contact Number:</span>
            <span> +91 9822940848 or +91 8999322855</span>
            <br></br>
          </span>
        </div>
        <div className="contact-us-locate-us-map">
          <span className="contact-us-text19">
            <span className="contact-us-text20">Locate Us!</span>
            <br></br>
          </span>
          <iframe
            id="GoogleMaps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.2181987951403!2d73.85173547519162!3d18.5190392825743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMxJzA4LjUiTiA3M8KwNTEnMTUuNSJF!5e0!3m2!1sen!2sin!4v1698512617434!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            className="contact-us-iframe"
          ></iframe>
        </div>
        <span className="contact-us-text22">
          <span className="contact-us-text23">YOUTUBE</span>
          <br></br>
        </span>



        <div className="contact-us-you-tube">
          <div className="contact-us-container3">
            <span className="contact-us-text25">Day Night Shelter Project</span>
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=wJzQ-B8V9l7yLr1w&amp;amp;list=PL5WmJWtxEyER7cgv7YAg9uCoPJo_I1ogc"
              width="300"
              height="350"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              className="contact-us-iframe1"
            ></iframe>
          </div>
          <div className="contact-us-container4">
            <span className="contact-us-text26">
              <span>
                Maharashtra State
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Commission for Woman</span>
            </span>
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=jMJjGbor3awtfnjq&amp;amp;list=PL5WmJWtxEyES1E2ne7axw2FdRMMTCGlG-"
              width="300"
              height="350"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              className="contact-us-iframe2"
            ></iframe>
          </div>
          <div className="contact-us-container5">
            <span className="contact-us-text29">
              <span>Jal Jeevan Mission</span>
              <br></br>
            </span>
            <iframe
              id="Youtube"
              src="https://www.youtube.com/embed/videoseries?si=FV5c4ETM22J8jsIz&amp;amp;list=PL5WmJWtxEyEQfIvBJ3Uz5kdHHYLdQTXW1"
              width="300"
              height="350"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              className="contact-us-iframe3"
            ></iframe>
          </div>
        </div>

        
        <span className="contact-us-text32">
          <span className="contact-us-text33">Facebook</span>
          <br></br>
        </span>
        <div className="contact-us-facebook">
          <div className="contact-us-container6">
            <span className="contact-us-text35">Follow Us On Facebook</span>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJanhvifoundation%2F&amp;tabs=timeline&amp;width=600&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
              width="500"
              height="500"
              allowfullscreen="True"
              className="contact-us-iframe4"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default ContactUs
