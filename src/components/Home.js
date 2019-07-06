import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/homeStyle.css";
import { back } from "../Assets/images/bg_1.jpg";
import {
  faCoffee,
  faSearch,
  faRocket,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding"
            style={{ width: "100%", paddingRight: "1em", paddingTop: "0em" }}
          >
            <div
              class="banner home-banner animate-banner"
              style={{
                backgroundImage: `url(${require("../Assets/images/1.jpg")})`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                color: "#6c63ff",
                width: "100%",
                overflow: "hidden",
                backgroundRepeat: "no-repeat"
              }}
              data-stellar-background-ratio="0.5"
            >
              <div class="home-banner__content">
                <h1
                  class="home-banner__title text-semi-bold visible-xs-block"
                  style={{ color: "white", mixBlendMode: "difference" }}
                >
                  Do More With Less!
                </h1>
                <h3
                  class="home-banner__title text-semi-bold hidden-xs"
                  style={{
                    color: "white",
                    mixBlendMode: "difference",
                    fontSize: "27px"
                  }}
                >
                  We at JobSutra understand how important each hire is for a
                  growing company.
                  <br />
                  <br /> JobSutra uses predictive alogorithm to find the right
                  fit for your company
                </h3>
                <h1
                  class="home-banner__desc hidden-xs"
                  style={{ color: "white", mixBlendMode: "difference" }}
                >
                  Hire Faster, Hire Smarter
                </h1>
                <a
                  type="button"
                  class="home-banner__cta btn-request-demo"
                  href="/#/contact/"
                  onclick="ga('send', 'event', 'Website', 'click', 'demo signup 1');"
                >
                  Request A Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section services-section bg-primary">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-3 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services d-block">
                <div class="icon">
                  {" "}
                  <FontAwesomeIcon
                    color="white"
                    style={{ stroke: "2px", strokeColor: "red" }}
                    size="4x"
                    icon={faSearch}
                  />
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3">Find the Right Job</h3>
                  <p style={{ width: "200px" }}>
                    {" "}
                    Finding the right job can be a daunting task. Find the right
                    job that suits you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services d-block">
                <div class="icon">
                  {" "}
                  <FontAwesomeIcon color="white" size="4x" icon={faCoffee} />
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3">Easy To Manage Jobs</h3>
                  <p style={{ width: "200px" }}>
                    Manage jobs through an easy to use job console.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services d-block">
                <div class="icon">
                  {" "}
                  <FontAwesomeIcon color="white" size="4x" icon={faRocket} />
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3">Top Careers</h3>
                  <p style={{ width: "200px" }}>
                    See which jobs have the best salaries and which jobs have
                    the most job security.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services d-block">
                <div class="icon">
                  {" "}
                  <FontAwesomeIcon color="white" size="4x" icon={faUserTie} />
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3">Search Expert Candidates</h3>
                  <p style={{ width: "200px" }}>
                    Today, candidates have far more power during the job search
                    and are hopping jobs frequently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="ftco-section img"  style={{backgroundImage: `url(${require('../Assets/images/bg_1.jpg')})`, backgroundPosition:"top center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    	<div class="sectionContainer">
    		<div class="row">
    			<div class="col-md-6">
    				<div class="browse-job p-5">
    					<span class="icon-search2 icon"></span>
    					<span class="subheading">Search Job</span>
    					<h2>Browse Job by Specialism</h2>
    					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section> */}
    </CSSTransitionGroup>
  );
};

export default Home;
