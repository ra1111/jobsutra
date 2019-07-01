import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/contentStyle.css'
 
const Menu = () =>{
  return(
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light wrapper_header" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">JobSutra</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
  
      <li class="nav-item"><Link to="/">Home</Link></li>
      <li class="nav-item"><Link to="/contact">Contact Us</Link></li>
      <li class="nav-item"><Link to="/about">About</Link></li>
      {/* <li class="nav-item cta mr-md-1"><a href="new-post.html" class="nav-link">Post a Job</a></li>
	  <li class="nav-item cta cta-colored"><a href="job-post.html" class="nav-link">Want a Job</a></li> */}
    </ul>
	      </div>
	    </div>
	  </nav>
  )
}
 
export default Menu