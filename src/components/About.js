import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/aboutStyle.css'
import back from "../Assets/images/undraw_work_time_lhoj.svg"
const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="about">


    <div class="rowAbout">

        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service">
                <div class="panel__img"><img style={{borderRadius:"3%"}} src="https://www.gocrackit.com/wp-content/themes/sydney/images/home/our_services_images/career_conversation.jpeg"/>
                </div>
                 <a href="javascript:void(0);" onclick="show_career_conversation();"><h3>Career Guide</h3></a>
            
                
                <ul class="fa-ul">
                 <hr/>
              <li><span class="fa-li"></span>Explore career opportunities in an industry</li>
             
              <hr/>
              <li><span class="fa-li"></span>Understand strategy to enter &amp; grow in the industry</li>
           
               <hr/>
              <li><span class="fa-li"></span>Understand key success factors in the industry </li>
    
               <hr/>
              <li><span class="fa-li"></span>Understand the latest trends and nuances of the industry</li>
              

            </ul><br/><br/>
          
            
            </div>
        </div>
    
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service">
              <div class="panel__img"><img style={{borderRadius:"3%"}}  src="https://www.gocrackit.com/wp-content/themes/sydney/images/home/our_services_images/resume review.jpeg"/></div>
              <a href="javascript:void(0);" onclick="show_resume_review();"><h3>Resume Review</h3></a>
              
                <ul class="fa-ul">
                <hr/>
              <li><span class="fa-li"></span>Prepare structured and targeted resumes</li>
              <hr/>
              <li><span class="fa-li"></span>Understand gaps in resume and take corrective actions</li>
              <hr/>
              <li><span class="fa-li"></span>Identify the strengths and weaknesses of resume and anticipate likely questions</li>
              <hr/>
              <li><span class="fa-li"></span>Bring out the achievements and impact created clearly and crisply</li>
              <hr/>
            </ul><br/>
   
             </div>
        </div>
      
         
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service">
                <div class="panel__img"><img style={{borderRadius:"3%"}} src="https://www.gocrackit.com/wp-content/themes/sydney/images/home/our_services_images/panel-interview.jpg"/></div>
                   <a href="javascript:void(0);" onclick="show_mock_interview();">  <h3>Mock Interview</h3></a>
              
                
      
                <ul class="fa-ul">
                    <hr/>
              <li><span class="fa-li"></span>Practice interview with real industry experts</li>
              <hr/>
              <li><span class="fa-li"></span>Face a simulated interview and identify your own strengths and weaknesses</li>
              <hr/>
              <li><span class="fa-li"></span>Get detailed feedback by mentor on areas of improvement</li>
              <hr/>
              <li><span class="fa-li"></span>Get an insight on the kind of questions which may be asked</li>
              <hr/>
            </ul><br/>
            </div>
        </div>
   
    </div>
        </div>
    </CSSTransitionGroup>
  )
}

export default About
