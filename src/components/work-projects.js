import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './work-projects.css'

const WorkProjects = (props) => {
  const [WorkMenu, setWorkMenu] = useState(0)
  return (
    <div className={`work-projects-container ${props.rootClassName} `}>
      <h1 className="work-projects-mainHeading">{props.heading}</h1>
      <div className="work-projects-container1">
        
        <button
          type="button"
          onClick={() => setWorkMenu(1)}
          className="work-projects-button button"
        >
          {props.Medical_Projects_BTN}
        </button>
        <button
          type="button"
          onClick={() => setWorkMenu(2)}
          className="work-projects-button1 button"
        >
          {props.Social_Projects_BTN}
        </button>
        <button
          type="button"
          onClick={() => setWorkMenu(3)}
          className="work-projects-button2 button"
        >
          {props.Education_Projects_BTN}
        </button>
        <button
          type="button"
          onClick={() => setWorkMenu(4)}
          className="work-projects-button3 button"
        >
          {props.button21}
        </button>
      </div>
      
      {WorkMenu === 0 && (
        <div className='work-zero-page'>
          <span className="work-projects-text01">{props.text4}</span>
          <br></br><br></br>
          <h5 className='h5'>Our Projects:</h5>
          <ul>
            <li><b>Medical Projects:</b> HIV Targeted Intervention for Injecting Drug Users (IDU), Health Camp for Metro Workers, Family Planning Program etc.</li>
            <li><b>Social Projects:</b> Day Night Shelter Project, Jal Jeevan Mission etc.</li>
            <li><b>Educational Projects:</b> Digital Literacy Program, HIV/AIDS Awareness in School etc. </li>
            <li><b>Other Projects:</b> Awareness programs, Free ration distribution during the COVID-19, Adolescent girl health program etc.</li>
          </ul>
        </div>
      )}


      {WorkMenu === 1 && (
  <div className="work-projects-container2">
    <h1 className="work-projects-text02">{props.Medical_Projects}</h1>
    <span className="work-projects-text03">{props.text}</span>
    <span className="work-projects-text04">{props.text1}</span>

    <div className="long-description">
      <h2 className="wp-block-heading">Medical Projects</h2>

            <p style={{ fontSize: '17px'}}>
                <br></br>
                <b>Location- Pimpri Pune</b>
                <br></br>
                The objective of Targeted Intervention Programme is to reduce the rate of transmission among the most vulnerable and marginalized population.
                One of the ways of controlling the disease from further spread is to carry out direct intervention programmes among these groups through multi-pronged strategies,
                beginning from behavior change communication, counseling, providing healthcare support, treatment for STD, and creating an enabling environment that will facilitate behavior change.
                Targeted Intervention is one of the most important components of the National AIDS Control Programme – Phase II.
            </p>
            <br></br>
            <p>
            <ul style={{ fontSize: '17px', listStyleType: 'disc', marginLeft: '20px' }}>
              <li>
                <b>Behavior Change Communication including peer educator:</b> Focusing on providing information on a one-to-one basis often through peers or those who have a close affinity to the populations being addressed.
              </li>
              <li>
                <b>Condom Programming:</b> Increasing the accessibility, acceptability, skills, and consistent use of condoms as means of prevention of STIs.
              </li>
              <li>
                <b>STI Care and Counseling:</b> Addressing the technical and attitudes of providers and ensuring quality care (partner notification, drug, counseling, and provision of condoms).
              </li>
              <li>
                <b>Creating an enabling environment:</b> Through addressing the macro environment in which risk behavior takes place and facilitating legal and policy changes that will facilitate preventive behavior.
              </li>
            </ul>

            </p>
            <br></br>
            <p style={{ fontSize: '17px'}}>
                As HIV/AIDS in India is a serious public health challenge with psychosocial and economic dimensions,
                NGOs have direct access to the communities and can be critical partners for Targeted Intervention and counseling activities.
            </p>
            <br></br>
            <p style={{ fontSize: '17px'}}>
                <p><b>Role of NGO in AIDS Programme</b></p>
                Maharashtra has a long history of involvement of NGOs in development programs,
                and they have played a vital role in the overall development of the state.
                Till today, NGOs have played an important role in reaching high-risk groups and have the capacity and commitment to work in the field of HIV/AIDS.
            </p>
            <ul style={{ fontSize: '17px'}}>
                <li>NGOs are directly involved with the people of their communities.
                    They have knowledge about the community needs and have support from the community.</li>
                <li>The NGOs can give voice to people's priorities.
                    Through this, the NGOs can become a bridge between the Government and the Community.</li>
                <li>The NGOs can respond quickly, directly, and sensitively to the needs of the people.</li>
                <li>They are flexible and able to incorporate community feedback immediately into action.
                    The NGOs can offer a range of innovative specialized services for the people affected by the AIDS epidemic and their programs are cost-effective.
                    With proper technical and financial support from the Government, NGOs will help the government achieve its goals.</li>
            </ul>
            <br></br>
            <p class="has-text-align-left" style={{ fontSize: '17px'}}>
                <strong>International Overdose Awareness Day</strong><br></br>
                International Overdose Awareness Day was initiated in 2001 by Sally J Finn.
                It is observed on August 31st. This day brings attention to issues surrounding substance use disorders (SUDs) and overdose deaths
                and allows people to grieve as they choose without fear of stigmatization.
                Janhvi Foundation organized this day on 31st August and conducted opioid substitution therapy (OST) for HIV prevention.<br></br><br></br>
                
                <div className='photo-place'>
                  <img decoding="async" fetchpriority="high" width="850" height="589" class="wp-image-440" style={{ width: '300px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/overdoseAwarenessDay.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/overdoseAwarenessDay.png 850w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/overdoseAwarenessDay-300x208.png 300w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/overdoseAwarenessDay-768x532.png 768w"
                      sizes="(max-width: 850px) 100vw, 850px"></img>
                  <img decoding="async" width="850" height="636" class="wp-image-441" style={{ width: '280px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention3.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention3.png 850w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention3-300x224.png 300w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention3-768x575.png 768w"
                      sizes="(max-width: 850px) 100vw, 850px"></img>
                  <img decoding="async" width="1351" height="566" class="wp-image-451" style={{ width: '440px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention2.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention2.png 1351w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention2-300x126.png 300w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention2-1024x429.png 1024w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/hivTargetedIntervention2-768x322.png 768w"
                      sizes="(max-width: 1351px) 100vw, 1351px"></img>
                </div>
            
            </p>
            <br></br>
            <p><b>Beneficiary Statistics</b></p>

            <table id="beneficiary">
                <tbody>
                    <tr>
                        <th><u>SNo.</u></th>
                        <th><u>Program</u></th>
                        <th><u>Year</u></th>
                        <th><u>Total Beneficiaries</u></th>
                    </tr>
                    <tr>
                        <td rowspan="3">1</td>
                        <td rowspan="3">Beneficiary IDU (Injecting drug user)</td>
                        <td>2019-2020</td>
                        <td>241</td>
                    </tr>
                    <tr>
                        <td>2020-2021</td>
                        <td>276</td>
                    </tr>
                    <tr>
                        <td>2021-2022</td>
                        <td>308</td>
                    </tr>

                    <tr>
                        <td rowspan="3">2</td>
                        <td rowspan="3">OST Beneficiary</td>
                        <td>2019-2020</td>
                        <td>71</td>
                    </tr>
                    <tr>
                        <td>2020-2021</td>
                        <td>93</td>
                    </tr>
                    <tr>
                        <td>2021-2022</td>
                        <td>110</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <p style={{ fontSize: '17px'}}><strong>Health Camp: HIV Testing and general health checks</strong><br></br>
                Janhvi Foundation has organized many health camps and conducted general health checks and also HIV testing.<strong></strong></p>
                
                <div className='photo-place'>
                  <img decoding="async" loading="lazy" width="1327" height="883" class="wp-image-417" style={{ width: '350px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp1.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp1.png 1327w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp1-300x200.png 300w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp1-1024x681.png 1024w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp1-768x511.png 768w"
                      sizes="(max-width: 1327px) 100vw, 1327px"></img>
                  <img decoding="async" loading="lazy" width="725" height="483" class="wp-image-418" style={{ width: '350px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp2.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp2.png 725w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp2-300x200.png 300w"
                      sizes="(max-width: 725px) 100vw, 725px"></img>
                  <img decoding="async" loading="lazy" width="1327" height="883" class="wp-image-419" style={{ width: '350px'}}
                      src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp3.png"
                      alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp3.png 1327w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp3-300x200.png 300w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp3-1024x681.png 1024w,
                      https://www.janhvifoundation.com/wp-content/uploads/2022/12/HIVHealthCamp3-768x511.png 768w"
                      sizes="(max-width: 1327px) 100vw, 1327px"></img>
                  </div>
                    <br></br>
                    <strong>Health Camp for Metro Workers</strong>
                <p>There are many metro workers working in Pune. Janhvi Foundation conducted a health camp for Maha-Metro workers at their sites.
                As part of this activity, we conducted health checks and routine health examinations on the workers.
                We have also taken sessions on health awareness.</p>
                <br></br>
                <b>Locations:</b>
          <div className="work-projects-container3">
            <div className="work-projects-locate-us-map">
              <iframe
                id="GoogleMaps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.8877802152515!2d73.79919897519419!3d18.624116582489695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzI2LjgiTiA3M8KwNDgnMDYuNCJF!5e0!3m2!1sen!2sin!4v1698827567928!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
                className="work-projects-iframe"
              ></iframe>
            </div>
            <div className="work-projects-locate-us-map1">
              <iframe
                id="GoogleMaps3"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d472.7622824057903!2d73.83280868834943!3d18.569608338576245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzA5LjciTiA3M8KwNDknNTguNCJF!5e0!3m2!1sen!2sin!4v1698830288109!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
                className="work-projects-iframe1"
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      )}
      
      {WorkMenu === 2 && (
        <div className="work-projects-container4">
          <h1 className="work-projects-text02">{props.heading1}</h1>
          <span className="work-projects-text07">{props.text3}</span>
          <span className="work-projects-text08">{props.text13}</span>


          <div class="long-description">
          <div className='photo-place'>
            <img decoding="async" fetchpriority="high" width="1512" height="694" class="wp-image-301" style={{ width: '380px'}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/DayNightShelter-1-1.png" alt=""></img>
            <img decoding="async" width="1222" height="575" class="wp-image-302" style={{ width: '370px'}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/DayNightShelter-4-1.png" alt=""></img>
            <img decoding="async" width="1134" height="550" class="wp-image-495" style={{ width: '360px'}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/DayNightShelter-5.png" alt=""></img><br></br>
          </div>

          <br></br>
          <p><strong>Beneficiary Statistics</strong></p>
          <table id="beneficiary">
              <tr>
                  <th><u>SNo.</u></th>
                  <th><u>Year</u></th>
                  <th><u>Total Beneficiaries</u></th>
              </tr>
              <tr>
                  <td>1.</td>
                  <td>2019-2020</td>
                  <td>2327(176)</td>
              </tr>
              <tr>
                  <td>2.</td>
                  <td>2020-2021</td>
                  <td>1601</td>
              </tr>
              <tr>
                  <td>3.</td>
                  <td>2021-2022</td>
                  <td>928</td>
              </tr>
          </table>
          <br></br><br></br>
          <p><strong>Jal Jeevan Mission:</strong> This Mission is envisioned to provide safe and adequate drinking water through individual household tap connections by 2024 to all households in rural India by the Government of India. The program will also implement source sustainability measures as mandatory elements, such as recharge and reuse through greywater management, water conservation, rainwater harvesting. The Jal Jeevan Mission will be based on a community approach to water and will include extensive Information, Education, and Communication as a key component of the mission. This mission looks to create a Jan Andolan for water, thereby making it everyone’s priority. Janhvi Foundation is working as a Supportive Implementing Agency for Tahashil Bhor, District-Pune.</p>
          
          <br></br>
          <p><strong>Beneficiary Statistics</strong></p>
          <table id="beneficiary">
              <tr>
                  <th><u>SNo.</u></th>
                  <th><u>Project Place</u></th>
                  <th><u>Total Beneficiaries</u></th>
              </tr>
              <tr>
                  <td>1.</td>
                  <td>Bhor Tahashi villages</td>
                  <td>70</td>
              </tr>
          </table>
          <br></br><br></br>

      </div>


          <div className="work-projects-locate-us-map2">
            <iframe
              id="GoogleMaps1"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.049056052397!2d73.83418577519288!3d18.571826982531682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzE4LjYiTiA3M8KwNTAnMTIuMyJF!5e0!3m2!1sen!2sin!4v1698827713302!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              className="work-projects-iframe2"
            ></iframe>
          </div>
          <br></br><br></br>
        </div>
        
      )}

      {WorkMenu === 3 && (
        <div className="work-projects-container5">
          <h1 className="work-projects-text02">
            {props.education_proj_heading}
          </h1>
          <span className="work-projects-text12">{props.text31}</span>
          <span className="work-projects-text13">{props.text131}</span>
          <span className="work-projects-text14">{props.text311}</span>
          <span className="work-projects-text15">{props.text1311}</span>
          <span className="work-projects-text16">{props.text3111}</span>
          <span className="work-projects-text17">{props.text13111}</span>
        </div>
      )}

      {WorkMenu === 4 && (
        <div className="work-projects-container6">
          <h1 className="work-projects-text02">{props.Other_Projects}</h1>
          <span className="work-projects-text19">{props.text312}</span>
          <span className="work-projects-text20">{props.text1312}</span>
          
          <span className="work-projects-text21">{props.text3112}</span>
          <span className="work-projects-text22">{props.text13112}</span>
          <span className="work-projects-text23">{props.text31111}</span>
          

          <div className='photo-place'>
            <img decoding="async" fetchpriority="high" width="1360" height="611" class="wp-image-407" style={{ width: '380px'}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution.png" alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution.png 1360w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution-300x135.png 300w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution-1024x460.png 1024w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution-768x345.png 768w" sizes="(max-width: 1360px) 100vw, 1360px"></img>
            &nbsp;&nbsp;&nbsp;
            <img decoding="async" width="1360" height="611" class="wp-image-408" style={{width: "380px"}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution2.png" alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution2.png 1360w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution2-300x135.png 300w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution2-1024x460.png 1024w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Free_Ration_Distribution2-768x345.png 768w" sizes="(max-width: 1360px) 100vw, 1360px"></img>
          </div>
          
          <span className="work-projects-text25">{props.text311111}</span>
          <span className="work-projects-text26">{props.text1311111}</span>
          
          <div className='photo-place'>
            <img decoding="async" width="1134" height="848" class="wp-image-403" style={{width: "370px"}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program1.png" alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program1.png 1134w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program1-300x224.png 300w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program1-1024x766.png 1024w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program1-768x574.png 768w" sizes="(max-width: 1134px) 100vw, 1134px"></img>
            &nbsp;&nbsp;&nbsp;
            <img decoding="async" loading="lazy" width="1890" height="1414" class="wp-image-404" style={{width: "370px"}} src="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2.png" alt="" srcset="https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2.png 1890w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2-300x224.png 300w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2-1024x766.png 1024w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2-768x575.png 768w, https://www.janhvifoundation.com/wp-content/uploads/2022/12/Adolescent_girl_health_program2-1536x1149.png 1536w" sizes="(max-width: 1890px) 100vw, 1890px"></img>
          </div>

          <br></br>
          

          <table id="beneficiary">
            <tr>
                <th>Area</th>
                <th>Programs Conducted</th>
                <th>Program Name</th>
                <th>Total Beneficiaries</th>
            </tr>
            <tr>
                <td>Maval Tahashi villages</td>
                <td>6</td>
                <td>Government Awareness Program</td>
                <td>15000+</td>
            </tr>
            <tr>
                <td>Ambegaon Tahashil villages</td>
                <td>6</td>
                <td>Government Awareness Program</td>
                <td>15000+</td>
            </tr>
            <tr>
                <td>PMC, Pune, old Ward, 30 Varje, Karvenagar.</td>
                <td>Multiple</td>
                <td>Women Empowerment</td>
                <td>15000 - 20000</td>
            </tr>
            <tr>
                <td>PMC, Pune, old Ward, 36 Erandwane.</td>
                <td>Multiple</td>
                <td>Women Empowerment</td>
                <td>15000 - 20000</td>
            </tr>
          </table>
          <br></br><br></br>


        </div>
      )}
    </div>
  )
}

WorkProjects.defaultProps = {
  text13:
    'Janhvi Foundation in association with Pune Corporation runs Night Shelter Project at Bopodi for homeless people. As per directions from the Hon. Supreme Court, Writ Petition No. 196/2001 and as per the orders given by the Hon. Maharashtra Government, Urban Development Department, a directive has been issued that for a city with a population of more than five lakhs, a night shelter project should be set up as one night shelter for every one lakh people population.  Considering that the population of Pune city is 38 lakhs, the government has announced that it has implemented the night shelter project in Pune city. In accordance with the orders and the guiding principles prescribed by the government, the Social Development Department, Pune Municipal Corporation, with co-operation from the NGOs, is implementing the night shelter project in order to provide the facility of shelter to the homeless and destitute in the city. In one such case, Jhanvi foundation has provided help to locate firms which would provide shelter and work for nine migrant workers who lost their jobs due to covid lockdown.',
  heading1: 'Social Projects',
  text4:
    'Janhvi Foundation has worked towards the betterment of society by conducting various projects in various fields. Some of them are as below.',
  heading: 'Projects',
  text131:
    'Digital literacy is the ability to navigate our digital world using reading, writing, technical skills, and critical thinking. Maharashtra state commission of Women and Janhvi foundation have conducted workshop for Digital literacy at Abhinav Jr College, Ambegaon and 89 girls participated in it.',
  Medical_Projects: 'Medical Projects',
  text311: 'HIV/AIDS Awareness in School',
  text31111:
    'COVID-19 has left many people and families helpless during the pandemic period. Janhvi foundation came forward in such tough situations to help people by distributing free rations.',
  rootClassName: '',
  text3112: 'Women Empowerment Programs',
  Social_Projects_BTN: 'Social Projects',
  text132:
    'This Mission is envisioned to provide safe and adequate drinking water through individual household tap connections by 2024 to all households in rural India by Government of India . The programme will also implement source sustainability measures as mandatory elements, such as recharge and reuse through grey water management, water conservation, rain water harvesting. The Jal Jeevan Mission will be based on a community approach to water and will include extensive Information, Education and communication as a key component of the mission. The Jal Jeevan Mission will be based on a community approach to water and will include extensive Information, Education and communication as a key component of the mission. This mission looks to create a jan andolan for water, thereby making it everyone’s priority. Janhvi foundation is working as Supportive Implementing Agency for Tahashil Bhor, District-Pune.',
  text: 'HIV Targeted Intervention for Injecting Drug Users (IDU)',
  text31: 'Digital Literacy Program',
  text3: 'Day Night Shelter Project',
  text131111:
    'Janhvi foundation has conducted many coachings of special Mathematics and English for many students.',
  Education_Projects_BTN: 'Education Projects',
  text2: 'Text',
  text1311:
    'Giving students information about HIV and AIDS is important. What HIV and AIDS are, how they are transmitted, and how people can protect themselves from infection etc. must be educated in schools. Janhvi Foundation with collaboration of Pune City AIDS Control Society have conducted HIV /AIDS awareness program in various schools. Around 1530 students participated from 15 different schools.',
  text12: 'Four Key Elements / Components',
  education_proj_heading: 'Education Projects',
  Medical_Projects_BTN: 'Medical Projects',
  button21: 'Other Projects',
  text311111: 'Adolescent Girl Health Program',
  text312: 'Awareness Programs',
  text11:
    'Currently there is no cure for HIV. Once people get HIV, they have it for their lifetime. Injecting drug use (IDU) has emerged as an important route in the HIV transmission dynamics in India. The most effective means of controlling the spread of HIV in India is through the implementation of targeted interventions (TIs). NACO has prepared some operational guidelines for HIV targeted interventions. Janhvi foundation has conducted such HIV target interventions for Injecting drug users.',
  Other_Projects: 'Other Projects',
  text1311111:
    'Adolescence is the phase of life between childhood and adulthood, from ages 10 to 19. It is a unique stage of human development and an important time for laying the foundations of good health. Adolescents experience rapid physical, cognitive and psychosocial growth. Many girls in developing countries enter adolescence undernourished, making them more vulnerable to disease. Janhvi foundation has conducted many health programs to educate young girls.',
  text1312:
    'Pune Information department and Janhvi foundation conducted many awareness programs for various schemes of government.',
  text13111:
    'Janhvi foundation has conducted many coachings of special Mathematics and English for many students.',
  text13112:
    'Janhvi Foundation in association with PMC, Pune runs various projects in which vocational training, program, lecture on various subject etc. are conducted.',
  text32: 'Jal Jeevan Mission',
  text3111: 'Special Mathematics and English Coaching',
  text1:
    'Currently there is no cure for HIV. Once people get HIV, they have it for their lifetime. Injecting drug use (IDU) has emerged as an important route in the HIV transmission dynamics in India. The most effective means of controlling the spread of HIV in India is through the implementation of targeted interventions (TIs). NACO has prepared some operational guidelines for HIV targeted interventions. Janhvi foundation has conducted such HIV target interventions for Injecting drug users.',
  text121: 'Four Key Elements / Components',
  text5: 'Locate Us!',
  text51: 'Locate Us!',
  text52: 'Locate Us!',
}

WorkProjects.propTypes = {
  text13: PropTypes.string,
  heading1: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  text131: PropTypes.string,
  Medical_Projects: PropTypes.string,
  text311: PropTypes.string,
  text31111: PropTypes.string,
  rootClassName: PropTypes.string,
  text3112: PropTypes.string,
  Social_Projects_BTN: PropTypes.string,
  text132: PropTypes.string,
  text: PropTypes.string,
  text31: PropTypes.string,
  text3: PropTypes.string,
  text131111: PropTypes.string,
  Education_Projects_BTN: PropTypes.string,
  text2: PropTypes.string,
  text1311: PropTypes.string,
  text12: PropTypes.string,
  education_proj_heading: PropTypes.string,
  Medical_Projects_BTN: PropTypes.string,
  button21: PropTypes.string,
  text311111: PropTypes.string,
  text312: PropTypes.string,
  text11: PropTypes.string,
  Other_Projects: PropTypes.string,
  text1311111: PropTypes.string,
  text1312: PropTypes.string,
  text13111: PropTypes.string,
  text13112: PropTypes.string,
  text32: PropTypes.string,
  text3111: PropTypes.string,
  text1: PropTypes.string,
  text121: PropTypes.string,
  text5: PropTypes.string,
  text51: PropTypes.string,
  text52: PropTypes.string,
}

export default WorkProjects
